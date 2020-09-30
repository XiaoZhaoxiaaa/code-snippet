// 环境
switch (process.env.NODE_ENV) {
  case "production":
    axios.default.baseURL = "http://xzx.baidu.com";
    break;
  case "test":
    axios.default.baseURL = "http://192.168.162:9000";
    break;
  default:
    axios.default.baseURL = "http://127.0.0.1:3000";
}

// 设置超时时间和跨域是否允许携带凭证
axios.default.timeout = 10000; // 10S
axios.defaults.withCredentials = true; // 带上cookie

// 设置请求传递数据的格式 (看服务器)
// xxx=xxx&&xxx=xxx   // 这种是 x-www-form-urlencoded 格式

axios.post(url, data);

axios.default.headers["Content-Type"] = "application/x-www-form-urlencoded";
axiso.default.transformRequest = (data) => qs.stringify(data);

/**
 * 设置请求拦截器
 * (客户端发送请求) => [请求拦截] => 服务器;
 * TOKEN校验 （JWT) 接收服务器返回的token,存储到vuex/本地存储中
 * 每一次向服务器发请求，我们应该把token 带上
 */
axios.interceptors.request.use(
  (config) => {
    // config 配置项
    // 携带上token
    let token = localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    return config; // 一定要返回
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 * 服务器返回信息 =》 [拦截的统一处理] =》 客户端JS获取到信息
 *
 */

axios.default.validateStatus = (status) => {
  // 自定义响应成功的HTTP状态码
  return /^(2|3)\d{2}$/.test(status);
};
axios.interceptors.response.use(
  (response) => {
    return response.data; // 返回响应主体
  },
  (error) => {
    let { response } = error;
    if (response) {
      // 服务器最起码返回结果了
      switch (response.status) {
        case 401: // 无权限  当前请求需要用户验证（
          break; // 弹出蒙层，或者路由跳转

        case 403: // 服务器拒绝执行（token/session 过期）
          break;
        case 404: // 找不到页面
          break;
      }
    } else {
      // 服务器连结果都没有返回
      if (!window.navigator.onLine) {
        if (!window.navigator.onLine) {
        // 断网处理： 可以跳转到断网页面
        // 连接网络后还要回到之前页面   // 路由保存 数据保存
      }
      return Promise.reject(error);
    }
  }
);

export default axios;
