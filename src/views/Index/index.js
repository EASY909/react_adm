import React, { Component } from 'react';
import { Layout } from 'antd';
import "./layout.scss";
import Container from "component/container";
import Aside from "./components/aside";
import AsideHeader from "./components/header";
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
                    <Content className="layout-main">
                        <Container/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Index;