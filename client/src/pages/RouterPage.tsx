import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { CreateTicket } from './CreateTicket';
import { Queue } from './Queue';
import { Desktop } from './Desktop';
import { Enter } from './Enter';
import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;


export const RouterPage = () => {

    const { hidden } = useContext(UiContext);

    return (
        <Router >
            <Layout style={{ height: '100vh' }}>
                <Sider
                    collapsedWidth="0"
                    breakpoint="md"
                    hidden={hidden}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/enter">Enter</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/queue">Queue</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/create-ticket">Create Ticket</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">

                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/enter">
                                <Enter />
                            </Route>
                            <Route path="/queue">
                                <Queue />
                            </Route>
                            <Route path="/create-ticket">
                                <CreateTicket />
                            </Route>
                            <Route path="/desktop">
                                <Desktop />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>

        </Router>
    )
}
