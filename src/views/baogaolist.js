import React from 'react'
import { NavBar, Icon, Button } from 'antd-mobile';

class Component extends React.Component {
    /*   componentDidMount() {
          let data = this.props.location.state
          if (!data) {
              Toast.fail('报告异常,请从新查询', 2, () => {
                  this.props.history.replace('/baogao')
              })
              return false
          }
      } */

    render() {
        // console.log(this.props)
        let data, ele, dis

        if (!this.props.location.state) {

            this.props.history.replace('/baogao')
            data = { data: [] }

        } else {
            data = this.props.location.state
        }

        return (
            <div id="HO-baogaolist">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.replace('/baogao')}

                    >报告列表</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>

                {
                    data.data.map((item, index) => {
                        if (item.checkstate === "1") {
                            ele = <span>报告已出</span>
                            dis = false
                        } else {
                            ele = <span>化验中...</span>
                            dis = true
                        }
                        return (
                            <div className="content" key={index}>
                                <div className="flex">
                                    <span>病人姓名:</span>
                                    <span>{item.patientname}</span>
                                </div>
                                <div className="flex">
                                    <span>化验项目:</span>
                                    <span>{item.checkname}</span>
                                </div>
                                <div className="flex">
                                    <span>化验时间:</span>
                                    <span>{item.checktime}</span>
                                </div>
                                <div className="flex">
                                    <span>报告状态:</span>
                                    <span>{ele}</span>
                                </div>
                                <div className="btn">
                                    <Button type='primary' disabled={dis}>查看结果</Button>
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