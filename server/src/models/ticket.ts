import { v4 as uuiv4 } from 'uuid';

class Ticket {

    public readonly id: string;
    public desktop: string | null;
    public agent: string | null;

    constructor(
        public readonly ticketNumber: number,
    ) {
        this.id = uuiv4();
        this.desktop = null;
        this.agent = null;
    }

}


export {
    Ticket,
};
