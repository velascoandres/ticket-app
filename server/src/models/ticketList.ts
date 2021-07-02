import { Ticket } from './ticket';

class TicketList {

    constructor(
        public lastNumber = 0,
        public pendings: Ticket[] = [],
        public assigned: Ticket[] = [],
    ) {

    }

    get nextNumber(): number {
        this.lastNumber++;
        return this.lastNumber;
    }

    // 3 tickets on the cards and 10 from the history
    get last13(): Ticket[] {
        return this.assigned.slice(0, 13);
    }

    createTicket(): Ticket {
        const newTicket = new Ticket(
            this.nextNumber,
        );
        this.pendings.push(newTicket);
        return newTicket;
    }

    assignTicket(agent: string, desktop: string): Ticket | null {

        if (this.pendings.length === 0) {
            return null;
        }
        const nextTicket = this.pendings.shift() as Ticket;
        nextTicket.agent = agent;
        nextTicket.desktop = desktop;
        this.assigned.unshift(nextTicket);
        return nextTicket;
    }


}

export {
    TicketList,
}