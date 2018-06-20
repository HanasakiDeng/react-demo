import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom'

export default class ReplyList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const replyList = this.props.replyList;
        const listItem = <li>
            <div className='item-header'>
            <div className='avatar'>
                      <img
                          src={replyList.author.avatar_url}
                          alt='详情'
                      />
                  </div>
                  <div
                      className='name'>{replyList.author.loginname}</div>
            </div>
        </li>
        return <ul> listItem </ul>
    }
}