import React from 'react'
import { NavBar, Icon, Button, Toast, Modal } from 'antd-mobile';

const alert = Modal.alert;

class Component extends React.Component {

    logoutEvent = () => {
        alert('注销', '确定要注销吗???', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确定', onPress: () => {
                    Toast.success('注销成功', 2, () => {
                        this.props.history.replace('/')
                        sessionStorage.clear()
                    })
                }
            },
        ])


    }
    render() {
        return (
            <div id="HO-logout">

                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >注销</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>
                <div className="logout" style={{ padding: '10px' }}>
                    <Button type="warning" onClick={this.logoutEvent}>注销</Button>
                </div>


            </div>
        )
    }
}

export default Component