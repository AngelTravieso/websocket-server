// Variables HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


// Iniciar socket (cliente)
const socket = io();

// On para escuchar eventos
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