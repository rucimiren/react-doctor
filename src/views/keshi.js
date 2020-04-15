import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { getKeshi } from '../api/getData'

class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            order: {},


        }
    }


    componentWillMount() {
        getKeshi().then(data => {

            this.setState({
                order: data.data,

            })
            // console.log(this.state.order)

        })
    }

    render() {
        return (
            <div id="HO-keshi">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}
                    >选择科室</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>

                {
                    Object.keys(this.state.order).map((item1, index1) => {

                        var ele = this.state.order[item1].map((item2, index2) => {
                            return (
                                <p key={index2} onClick={() => {
                                    this.props.history.replace('/yuyue')
                                    sessionStorage.setItem("keshi", item2)
                                }}>{item2}</p>
                            )
                        })
                        return (
                            <div className="content" key={index1}>
                                <h2>{item1}</h2>
                                {ele}

                            </div>
                        )
                    })
                }






            </div>
        )
    }
}

export default Component