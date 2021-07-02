import * as http from 'http';
import { resolve } from 'path';

import express, { Express, Request, Response } from 'express';
import * as socketio from 'socket.io';
import cors from 'cors';


import { Sockets } from './sockets';



class Server {

    private app: Express;
    private port: number;
    private server: http.Server;
    private io: socketio.Server;
    private sockets: Sockets;

    constructor(

    ) {
        this.app = express();
        this.port = Number(process.env.PORT);
        // Http server
        this.server = http.createServer(this.app);
        // socket config
        this.io = new socketio.Server(this.server);
        // init sockets
        this.sockets = new Sockets(this.io);

    }

    execute(): void {
        // init middlewares
        this.initMiddlewares();
        // init controllers
        this.initControllers();
        // init server
        this.server.listen(
            this.port,
            () => {
                console.log('Server is running on port: ', this.port)
            },
        );
    }


    private initMiddlewares(): void {
        this.app.use(cors())
        // serve public directory
        this.app.use('/', express.static(resolve(__dirname + './../../public')))
    }

    // private configSockets(): void {
    //     this.sockets = new Sockets(this.io);
    // }

    private initControllers() {
        this.app.get('/last-tickets', (req: Request, res: Response) => {
            return res.json(
                {
                    ok: true,
                    tickets: this.sockets.ticketList.last13,
                }
            );
        });
    }


}


export {
    Server,
}