import React from 'react'
import { NavBar, Icon, InputItem, Button, Toast } from 'antd-mobile';
import { getReport } from '../api/getData'

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: '',
            boo: false
        }

    }
    nameEvent = (name) => {

        this.setState({
            name
        })

    }
    idEvent = (id) => {
        this.setState({
            id
        })
    }
    isName = () => {
        if (this.state.name !== "") {
            return true
        } else {
            Toast.fail('请输入就诊人姓名', 2);
            return false
        }
    }
    isId = () => {
        if (this.state.id !== '') {
            return true
        } else {
            Toast.fail('请输入就诊人ID', 2);
            return false
        }
    }
    chaEvent = () => {
        if (this.isName() && this.isId()) {
            getReport(this.state.name, this.state.id).then(data => {
                // console.log(data.data)
                if (data.data.code === 4444) {
                    Toast.fail(data.data.msg, 2)
                } else {
                    Toast.success("查询成功", 2, () => {
                        this.props.history.push({
                            pathname: '/baogaolist',
                            state: {
                                data: data.data
                            }
                        })
                    })
                }
            })
        }
    }

    render() {
        return (
            <div id="HO-baogao">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >报告查询</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <div className="form">
                    <InputItem
                        clear='true'
                        type="text"
                        placeholder="请输入就诊人姓名"
                        value={this.state.name}
                        onChange={this.nameEvent}
                    >就诊人姓名:</InputItem>
                    <InputItem
                        clear='true'
                        type="number"
                        placeholder="请输入就诊人ID"
                        value={this.state.id}
                        onChange={this.idEvent}
                    >就诊人ID:</InputItem>
                    <div className="denglu">
                        <Button type="primary" onClick={this.chaEvent}>查询</Button>
                    </div>
                </div>



            </div>
        )
    }
}

export default Component