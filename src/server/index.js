import Vue from 'vue'
import Axios from 'axios'

var axiosConfig = Axios.create({
  baseURL: 'http://192.168.20.3:8886/', //本地
  timeout: 3000, //所有请求30s后过期
  withCredentials: true, //跨域凭证
});

export default axiosConfig;