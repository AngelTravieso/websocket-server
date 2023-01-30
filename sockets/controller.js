const socketController = (socket) => {
    console.log('Cliente conectado', socket.id); // ID del socket

    // Emitir mensaje al cliente
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    // Recibir mensaje del cliente
    // nombre del mensaje, informacion, callback cuando termina la operacion
    socket.on('enviar-mensaje', (payload, callback) => {
        // Mensaje recibido del cliente
        // console.log(payload);

        // Emitir mensaje a los clientes conectados
        // se recomienda que sean objetos literales
        // socket.emit('enviar-mensaje', payload);
        
        // Emitir mensajes a todos los que esten conectados al socket (excepto el que lo envió)
        socket.broadcast.emit('enviar-mensaje', payload);

        const id = 123456789;
        callback({
            id,
            fecha: new Date().getTime()
        });

    });

}

module.exports = {
    socketController,
}