import React, { Component } from 'react';
import TopicList from "./TopicList";
import { fetchTopicList } from '../../api/index'
import '../../common/styles/Home.css'



export default class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            list: [],
            currentTab: 'ask',
        }
        this.switchTab = this.switchTab.bind(this);
    }

    componentDidMount () {
        this._initData();
        this.getListData(this.state.currentTab);
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
            currentTab: tabType,
            loaded: false,
            list: [],
        });
        this.getListData(tabType);
    }

    /**
     * 获取列表数据
     */
    getListData(tab) {
        fetchTopicList({
            tab: tab,
            page: 1,
            limit: 10,
        }).then(data => {
            if (data) {
                this.setState({
                    list: data,
                    loaded: true
                })
            }
        })
    }

    render() {
        let listElement = ''
        if (this.state.loaded) {
            listElement = <TopicList list={this.state.list} tabType={this.state.currentTab}/>
        } else {
            listElement = <div className='loader'>
            </div>
        }
        return (
            <div className="topic-page">
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
                <main className='topic-main'>
                    {listElement}
                </main>
            </div>
        );
    }
}

