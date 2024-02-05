const express = require('express')
const app = express()

app.use(express.json())
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
    const index = casa.findIndex((announcement, index) => index === parseInt(id));
    if (index !== -1) {
      casa.splice(index, 1);
      res.status(200).json({ message: `L'annuncio con ID ${id} è stato rimosso!!` });
    } else {
      res.status(404).json({ message: `Non ho trovato nessun annuncio con l'ID ${id}` });
    }
  });

  app.post('/annunci', (req, res) => {
    const { indirizzo, dim, desc, Nstanze, prezzo, Nbagni, Nfoto } = req.body;
    const newannuncio = { indirizzo, dim, desc, Nstanze, prezzo, Nbagni, Nfoto };
    annunciocasa.push(newannuncio);
    res.status(201).json({ message: 'House posted for sale successfully!' });
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