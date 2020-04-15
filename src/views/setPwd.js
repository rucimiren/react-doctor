import React from 'react'
import { NavBar, Icon, InputItem, Button, Toast } from 'antd-mobile';
import { reg } from '../api/getData'

class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pwd2: '',
            pwd1: ''
        }

    }
    pwdEvent1 = (pwd1) => {

        this.setState({
            pwd1
        })

    }
    pwdEvent2 = (pwd2) => {
        this.setState({
            pwd2
        })
    }

    isPwd1 = () => {
        if (/^\w{6,}$/.test(this.state.pwd1)) {
            return true
        } else {
            Toast.fail('密码格式不对', 2);
            return false
        }
    }
    isPwd2 = () => {
        if (this.state.pwd2 === this.state.pwd1) {
            return true
        } else {
            Toast.fail('两次密码不一致', 2);
            return false
        }
    }

    setEvent = () => {
        if (this.isPwd1() && this.isPwd2()) {
            reg(sessionStorage.getItem('zhucePhone'), this.state.pwd1).then(data => {
                // console.log(data.data)
                if (data.data.code === 200) {
                    Toast.success("注册成功", 2, () => {
                        this.props.history.replace('/login')
                    })
                }
            })
        }

    }
    render() {
        return (
            <div id="HO-setPwd">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}


                    >设置密码</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <div className="login" style={{ width: '100vw', height: '150px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt="img" width='150' />
                </div>
                <div className="form">
                    <InputItem
                        clear='true'
                        type="password"
                        placeholder="请输入密码"
                        value={this.state.pwd1}
                        onChange={this.pwdEvent1}
                    >密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
                    <InputItem
                        clear='true'
                        type="password"
                        placeholder="请再次输入密码"
                        value={this.state.pwd2}
                        onChange={this.pwdEvent2}
                    >确认密码:</InputItem>
                    <div className="denglu">
                        <Button type="primary" onClick={this.setEvent}>立即设置</Button>
                    </div>
                </div>



            </div>
        )
    }
}

export default Component