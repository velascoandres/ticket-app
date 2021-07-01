import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

import { Button, Col, Divider, Row, Typography } from 'antd'
import React from 'react'


const { Title, Text } = Typography;


export const Desktop: React.FC = () => {

    const exit = () => { };
    const nextTicket = () => { };

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

            <Row>
                <Col>
                    <Text >
                        Here is attending the ticked number:
                    </Text>
                    <Text style={{ fontSize: 30 }} type="danger">
                        55
                    </Text>
                </Col>
            </Row>

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
