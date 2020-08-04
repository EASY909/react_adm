import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

import { validate_password } from "../../utils/validate";
import { Login } from "src/api/account.js";
import Code from "component/code";  
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            code: "",
            module: "login",
            loading: false
        };
    }
    onFinish = (values) => {
        Login(values).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
        // console.log('Received values of form: ', values);
        // console.log(11111);
    }
    /** input输入处理 */
    inputChangeUsername = (e) => {
        let value = e.target.value;
        this.setState({
            username: value
        })
    }
    inputChangePassword = (e) => {
        let value = e.target.value;
        this.setState({
            password: value
        })
    }
    inputChangeCode = (e) => {
        let value = e.target.value;
        this.setState({
            code: value
        })
    }
    toggleForm = () => {
        // 调父级的方法
        this.props.switchForm("register");
    }
    render() {
        const { username, module, loading } = this.state;
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={this.toggleForm}>帐号注册</span>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item name="username" rules={
                        [
                            { required: true, message: "邮箱不能为空" },
                            { type: "email", message: "邮箱格式不正确" }
                        ]
                    }>
                        <Input value={username} onChange={this.inputChangeUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>
                    <Form.Item name="password" rules={
                        [
                            { required: true, message: '密码不能为空' },
                            { pattern: validate_password, message: "请输入大于6位小于20位数字+字母" },
                        ]
                    }>
                        <Input type="password" onChange={this.inputChangePassword} prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="code" rules={
                        [
                            { required: true, message: '验证码不能为空' },
                            { len: 6, message: '请输入长度为6位的验证码' }
                        ]
                    } >
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input onChange={this.inputChangeCode} prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="Code" />
                            </Col>
                            <Col span={9}>
                                <Code username={username} module={module} />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" loading={loading} htmlType="submit" className="login-form-button" block> 登录 </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}


export default LoginForm;