// Variables HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


// Iniciar socket (cliente)
const socket = io();

// on para escuchar eventos
socket.on('connect', () => { // connect cuando se conecta al socket
    console.log('Conectado');

    // Mostrar span 'Online'
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => { // disconnect cuando se conecta al socket
    console.log('Desconectado del servidor');

    // Mostrar span 'Offline'
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';

});

// Eventos JS
btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    // Usualmente se mandan objetos
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime(),
    }

    // emit para enviar mensaje al socket (al servidor)
    socket.emit('enviar-mensaje', payload);

});