import React from 'react'
import { getGuaHaoOrder } from '../api/getData'
import { NavBar, Icon } from 'antd-mobile';
import load from '../assets/img/loading3.gif'

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ''
        }
    }

    async  componentWillMount() {
        let list = await getGuaHaoOrder(sessionStorage.getItem('phone'))
        if (typeof list.data === 'string') {
            this.setState({
                list: []
            })
        } else {
            this.setState({
                list: list.data
            })
        }

        // console.log(list.data)

    }

    render() {
        // console.log(typeof this.state.list === "string")
        if (typeof this.state.list === "string") {
            return (
                <div id="HO-guahaolist">
                    <header className='HO-header'>
                        <NavBar
                            mode="dark"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.props.history.push('/user')}

                        >挂号列表</NavBar>
                    </header>
                    <div style={{ marginTop: '46px' }}></div>
                    <div className="load">
                        <img src={load} alt="img" />
                    </div>

                </div>
            )
        }
        let ele = null;
        return (
            <div id="HO-guahaolist">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.push('/user')}

                    >挂号列表</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>

                {
                    this.state.list.map((item, index) => {
                        if (item.state === '1') {
                            ele = <span>预约成功</span>
                        } else {
                            ele = <span>预约失败</span>
                        }
                        return (
                            <div className="order" key={index}>
                                <div className="keshi flex">
                                    <span>{item.keshi} {item.doctorname}</span>
                                    <i className="iconfont iconiconfontyoujiantou-copy-copy-copy-copy-copy-copy"></i>
                                </div>
                                <div className="name flex">
                                    <span>就诊人姓名:</span>
                                    <span>{item.name}</span>
                                </div>
                                <div className="time flex">
                                    <span>就诊时间:</span>
                                    <span>{item.time}</span>
                                </div>
                                <div className="id flex">
                                    <span>就诊ID:</span>
                                    <span>{item.id}</span>
                                </div>
                                <div className="status flex">
                                    <span>就诊状态:</span>
                                    {ele}
                                </div>
                            </div>
                        )
                    })
                }






            </div>
        )
    }
}


export default Component