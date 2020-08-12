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
        this.state = {
            collapsed: false
        };
    }

    toggle = () => {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        });
        sessionStorage.setItem("collapsed",collapsed);
    };

    render() {
        return (
            <Layout className="layout-wrap">
                <Header className="layout-header">
                    <AsideHeader toggle={this.toggle} collapsed={this.state.collapsed} />
                </Header>

                <Layout>
                    <Sider width="250px" collapsed={this.state.collapsed}>
                        <Aside />
                    </Sider>
                    <Content className="layout-main">
                        <Container />
                    </Content>
                </Layout>
            </Layout>
        );
    }
    componentDidMount() {
        const collapsed = JSON.parse(sessionStorage.getItem("collapsed"));
        this.setState({
            collapsed
        });
    }
}

export default Index;