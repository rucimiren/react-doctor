import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

class Component extends React.Component {
    render() {
        return (
            <div id="HO-manyi">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >满意度调查</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <h1>正在开发中......</h1>
            </div>
        )
    }
}

export default Component