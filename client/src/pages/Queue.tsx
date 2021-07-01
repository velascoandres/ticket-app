import React from 'react'

import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd'

import { QUEUE } from '../mocks/queue';
import { ITicket } from '../interfaces/ticket.interface';
import { useHideMenu } from '../hooks/useHideMenu';


const { Title, Text } = Typography;

export const Queue: React.FC = () => {
    
    useHideMenu(true);

    const renderItem = (ticket: ITicket) => {
        return (
            <List.Item>
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <Tag color="volcano">
                            {ticket.agent}
                        </Tag>,
                        <Tag color="magenta">
                            Desktop: {ticket.desktop}
                        </Tag>
                    ]}
                >
                    <Title>No. {ticket.ticketNumber}</Title>
                </Card>
            </List.Item>
        );
    }

    const renderItemMeta = ({ ticketNumber, desktop, agent }: ITicket) => {
        return (
            <List.Item>
                <List.Item.Meta
                    title={`Ticket No. ${ticketNumber}`}
                    description={
                        <>
                            <Text type="secondary">
                                At the desktop:
                            </Text>
                            <Tag color="magenta">
                                {desktop}
                            </Tag>
                            <Text type="secondary">
                                Agent:
                            </Text>
                            <Tag color="volcano">
                                {agent}
                            </Tag>
                        </>
                    }
                >
                </List.Item.Meta>
            </List.Item>
        );
    }


    return (
        <>
            <Title level={1}>
                Attending client:
            </Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={QUEUE.slice(0, 3)}
                        renderItem={renderItem}
                    />
                </Col>
                <Col span={12}>
                    <Divider>History</Divider>
                    <List
                        dataSource={QUEUE.slice(3)}
                        renderItem={renderItemMeta}
                    />
                </Col>
            </Row>
        </>
    )
}
