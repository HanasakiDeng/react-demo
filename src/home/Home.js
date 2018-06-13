import React, {Component} from 'react';
import './Home.css'
import '../index.css'
import List from "../components/List";
import {doRequest, server} from "../config";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            list: [],
            currentTab: 'ask'
        }
        this.switchTab = this.switchTab.bind(this);
    }

    componentDidMount() {
        this._initData();
        this.getListData();
    }

    _initData() {
        this.setState({
            loaded: false,
            list: [],
        })
    }

    /**
     * 切换tab，替换列表数据
     * @param tabType
     */
    switchTab(tabType) {
        this.setState({
            currentTab: tabType
        });
        this._initData();
        this.getListData();
    }

    /**
     * 获取列表数据
     */
    getListData() {
        let that = this;
        doRequest(server.TOPICS_url, {
            page: 1,
            limit: 10,
            tab: that.state.currentTab
        }).then((data) => {
            console.log(data);
            if (data) {
                that.setState({
                    list: data,
                    loaded: true
                })
            }
        })
    }

    render() {
        let listElement = ''
        if (this.state.loaded) {
            listElement = <List list={this.state.list}/>
        } else {
            listElement = <div className='loader'>
            </div>
        }
        return (
            <div className="page">
                <header className="header">
                    主题首页
                </header>
                <nav className='tab-bar'>
                    <div className={this.state.currentTab === 'ask' ? 'tab-item on' : 'tab-item'}
                         onClick={this.switchTab.bind(this, 'ask')}>提问
                    </div>
                    <div className={this.state.currentTab === 'share' ? 'tab-item on' : 'tab-item'}
                         onClick={this.switchTab.bind(this, 'share')}>分享
                    </div>
                    <div className={this.state.currentTab === 'job' ? 'tab-item on' : 'tab-item'}
                         onClick={this.switchTab.bind(this, 'job')}>工作
                    </div>
                    <div className={this.state.currentTab === 'good' ? 'tab-item on' : 'tab-item'}
                         onClick={this.switchTab.bind(this, 'good')}>好文
                    </div>
                </nav>
                <main className='content'>
                    {listElement}
                </main>
            </div>
        );
    }
}

