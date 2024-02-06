const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' })); // Limit request size to 10MB
app.use(express.json());

let users = [];
let houses = [];

const passphrase = 'passphrase';

function readUserData() {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading user data from file:', err);
    } else {
      users = JSON.parse(data);
    }
  });
}

// Function to read house data from file
function readHouseData() {
  fs.readFile('houses.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading house data from file:', err);
    } else {
      houses = JSON.parse(data);
    }
  });
}

readUserData();
readHouseData();

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ email: user.email }, passphrase, { expiresIn: '1h' });

  res.json({ token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, passphrase, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  users.push({ email, password });

  fs.writeFile('users.json', JSON.stringify(users), (err) => {
    if (err) {
      console.error('Error writing users data to file:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});

app.post('/create-house', authenticateToken, (req, res) => {
  const { image, name, bathrooms, location, superficie, price } = req.body;

  const newHouse = {
    id: Math.floor(Math.random() * 100000000),
    image,
    name,
    bathrooms,
    location,
    superficie,
    price
  };

  houses.push(newHouse);

  fs.writeFile('houses.json', JSON.stringify(houses), (err) => {
    if (err) {
      console.error('Error writing houses data to file:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'House created successfully' });
  });
});

app.put('/houses/:id', authenticateToken, (req, res) => {
  const houseId = req.params.id;
  const { image, name, bathrooms, location, superficie, price } = req.body;

  const houseIndex = houses.findIndex(house => house.id == houseId);

  if (houseIndex === -1) {
    return res.status(404).json({ message: 'House not found' });
  }

  houses[houseIndex] = {
    id: houseId,
    image,
    name,
    bathrooms,
    location,
    superficie,
    price
  };

  fs.writeFile('houses.json', JSON.stringify(houses), (err) => {
    if (err) {
      console.error('Error writing houses data to file:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'House updated successfully' });
  });
});

app.delete('/houses/:id', authenticateToken, (req, res) => {
  const houseId = req.params.id;

  const houseIndex = houses.findIndex(house => house.id == houseId);

  if (houseIndex === -1) {
    return res.status(404).json({ message: 'House not found' });
  }

  houses.splice(houseIndex, 1);

  fs.writeFile('houses.json', JSON.stringify(houses), (err) => {
    if (err) {
      console.error('Error writing houses data to file:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'House deleted successfully' });
  });
});


app.get('/houses', (req, res) => {
  res.json(houses);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
