import { Socket, Server } from 'socket.io';
import { TicketList } from './ticketList';

class Sockets {

    private readonly ticketList: TicketList;

    constructor(
        private readonly io: Server,
    ) {

        this.ticketList = new TicketList();

        this.handleSocketEvents();
    }

    handleSocketEvents(): void {
        // On connection
        this.io.on('connection',
            (socket: Socket) => {
                console.log('Client connected');
            }
        );
    }

}

export {
    Sockets,
};
