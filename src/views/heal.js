import React from 'react'
import { getHealth } from '../api/getData'
import load from '../assets/img/loading3.gif'

import { NavBar, Icon, ListView } from 'antd-mobile';


const NUM_ROWS = 7;
let pageIndex = 1;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}
class Component extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
            data: []
        };
    }


    componentWillMount() {
        getHealth(pageIndex, NUM_ROWS).then(data => {

            this.setState({
                data: data.data
            })

        })
    }

    componentDidMount() {

        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }
    onEndReached = (event) => {

        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });



        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });





        }, 1000);





    }

    render() {
        // console.log(this.state.data, '111')
        if (this.state.data.length <= 0) {
            return (
                <div className='load'>
                    <img src={load} alt="" />
                </div>
            )
        }
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = 0;
        const row = (rowData, sectionID, rowID) => {
            /* if (index >= this.state.data.length - 1) {
                index = this.state.data.length - 1;
            } */
            const obj = this.state.data[index++];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div style={{ display: 'flex', padding: '15px 0' }}>
                        <img style={{ width: '100px', marginRight: '15px' }} src={obj.image} alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.title}</div>
                            <div className='heal-time'>
                                <span style={{ fontSize: '12px', color: '#FF6E27' }}>{obj.publishtime}</span>
                                <span style={{ fontSize: '12px', color: '#777' }}>摘自:{obj.auth}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div id="HO-heal">
                <header className='HO-header'>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}

                    >健康百科</NavBar>
                </header>
                <div style={{ marginTop: '53px' }}></div>

                <div>
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}

                        renderFooter={() => (<div style={{ padding: 5, textAlign: 'center' }}>
                            {this.state.isLoading ? <img src={load} alt="" /> : 'Loaded'}
                        </div>)}
                        renderRow={row}
                        renderSeparator={separator}
                        className="am-list"
                        pageSize={4}
                        useBodyScroll

                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                </div>


            </div>
        )
    }

}
export default Component