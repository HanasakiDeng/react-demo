import React from 'react';
import {Link} from 'react-router-dom'

const List = (props) => {
    const list = props.list;
    const listItem = list.map((item) => {
        return (
            <li key={item.id}>
                <Link to={`/topic/${item.id}`}>
                    <div className='item-header'>
                        <div className='sub-header-item'>
                            <img src={item.author.avatar_url}
                                 alt={item.author.avatar_url}/>
                            <label>{item.author.loginname}</label>
                        </div>
                        <span
                            className={item.good ? 'color-green' : 'color-red'}>
                        {item.good ? '已解决' : '待解决'}
                        </span>
                    </div>
                    <div className='item-content'>
                        <div className='item-content-title'>
                            <span>{item.title}</span>
                        </div>
                        <div className='item-content-body'>
                            <span>回复数: {item.reply_count}&nbsp;</span>
                            <span>访问量: {item.visit_count}</span>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
    return <ul>{listItem}</ul>;

}
export default List;