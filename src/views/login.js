import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Icon, InputItem, Button, Toast } from 'antd-mobile';
import { getLogin } from '../api/getData'

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            pwd: ''
        }

    }

    render() {
        return (
            <div id="HO-login">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}
                        rightContent={<Link to='/zhuce' replace style={{ color: "#fff", fontWeight: 'bold', fontSize: '15px' }}>注册</Link>}

                    >登录</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <div className="login" style={{ width: '100vw', height: '150px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt="img" width='150' />
                </div>
                <div className="form">
                    <InputItem
                        clear='true'
                        type="digit"
                        placeholder="请输入手机号"
                        value={this.state.phone}
                        onChange={this.phoneEvent}
                    >手机号:</InputItem>
                    <InputItem
                        clear='true'
                        type="password"
                        placeholder="请输入密码"
                        value={this.state.pwd}
                        onChange={this.pwdEvent}
                    >密&nbsp;&nbsp;&nbsp;码:</InputItem>
                    <div className="denglu">
                        <Button type="primary" onClick={this.loginEvent}>登录</Button>
                    </div>
                </div>

            </div>
        )
    }

    phoneEvent = (phone) => {

        this.setState({
            phone
        })

    }
    pwdEvent = (pwd) => {
        this.setState({
            pwd
        })
    }
    isPhone = () => {
        if (/^1[3-9]\d{9}$/.test(this.state.phone)) {
            return true
        } else {
            Toast.fail('手机号格式不对', 2);
            return false
        }
    }
    isPwd = () => {
        if (/^\w{6,}$/.test(this.state.pwd)) {
            return true
        } else {
            Toast.fail('密码格式不对', 2);
            return false
        }
    }
    loginEvent = () => {
        if (this.isPhone() && this.isPwd()) {
            getLogin(this.state.phone, this.state.pwd).then(data => {
                // console.log(data.data)
                if (data.data.code === 200) {
                    Toast.success(data.data.msg, 2, () => {
                        sessionStorage.setItem("phone", this.state.phone)
                        this.setState({
                            phone: '',
                            pwd: ''
                        })
                        this.props.history.replace(sessionStorage.getItem('path'))
                    })
                } else {
                    Toast.fail(data.data.msg, 2);
                }

            }).catch(err => {
                Toast.fail('登录失败', 2);
            })
        }
    }

}

export default Component