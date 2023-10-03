const express = require('express');
const router = express.Router();

const net = require('net');
const readline = require('readline-sync');

const servidor={
    port:3000,
    host: 'localhost'
}
const client = net.createConnection(servidor);
    client.on('connect',()=>{
        console.log('conexión satisfactoria')
     //   sendLine()
    })

router.get('/', async (req, res) =>{


   res.render('index.ejs');
});

router.post('/enviar', async (req, res) => {
    const datos = req.body;
    console.log("Mensaje de: ", datos.usuario,"  ", datos.mensaje);
   client.write(datos.usuario + " " + datos.mensaje)
    res.redirect('/');
});


module.exports = router;