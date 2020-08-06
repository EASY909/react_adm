import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Router from "src/router";
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const { SubMenu } = Menu;
class AsideMenu extends Component {


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
    render() {
        return (
            <Fragment>
                <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
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
}

export default AsideMenu;