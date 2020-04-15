import React from 'react'
import { Carousel } from 'antd-mobile';

class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: ['http://static.yufenghen.cn/vueserver/resource/img/new3.jpg', 'http://static.yufenghen.cn/vueserver/resource/img/new1.jpg', 'http://static.yufenghen.cn/vueserver/resource/img/new2.jpg']
        }

    }


    render() {
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite>
                    {this.state.data.map((val, index) => (
                        <a
                            key={index}
                            href="http://www.baidu.com"
                            style={{ display: 'inline-block', width: '100%', height: '216px' }}
                        >
                            <img
                                src={val}
                                alt="img"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </a>
                    ))}
                </Carousel>


            </div>
        )
    }
}

export default Component