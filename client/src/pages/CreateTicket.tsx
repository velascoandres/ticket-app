import React, { useContext, useState } from 'react'

import { Row, Col, Typography, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { ITicket } from '../interfaces/ticket.interface';

const { Title, Text } = Typography;

export const CreateTicket: React.FC = () => {

    const { socket } = useContext(SocketContext);

    const [ticket, setTicket] = useState<ITicket | null >(null);

    useHideMenu(true);

    const getTicket = () => {

        socket.emit('request-ticket', null, (ticket: ITicket) => {
            setTicket(ticket);
        });

    };



    return (
        <>
            <Row justify="center">
                <Col>
                    <Title level={3}>
                        Press the button to get a new ticket
                    </Title>
                </Col>
            </Row>

            <Row justify="center">
                <Col>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined />}
                        size="large"
                        onClick={getTicket}
                    >
                        New Ticket
                    </Button>
                </Col>
            </Row>
            {
                ticket
                &&
                (<Row justify="center" style={{ marginTop: 100 }}>
                    <Col>
                        <Text>
                            Your number
                        </Text>
                        <br />
                        <Text type="success" style={{ fontSize: 55 }}>
                            {ticket.ticketNumber}
                        </Text>
                    </Col>
                </Row>)
            }

        </>
    )
}
