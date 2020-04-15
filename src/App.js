import React from 'react';
import { NavBar } from 'antd-mobile'
import Carousel from './components/App/Carousel'
import Grid from './components/App/Grid'
import Tabbar from './components/base/Tabbar'
import './assets/css/App.less';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="HO-header">
          <NavBar
            mode="light"
          ><img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt="img" style={{ width: "122px" }} /></NavBar>
        </header>

        <div className='HO-carousel'>
          <Carousel></Carousel>
        </div>
        <div className='HO-grid'>
          <Grid prop={this.props}></Grid>
        </div>
        <div className="app-zhan"></div>

        <div className='HO-tabbar'>
          <Tabbar select='首页' prop={this.props}></Tabbar>
        </div>


      </div>
    )
  }
}

export default App;
