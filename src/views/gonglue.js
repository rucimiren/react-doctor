import React from 'react'
import { NavBar, Icon, Steps, Button } from 'antd-mobile';

const Step = Steps.Step;

const steps = [{ title: '步骤一' }, { title: '步骤二' }, { title: '步骤三' }, { title: '步骤四' }].map((s, i) => <Step key={i} title={s.title} />);


class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    render() {
        return (
            <div id="HO-gonglue">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >就诊攻略</NavBar>
                </header>
                <div style={{ marginTop: '50px' }}></div>
                <div className="buzhou" >

                    <Steps current={this.state.current} direction="horizontal" size="small">{steps}</Steps>
                    <div style={{ margin: "10px 30px", fontSize: '16px' }}>步骤一: 挂号</div>

                </div>

                <div className="next">
                    <Button type="primary" onClick={() => {
                        this.props.history.push('/gonglue/two')
                    }}>点击下一步</Button>
                </div>



            </div>
        )
    }
}

export default Component