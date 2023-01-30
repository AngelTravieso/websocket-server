const cors = require('cors');
const express = require('express');
const { socketController } = require('../sockets/controller');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8081;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();

        // Sockets (eventos)
        this.socket();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio public
        this.app.use(express.static('public'));

    }

    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));
    }

    socket() {
        this.io.on("connection", socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running at port: ${this.port}`);
        });
    }

}

module.exports = Server;