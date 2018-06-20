import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

/**
 * 请求共通方法
 * @param {请求url } url 
 * @param {请求参数} params 
 */
export function request(url, params) {
    return axios.get(url, {params:params}).then(res => {
        if (!res.data.success) {
            throw new Error(res.data.message);
        }
        return res.data.data;
    })

}
