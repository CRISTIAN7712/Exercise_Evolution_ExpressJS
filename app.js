require('dotenv').config();
const express = require('express');
const bodyParser =require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000;
console.log(PORT)

app.get('/',(req,res)=>{
    res.send(`
        <h1>Curso Express.js V2.0</h1>
        <p>Esto es una aplicacion node.js con express</p>
        <p>Corre en el puerto: ${PORT}
        `)
});

app.get('/users/:id',(req,res)=>{
    const userId=req.params.id;
    res.send(`Mostrar informacion del usuario con ID: ${userId}`)
    //http://localhost:3005/users/123
})

app.get('/search/',(req,res)=>{
    const terms = req.query.termino || 'No especificado';
    const category = req.query.categoria || 'Todas';

    res.send(`
        <h2>Resultados de Busqueda</h2>
        <p>Termino: ${terms}</p>
        <p>Categoria: ${category}</p>
        `)

    //http://localhost:3005/search?termino=expressjs&categoria=nodejs
})

app.listen(PORT, ()=>{
    console.log(`Servidor: http://localhost:${PORT}`)
})