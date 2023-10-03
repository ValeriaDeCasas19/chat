const net = require('net'); //crear objeto y require es la libreria node
const server = net.createServer(); //creacion de servidor

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('Mensaje recibido desde cliente:'+ data)
        socket.write('Mensaje Recibido\n')
    })
    socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })
    socket.on('error', (err)=>{
        console.log(err.message)
    })
})
server.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto:', server.address().port)
})

//que el servidor no muestre los mensajes en la terminal