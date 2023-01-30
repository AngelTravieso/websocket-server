const cors = require('cors');
const express = require('express');


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
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio public
        this.app.use(express.static('public'));

    }

    routes() {
        // Middleware condicional
        // this.app.use(this.paths.auth, require('../routes/auth'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running at port: ${this.port}`);
        });
    }

}

module.exports = Server;