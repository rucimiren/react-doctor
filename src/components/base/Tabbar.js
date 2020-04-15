import React from 'react'
import { TabBar, Toast } from 'antd-mobile';

class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: props.select,
        }

    }

    render() {
        return (
            <div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="首页"
                        icon={<div className='iconfont iconlouyu' style={{ fontSize: '22px' }} />}
                        selectedIcon={<div className='iconfont iconlouyu' style={{ fontSize: '22px' }} />}
                        selected={this.state.selectedTab === '首页'}
                        onPress={() => {
                            this.props.prop.history.push('/')

                        }}

                    ></TabBar.Item>

                    <TabBar.Item
                        title="动态"
                        key="动态"
                        icon={<div className='iconfont icondingdan' style={{ fontSize: '22px' }} />}
                        selectedIcon={<div className='iconfont icondingdan' style={{ fontSize: '22px' }} />}
                        selected={this.state.selectedTab === '动态'}
                        onPress={() => {
                            this.props.prop.history.push('/dongtai')

                        }}

                    ></TabBar.Item>

                    <TabBar.Item
                        title="个人中心"
                        key="个人中心"
                        icon={<div className='iconfont iconwodedangxuan' style={{ fontSize: '22px' }} />}
                        selectedIcon={<div className='iconfont iconwodedangxuan' style={{ fontSize: '22px' }} />}
                        selected={this.state.selectedTab === '个人中心'}
                        onPress={() => {
                            if (sessionStorage.getItem("phone")) {
                                this.props.prop.history.replace('/user')
                            } else {
                                Toast.fail("登录后查看", 2, () => {
                                    sessionStorage.setItem("path", "/user")
                                    this.props.prop.history.push('/login')
                                })

                            }

                        }}

                    ></TabBar.Item>



                </TabBar>
            </div>
        )
    }
}

export default Component