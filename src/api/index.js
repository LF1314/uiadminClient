
import request from '@/until/req'

const API = {
    // 管理员列表
    adminlist:"/admins",
    // 添加管理员
    addadmin:"/admins/add",
    // 管理员登录
    adminLogin:"/admins/login"

  },

// 默认配置
  DEFAULTS = {};

// 封装get请求
export function get_http(url, opts) {
  // 传入的参数，默认为默认配置DEFAULTS的数据
  let options = Object.assign({}, DEFAULTS, opts);
  return request({
    method: 'get',
    url: API[url],
    // 传参
    params: options
  })
}

// 封装post请求
export function post_http(url, opts) {
  // 传入的参数，默认为默认配置DEFAULTS的数据
  let options = Object.assign({}, DEFAULTS, opts);
  return request({
    method: 'post',
    url: API[url],
    // 传参
    data: options
  })
}





