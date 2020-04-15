import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { getDoctorList } from '../api/getData'

class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }


    componentWillMount() {
        getDoctorList(1, 50).then(data => {

            this.setState({
                list: data.data
            })
            // console.log(this.state.list)
        })
    }

    render() {
        return (
            <div id="HO-doctor">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}
                    >选择医生</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>

                <div className="list">
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div className="content" key={index}
                                    onClick={() => {
                                        this.props.history.replace('/yuyue')
                                        sessionStorage.setItem("fee", item.price)
                                        sessionStorage.setItem("doctorId", item.id)
                                        sessionStorage.setItem("doctorName", item.name)
                                    }}
                                >
                                    <div className="zuo">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div className="you">
                                        <h5>{item.des}</h5>
                                        <div className="you-item">
                                            <span>{item.name}</span>
                                            <span>{item.keshi}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        )
    }
}

export default Component