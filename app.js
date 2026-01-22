const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send(`
        <h1>Curso Express.js V2.0</h1>
        <p>Esto es una aplicacion node.js con express</p>
        <p>Corre en el puerto: ${PORT}
        `)
});

app.listen(PORT, ()=>{
    console.log("Escuchando al server express")
})