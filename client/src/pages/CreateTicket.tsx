import React from 'react'

import { Row, Col, Typography, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CreateTicket: React.FC = () => {

    useHideMenu(true);

    const getTicket = () => { };

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

            <Row justify="center" style={{ marginTop: 100 }}>
                <Col>
                    <Text>
                        Your number
                    </Text>
                    <br />
                    <Text type="success" style={{ fontSize: 55 }}>
                        55
                    </Text>
                </Col>
            </Row>
        </>
    )
}
