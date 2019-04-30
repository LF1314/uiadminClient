
import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? process.env.BASE_API : $URL.BASE_API, // api 的base_url
  timeout: 6000 
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http request 拦截器（对发送的数据做提前处理）
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    /**
     * var a = {name:'hehe',age:10};
     * qs.stringify(a)
     * => 'name=hehe&age=10'
     */

    if (config.method == "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
service.interceptors.response.use(
    res => {
      return res.data;
    }
  )


export default service
