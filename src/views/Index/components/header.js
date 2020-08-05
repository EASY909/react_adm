import React, { Component, Fragment } from 'react';
import "./asice.scss";
class AsideHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                  <h1 className="logo"><span>Logo</span></h1>  
            </Fragment>
        );
    }
}

export default AsideHeader;