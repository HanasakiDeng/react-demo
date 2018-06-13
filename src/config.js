import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1';
//请求链接
export const server = {
    TOPICS_url: '/topics',
    TOPIC_ID_URL(id) {
        return `/topic/${id}`
    }
}
// 异步请求方式
export let doRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}${url}`, params).then((res) => {
            if (res.data.success) {
                resolve(res.data.data)
            } else {
                reject(res.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}