import React, { useState } from 'react'

import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';


const { Title, Text } = Typography;


export const Enter: React.FC = () => {

    const history = useHistory();

    const [{ agent, desktop }] = useState<{ agent: string; desktop: string }>(getUserStorage());

    useHideMenu(false);


    const onFinish = ({ agent, desktop }: { agent: string; desktop: string }) => {
        localStorage.setItem('agent', agent);
        localStorage.setItem('desktop', desktop);
        history.push('desktop');
    };
    const onFinishFailed = () => {

    };

    if (agent && desktop){
        return <Redirect to="/desktop"/>
    }

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
                    name="agent"
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
