const express = require('express');

const app = express();
const env = process.env.NODE_ENV || 'development';
const port = 9000;
const ip = '127.0.0.1';

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use(express.json());

let database = [
    {id: 1, title: "Lalka", author: "Bolesław Prus"},
    {id: 2, title: "Pan Tadeusz", author: "Adam Mickiewicz"},
    {id: 3, title: "Nad Niemnem", author: "Eliza Orzeszkowa"}
];

app.get('/', (req, res) => res.send({msg: "Hello in Book App"}));

app.get('/books', (req, res) => {
    res.send(database)
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const result = database.find(book => book.id === id);
    if(result)
        res.send(result);
    else
        res.status(404).end()
});

app.post('/books', (req, res) => {
    const {author, title} = req.body;
    const newId = database[database.length - 1].id + 1;     // Zwykle to Baza zarządza ID
    const newBook = {author, title, id: newId };
    database.push(newBook);

    res.status(201).send(newBook)
});

app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {author, title} = req.body;

    const dbId = database.findIndex(book => book.id === id);        // Index lub -1
    if(dbId === -1) return res.status(404).end();                       // wazny return!

    database[dbId].author = author;
    database[dbId].title = title;

    res.send(database[dbId])
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // ...
    // W praktycznym przypadku tu nalezy sprawdzic czy ID istnieje
    // ...

    database = database.filter(book => book.id !== id);
    res.status(204).end();
});

app.use((req, res, next) => res.status(404).end());



app.listen(port, ip, () => {
    console.log(`Express server listening on http://${ip}:${port}, in ${env} mode`)
});