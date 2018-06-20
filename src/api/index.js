import {request} from '../common/scripts/request'

/**
 * 获取主题列表数据
 * @param {promises 对象} params 
 */
export function fetchTopicList(params) {
    console.log(params);
    return request(`/topics`, params);
}

/**
 * 获取主题详情数据
 * @param {*} id 
 */
export function fetchTopicDetail(id) {
    return request(`/topic/${id}`)
}