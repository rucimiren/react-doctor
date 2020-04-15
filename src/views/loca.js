import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

class Component extends React.Component {


    componentDidMount() {
        // 百度地图API功能
        var map = new window.BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new window.BMap.Point(116.999, 40.024), 16);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new window.BMap.MapTypeControl({
            mapTypes: [
                window.BMAP_NORMAL_MAP,
                window.BMAP_HYBRID_MAP
            ]
        }));
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        var top_left_control = new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺
        var top_left_navigation = new window.BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        map.addControl(top_left_control);
        map.addControl(top_left_navigation);

        var marker = new window.BMap.Marker(new window.BMap.Point(116.999260, 40.024090));  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        // marker.setAnimation(window.BMAP_ANIMATION_BOUNCE); //跳动的动画


    }

    render() {
        return (
            <div id="HO-loca">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >医院导航</NavBar>
                </header>
                <div style={{ marginTop: '46px' }}></div>

                <div id="allmap"></div>

            </div>
        )
    }
}
export default Component