import React, {Component} from "react";
import {doRequest, server} from "../config";
import './Detail.css'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            detailData: {},
            loaded: false,
        };
        this.onBack = this.onBack.bind(this);
    }

    componentDidMount() {
        this.getDetailData();
    }

    onBack() {
        this.props.history.goBack();
    }

    getDetailData() {
        let that = this;
        doRequest(server.TOPIC_ID_URL(that.state.id), {
            mdrender: true
        }).then((data) => {
            console.log(data.author.avatar_url);
            if (data) {
                that.setState({
                    loaded: true,
                    detailData: data
                })
            }
        })
    }

    render() {
        let main = <div className='loader'>.</div>;
        if (this.state.loaded) {
            main = <main className='content'>
                <div className='content-header'>
                        <span
                            className='content-header-title'>{this.state.detailData.title}
                            </span>
                    <div className='content-header-body'>
                        <div className='avatar'>
                            <img
                                src={this.state.detailData.author.avatar_url}
                                alt={this.state.detailData.author.avatar_url}
                            />
                        </div>
                        <div
                            className='name'>{this.state.detailData.author.loginname}</div>
                    </div>
                    <div className='content-header-footer'>
                        <div className='item'>
                            {new Date(this.state.detailData.create_at).format('yyyy-MM-dd hh:mm')}
                        </div>
                        <div
                            className='item'>
                            阅读数 {this.state.detailData.visit_count}
                        </div>
                    </div>
                </div>
                <div className='content-body'>
                    <div
                        dangerouslySetInnerHTML={{__html: this.state.detailData.content}}></div>
                </div>
                <div className='content-footer'></div>
            </main>
        }
        return (
            <div className='page'>
                <header className='header'>
                    <div className='back' onClick={this.onBack.bind(this)}>返回</div>
                    <div className='title'>详情</div>
                </header>
                {/*内容部分*/}
                {main}
            </div>
        )

    }
}

export default Detail