import { Socket, Server } from 'socket.io';
import { Ticket } from './ticket';
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

                socket.on(
                    'request-ticket', (_, cb: (ticket: Ticket) => void) => {
                        const newTicket = this.ticketList.createTicket();
                        cb(newTicket);
                    },
                );

            }
        );
    }

}

export {
    Sockets,
};
