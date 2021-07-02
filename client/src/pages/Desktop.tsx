import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router';
import { SocketContext } from '../context/SocketContext';
import { getUserStorage } from '../helpers/getUserStorage';
import { ITicket } from '../interfaces/ticket.interface';


const { Title, Text } = Typography;


export const Desktop: React.FC = () => {

    const [{ agent, desktop }, setUser] = useState<{ agent: string; desktop: string }>(getUserStorage());

    const { socket } = useContext(SocketContext);

    const [ticket, setTicket] = useState<ITicket | null>(null);


    const exit = () => {
        localStorage.removeItem('desktop');
        localStorage.removeItem('agent');
        setUser({ agent: '', desktop: '' });
    };
    const nextTicket = () => {
        socket.emit(
            'next-ticket',
            { agent, desktop }, (ticket: ITicket | null) => {
                setTicket(ticket)
            }
        );
    };

    if (!agent && !desktop) {
        return <Redirect to="/enter" />
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Andrés</Title>
                    <Text>You are working on the desktop: </Text>
                    <Text type="success"> 5 </Text>
                </Col>

                <Col span={4}>
                    <Button
                        shape="round"
                        type="ghost"
                        onClick={exit}
                    >
                        <CloseCircleOutlined />
                        Exit
                    </Button>
                </Col>
            </Row>

            <Divider />

            {
                ticket && <>
                    <Row>
                        <Col>
                            <Text >
                                Here is attending the ticked number:
                            </Text>
                            <Text style={{ fontSize: 30 }} type="danger">
                                {ticket?.ticketNumber}
                            </Text>
                        </Col>
                    </Row>
                </>
            }
            <Row>
                <Col offset={20} span={24} >
                    <Button
                        onClick={nextTicket}
                        shape="round"
                        type="primary"
                    >
                        <RightOutlined />
                        Next
                    </Button>
                </Col>
            </Row>


        </>

    )
}
