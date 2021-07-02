import { ITicket } from './../interfaces/ticket.interface';
export const getLastTickets = async () => {
    const resp = await fetch('http://localhost:8100/last-tickets');
    const { tickets }: { ok: boolean; tickets: ITicket[] } = await resp.json();
    return tickets;
}