import React from 'react'

import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


const { Title, Text } = Typography;


export const Enter: React.FC = () => {

    const history = useHistory();

    const onFinish = () => {
        history.push('desktop');
    };
    const onFinishFailed = () => {

    };

    return (
        <>
            <Title level={2}> Enter </Title>

            <Text>Enter your name and desktop number</Text>

            <Divider />

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Agent Name"
                    name="username"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Desktop"
                    name="desktop"
                    rules={[{ required: true, message: 'Please input desktop number!' }]}
                >
                    <InputNumber min={1} max={99} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        shape="round"
                    >
                        <SaveOutlined />
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}
