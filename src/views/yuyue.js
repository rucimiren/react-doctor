import React from 'react'
import { NavBar, Icon, InputItem, Button, Toast, List, DatePicker } from 'antd-mobile';
import { saveGuaHaoInfo } from '../api/getData'

const Item = List.Item;
class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: "",
            keshi: '选择科室',
            doctorName: '选择医生',
            fee: '',
            doctorId: '',
            name: '',
            cardID: '',
            mobile: '',
            des: '',
            gender: "",
            guaHaoMobile: sessionStorage.getItem("phone") ? sessionStorage.getItem("phone") : ""
        }
    }

    componentWillMount() {
        // console.log(this.props)

        if (sessionStorage.getItem("keshi")) {
            this.setState({
                keshi: sessionStorage.getItem("keshi")
            })
        }
        if (sessionStorage.getItem("doctorName")) {
            this.setState({
                doctorName: sessionStorage.getItem("doctorName")
            })
        }
        if (sessionStorage.getItem("fee")) {
            this.setState({
                fee: sessionStorage.getItem("fee")
            })
        }
        if (sessionStorage.getItem("doctorId")) {
            this.setState({
                doctorId: sessionStorage.getItem("doctorId")
            })
        }



    }
    isGua = () => {
        if (this.state.keshi === "选择科室") {
            Toast.fail("请选择科室", 2)
            return false
        } else if (this.state.doctorName === '选择医生') {
            Toast.fail("请选择医生", 2)
            return false
        } else if (this.state.time === '') {
            Toast.fail("请选择挂号时间", 2)
            return false
        } else if (this.state.name === '') {
            Toast.fail("请输入姓名", 2)
            return false
        } else if (this.state.gender === '') {
            Toast.fail("请选择性别", 2)
            return false
        } else if (this.state.cardID === '') {
            Toast.fail("请输入身份证号", 2)
            return false
        } else if (this.state.mobile === '') {
            Toast.fail("请输入手机号", 2)
            return false
        } else if (this.state.des === '') {
            Toast.fail("请简单描述病情", 2)
            return false
        } else {
            return true
        }

    }


    render() {
        return (
            <div id="HO-yuyue">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => {
                            this.props.history.push('/')
                            sessionStorage.removeItem("keshi")
                            sessionStorage.removeItem("doctorName")
                            sessionStorage.removeItem("fee")
                            sessionStorage.removeItem("doctorId")
                        }}
                    >预约挂号</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <List className="my-list">
                    <Item
                        onClick={() => this.props.history.push('/keshi')}
                        extra={'(必选)'}
                        arrow="horizontal"
                        thumb={<i className='iconfont iconlouyu'></i>}
                    >{this.state.keshi}</Item>
                    <Item
                        onClick={() => { this.props.history.push('/doctor') }}
                        extra={'(必选)'}
                        arrow="horizontal"
                        thumb={<i className='iconfont icondoctor'></i>}
                    >{this.state.doctorName}</Item>


                    <DatePicker
                        mode="date"
                        title="选择日期"
                        value={this.state.time}
                        onChange={date => this.setState({ time: date })}
                    >
                        <List.Item
                            arrow="horizontal"
                            thumb={<i className='iconfont iconshijian'></i>}
                        >选择挂号时间:</List.Item>
                    </DatePicker>

                    <Item
                        extra={this.state.fee + ' 元'}
                        thumb={<i className='iconfont iconqian'></i>}
                    >挂号费</Item>


                </List>

                <div className="from">
                    <InputItem
                        clear='true'
                        type="text"
                        placeholder="请输入患者姓名(必填)"
                        value={this.state.name}
                        onChange={(name) => { this.setState({ name }) }}
                    ><i className="iconfont icongerenzhongxinxuanzhong"></i>
                        <span>姓名:</span>
                    </InputItem>

                    <div className="sex">
                        <div className="gender">
                            <i className="iconfont iconxingbie3"></i>
                            <span>性别:</span>
                            <label htmlFor="nan">男</label>
                            <input id='nan' type="radio" name='性别' value="男" onChange={(e) => {
                                this.setState({ gender: e.target.value })
                            }} />
                            <label htmlFor="nv">女</label>
                            <input id='nv' type="radio" name='性别' value='女' onChange={(e) => {
                                this.setState({ gender: e.target.value })
                            }} />
                        </div>
                    </div>
                    <InputItem
                        clear='true'
                        type="text"
                        placeholder="请输入身份证号(必填)"
                        value={this.state.cardID}
                        onChange={(cardID) => { this.setState({ cardID }) }}
                    ><i className="iconfont iconcredentials_icon teshu" ></i>
                        <span>身份证:</span>
                    </InputItem>
                    <InputItem
                        clear='true'
                        type="text"
                        placeholder="请输入手机号(必填)"
                        value={this.state.mobile}
                        onChange={(mobile) => { this.setState({ mobile }) }}
                    ><i className="iconfont iconshouji"></i>
                        <span>手机号:</span>
                    </InputItem>
                    <InputItem
                        clear='true'
                        type="text"
                        placeholder="请简单描述病情(必填)"
                        value={this.state.des}
                        onChange={(des) => { this.setState({ des }) }}
                    ><i className="iconfont icondingdan"></i>
                        <span>描述:</span>
                    </InputItem>



                </div>

                <div className="tishi">
                    <div className="tishi-child">
                        <span>温馨提示:</span> 如果就诊当日未到医院就诊,挂号费用不予退回!!!
                    </div>
                </div>



                <div className="ceshi" style={{ marginTop: '50px' }}>
                    <Button type='primary' onClick={() => {

                        if (this.isGua()) {
                            let time = new Date(this.state.time).toLocaleDateString()
                            let obj = Object.assign({}, this.state)
                            obj.time = time
                            let newObj = JSON.stringify(obj)
                            saveGuaHaoInfo(newObj).then(data => {
                                // console.log(data.data)
                                if (data.data.code === 200) {
                                    Toast.success(data.data.msg, 2, () => {
                                        this.props.history.push('/guahaolist')
                                        sessionStorage.removeItem("keshi")
                                        sessionStorage.removeItem("doctorName")
                                        sessionStorage.removeItem("fee")
                                        sessionStorage.removeItem("doctorId")
                                    })
                                }
                            })


                        }
                    }}>挂号</Button>
                </div>



            </div>
        )
    }
}

export default Component