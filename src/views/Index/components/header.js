import React, { Component } from 'react';
import { UnorderedListOutlined } from "@ant-design/icons";
import "./asice.scss";
class AsideHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: props.collapsed
        };
    }
    toggleMenu = () => {
        this.props.toggle();
    }
    render() {
        const { collapsed } = this.state;
        return (
            <div className={collapsed ? "collapsed-close" : ""}>
                <h1 className="logo"><span>Logo</span></h1>
                <div className="header-wrap">
                    <span className="collapsed-icon" onClick={this.toggleMenu}><UnorderedListOutlined /></span>
                </div>
            </div>
        );
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { collapsed } = nextProps;
        // 当传入的type发生变化的时候，更新state
        if (collapsed !== prevState.collapsed) {
            return {
                collapsed
            }
        }
        // 否则，对于state不进行任何操作
        return null;
    }
}

export default AsideHeader;