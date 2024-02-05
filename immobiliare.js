const express = require('express')
const app = express()

const PORT=3000;
app.use(express.json())
// PARTE LOGIN


const UTENTI = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];
app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `);
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.send('Accesso Eseguito!');
  } else {
    res.send('Username/Password incorretti!!!!');
  }
});



// PARTE ANNUNCI





const annunciocasa=[
    {
    id:1,
    indirizzo:"via placeholder",
    prezzo:350000,
    dim:"800",
    Nstanze:8,
    Nbagni:3,
    Nfoto:4
    }
]

  app.get('/annunci',(req,res)=>{
    console.log("ricevuta richiesta di tipo get a / ")
    res.json(annunciocasa)
})

  app.delete('/annunci/:id', (req, res) => {
    const id = req.params.id;
    const index = annunciocasa.findIndex((annunciocasa, index) => index === parseInt(id));
    if (index !== -1) {
      casa.splice(index, 1);
      res.status(200).json({ message: `L'annuncio con ID ${id} è stato rimosso!!` });
    } else {
      res.status(404).json({ message: `Non ho trovato nessun annuncio con l'ID ${id}` });
    }
  });

  app.post('/annunci', (req, res) => {
    const { id,indirizzo, dim, desc, Nstanze, prezzo, Nbagni, Nfoto } = req.body;
    const newannuncio = { id,indirizzo, dim, desc, Nstanze, prezzo, Nbagni, Nfoto };
    annunciocasa.push(newannuncio);
    res.status(201).json({ message: 'Annuncio creato!' });
  });


  app.delete('/annunci/:id', (req, res) => {
    const id = req.params.id;
    const index = annunciocasa.findIndex((annunciocasa, index) => index === parseInt(id));
    if (index !== -1) {
      annunciocasa.splice(index, 1);
      res.status(200).json({ message: `Annuncio con ID ${id} è stato rimosso.` });
    } else {
      res.status(404).json({ message: `Annuncio con ID ${id} non trovato.` });
    }
  });
  app.listen(PORT, () => {
    console.log(`server in attesa sulla porta 3000`);
  });