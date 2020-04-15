import React from 'react'
import { Grid, Toast } from 'antd-mobile';



class Component extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    icon: 'iconfont icondianhua1',
                    text: '预约挂号',
                    isLogin: true,
                    path: '/yuyue'
                },
                {
                    icon: "iconfont iconsousuo",
                    text: '报告查询',
                    isLogin: true,
                    path: '/baogao'
                }
            ],
            data1: [
                {
                    icon: 'iconfont iconlouyu',
                    text: '费用查询',
                    isLogin: true,
                    path: '/fee'
                },
                {
                    icon: 'iconfont iconcai',
                    text: '就诊攻略',
                    isLogin: false,
                    path: '/gonglue'
                },
                {
                    icon: 'iconfont iconxin',
                    text: '健康百科',
                    isLogin: false,
                    path: '/heal'
                },
                {
                    icon: 'iconfont iconlocation',
                    text: '医院导航',
                    isLogin: false,
                    path: '/loca'
                },
                {
                    icon: 'iconfont icondunpai1',
                    text: '医院介绍',
                    isLogin: false,
                    path: '/desc'
                },
                {
                    icon: 'iconfont iconwenhao',
                    text: '满意度调查',
                    isLogin: true,
                    path: '/manyi'
                }


            ]
        }
    }



    render() {
        return (
            <div>

                <Grid data={this.state.data}
                    itemStyle={{ height: '100px' }}
                    columnNum={2}
                    hasLine={false}
                    onClick={(a, b) => {
                        if (a.isLogin) {
                            if (sessionStorage.getItem("phone")) {
                                this.props.prop.history.push(a.path)
                            } else {

                                Toast.fail('还未登录', 2, () => {
                                    sessionStorage.setItem("path", a.path)
                                    this.props.prop.history.push('/login')
                                });
                            }

                        } else {
                            this.props.prop.history.push(a.path)
                        }
                    }}
                    renderItem={dataItem => (
                        <div style={{ padding: '20px' }}>

                            <i className={dataItem.icon} style={{ color: 'rgb(28, 152, 252)', fontSize: '30px' }}></i>

                            < div style={{ color: '#000', fontSize: '12px', marginTop: '5px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />

                <Grid data={this.state.data1}
                    itemStyle={{ height: '100px' }}
                    columnNum={3}
                    onClick={(a, b) => {
                        if (a.isLogin) {
                            if (sessionStorage.getItem("phone")) {
                                this.props.prop.history.push(a.path)
                            } else {

                                Toast.fail('还未登录', 2, () => {
                                    sessionStorage.setItem("path", a.path)
                                    this.props.prop.history.push('/login')
                                });
                            }

                        } else {
                            this.props.prop.history.push(a.path)
                        }
                    }}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div style={{ padding: '20px' }}>

                            <i className={dataItem.icon} style={{ color: '#FF685D', fontSize: '30px' }}></i>

                            < div style={{ color: '#000', fontSize: '12px', marginTop: '5px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />

            </div>
        )
    }
}
// itemStyle={{ height: '100px' }}

export default Component