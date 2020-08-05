import React, { Component } from 'react';
import { Layout } from 'antd';
import "./layout.scss";
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
// } from '@ant-design/icons';
import Aside from "./components/aside";
import AsideHeader from "./components/header"
const { Header, Sider, Content } = Layout;
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="layout-wrap">
                <Header className="layout-header">
                    <AsideHeader/>
                </Header>

                <Layout>
                    <Sider width="250px">
                        <Aside />
                    </Sider>
                    <Content className="layout-main">内容</Content>
                </Layout>
            </Layout>
        );
    }
}

export default Index;