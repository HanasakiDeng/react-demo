import React, { Component } from "react";
import { fetchTopicDetail } from '../../api/index'
import '../../common/styles/Detail.css'

class TopicDetail extends Component {
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
        fetchTopicDetail(this.state.id).then(data => {
            if (data) {
                this.setState({
                    loaded: true,
                    detailData: data
                })
            }
        })
    }
    renderDetailInfo(detailInfo){
          return  <main className='content'>
          <div className='content-header'>
              <span
                  className='content-header-title'>{detailInfo.title}
              </span>
              <div className='content-header-body'>
                  <div className='avatar'>
                      <img
                          src={detailInfo.author.avatar_url}
                          alt='详情'
                      />
                  </div>
                  <div
                      className='name'>{detailInfo.author.loginname}</div>
              </div>
              <div className='content-header-footer'>
                  <div className='item'>
                      {new Date(detailInfo.create_at).format('yyyy-MM-dd hh:mm')}
                  </div>
                  <div
                      className='item'>
                      阅读数 
                  </div>
              </div>
          </div>
          <div className='content-body'>
              <div ref='contentDetail'
                  dangerouslySetInnerHTML={{ __html: detailInfo.content }} ></div>
          </div>
          <div className='content-footer'>
            <div className="title">
              『精彩评论』
            </div>{detailInfo.visit_count}
            <div className='content-footer-body'>
            <div ref='contentDetail'
                  dangerouslySetInnerHTML={{ __html: detailInfo.replies[0].content }} ></div>
            </div>
              
          </div>
      </main>
    }

    render() {
        let main = <div className='loader'>.</div>;
        if (this.state.loaded) {
            main = this.renderDetailInfo(this.state.detailData)
        }
        return (
            <div className='detail-page'>
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

export default TopicDetail