import React from 'react'
import { NavBar, Icon, InputItem, Button, Toast, Checkbox } from 'antd-mobile';
import { getNoteCode, isMobile } from '../api/getData'

const AgreeItem = Checkbox.AgreeItem;

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            yzm: '',
            qryzm: '',
            tongyi: false,
            yzmBoo: false

        }

    }
    phoneEvent = (phone) => {

        this.setState({
            phone
        })

    }
    yzmEvent = (yzm) => {
        this.setState({
            yzm
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
    isYzm = () => {
        if (this.state.yzm === this.state.qryzm) {
            return true
        } else {
            Toast.fail('验证码错误', 2);
            return false
        }
    }
    isTongyi = () => {
        if (this.state.tongyi) {
            return true
        } else {
            Toast.fail('请同意用户协议', 2);
            return false
        }
    }
    zhuceEvent = () => {
        if (this.state.yzmBoo) {
            if (this.isPhone() && this.isYzm() && this.isTongyi()) {

                Toast.success("请设置密码", 2, () => {
                    this.props.history.replace('/setPwd')
                })
            }

        } else {
            Toast.fail('未获取验证码', 2);
        }
    }
    hqEvent = () => {
        if (this.isPhone()) {
            isMobile(this.state.phone).then(data => {
                // console.log(data.data)
                if (data.data.code === 4444) {
                    Toast.fail(data.data.msg, 2)
                } else {
                    getNoteCode(this.state.phone).then(res => {
                        // console.log(res.data)
                        this.setState({
                            qryzm: res.data.data,
                            yzmBoo: true
                        })
                        Toast.success("验证码是: " + this.state.qryzm, 3)
                        sessionStorage.setItem("zhucePhone", this.state.phone)

                    })
                }
            })
        }
    }

    render() {
        return (
            <div id="HO-zhuce">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}


                    >注册</NavBar>
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
                        placeholder="请输入验证码"
                        value={this.state.yzm}
                        onChange={this.yzmEvent}
                    >
                        <Button type="primary" size="small" onClick={this.hqEvent} className='zhuce-btn' inline>获取验证码</Button>
                    </InputItem>
                    <div className="tongyi">
                        <AgreeItem data-seed="logId" onChange={e => {

                            this.setState({
                                tongyi: e.target.checked
                            })
                        }}>
                            同意 <span onClick={(e) => { this.props.history.push('/must') }}> 《用户服务协议》</span>
                        </AgreeItem>
                    </div>
                    <div className="denglu">
                        <Button type="primary" onClick={this.zhuceEvent}>注册</Button>
                    </div>
                </div>



            </div>
        )
    }
}

export default Component