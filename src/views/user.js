import React from 'react'
import { NavBar, Toast } from 'antd-mobile'
import Tabbar from '../components/base/Tabbar'

class Component extends React.Component {

    componentWillMount() {
        if (!sessionStorage.getItem("phone")) {
            Toast.fail("登录后查看", 2, () => {
                this.props.history.replace('/')
            })
        }
    }

    render() {
        return (
            <div id="HO-user">
                <header className='HO-header'>
                    <NavBar mode="dark" >个人中心</NavBar>
                </header>
                <div style={{ marginTop: '45px' }}></div>

                <div className="head">
                    <div className="zuo">
                        <img src="http://static.yufenghen.cn/vueserver/resource/img/touxiang.png" width='80' alt="img" />
                    </div>
                    <div className="you">
                        <span>{sessionStorage.getItem('phone')}</span>
                    </div>
                </div>
                <div className="content">
                    <div className="item">
                        <div className="item-left">
                            <i className="iconfont iconwodedangxuan one"></i>
                        </div>
                        <div className="item-center">就诊人管理</div>
                        <div className="item-right">
                            <i className="iconfont iconiconfontyoujiantou-copy-copy-copy-copy-copy-copy"></i>
                        </div>
                    </div>
                    <div className="item" onClick={() => { this.pushEvent('/guahaolist') }}>
                        <div className="item-left">
                            <i className="iconfont icondingdan"></i>
                        </div>
                        <div className="item-center">就诊记录查询</div>
                        <div className="item-right">
                            <i className="iconfont iconiconfontyoujiantou-copy-copy-copy-copy-copy-copy"></i>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <i className="iconfont icondunpai"></i>
                        </div>
                        <div className="item-center">账号管理</div>
                        <div className="item-right">
                            <i className="iconfont iconiconfontyoujiantou-copy-copy-copy-copy-copy-copy"></i>
                        </div>
                    </div>
                    <div className="item" onClick={() => { this.pushEvent('/logout') }}>
                        <div className="item-left">
                            <i className="iconfont iconcogs3"></i>
                        </div>
                        <div className="item-center">帮助与设置</div>
                        <div className="item-right">
                            <i className="iconfont iconiconfontyoujiantou-copy-copy-copy-copy-copy-copy"></i>
                        </div>
                    </div>



                </div>


                <div className='HO-tabbar'>
                    <Tabbar select='个人中心' prop={this.props}></Tabbar>
                </div>
            </div>
        )
    }


    pushEvent = (path) => {
        // console.log(path)
        this.props.history.push(path)
    }
}

export default Component