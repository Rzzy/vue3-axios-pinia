import axios from 'axios';

const instance = axios.create({
  baseURL: 'api/v1',
  timeout: 60000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 发送请求前的处理
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加相应拦截器
instance.interceptors.response.use(
  function (response) {
    // 相应数据处理
    return response;
  },
  function(error) {
    return Promise.reject(error)
  }
);

export default instance;
