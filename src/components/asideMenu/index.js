import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import Router from "src/router";
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;
class AsideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            openKeys: []
        }
    }

    renderSubMenu = ({ key, title, child }) => {
        return (
            <SubMenu key={key} icon={<UserOutlined />} title={title}>
                {
                    child && child.map(item => {
                        return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                    })
                }
            </SubMenu>
        )
    }
    renderMenu = (data) => {
        return <Menu.Item key={data.key}>
            <Link to={data.key}>{data.title}</Link>
        </Menu.Item>
    }
    selectMenu = ({ item, key, keyPath, domEvent }) => {
        const menu = {
            selectedKeys: [key],
            openKeys: [keyPath[keyPath.length - 1]]
        }
        this.selectMHeu(menu);
    }
    selectMHeu = (menu) => {
        this.setState({
            selectedKeys: menu.selectedKeys,
            openKeys: menu.openKeys
        })
    }
    openChange=(openKeys)=>{
        this.setState({
            openKeys:openKeys
        })
    }
    render() {
        const { selectedKeys, openKeys } = this.state;
        return (
            <Fragment>
                <Menu
                    onOpenChange={this.openChange}
                    onClick={this.selectMenu}
                    mode="inline"
                    theme="dark"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    defaultSelectedKeys={["/index"]}
                    style={{ height: '100%' }}
                >
                    {
                        Router && Router.map(item => {
                            return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item);
                        })
                    }
                </Menu>
            </Fragment>
        );
    }
    componentDidMount() {
        const pathname = this.props.location.pathname;
        const openKeys = pathname.split("/").slice(0, 3).join("/");

        const menu = {
            selectedKeys: [pathname],
            openKeys: [openKeys]
        }
        this.selectMHeu(menu);
    }
}

export default withRouter(AsideMenu);