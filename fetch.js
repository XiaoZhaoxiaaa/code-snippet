import qs from "qs";
/**
 * 根据环境变量进行接口区分
 */
let baseURL = "";
let baseURLArr = [
  {
    type: "development",
    url: "http://127.0.0.1:9000",
  },
  {
    type: "test",
    url: "http://192.168.20.15:9000",
  },
  {
    type: "production",
    url: "http://xzx.baidu.com",
  },
];
baseURLArr.forEach((item) => {
  if (ProcessingInstruction.env.NODE_ENV === item.type) {
    baseURL = item.url;
  }
});
export default function request(url, options = {}) {
  url = baseURL + url;
  /**
   * GET 系列请求的处理
   *
   */
  !options.method ? (options.method = "GET") : null;
  if (options.hasOwnProperty("params")) {
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)) {
      const ask = url.includes("?") ? "&" : "?";
      url += `${ask}${qs.stringify(params)}`;
    }
    delete options.params; // params 不是fetch 自带的
  }
  /**
   * 合并配置项
   */
  options = Object.assign(
    {
      // 预选跨域携带资源凭证 same-origin 同源可以 omit都拒绝
      credentials: "include",
      // 设置请求头
      header: {},
    },
    options
  );
  options.headers.Accept = "application/json";
  /**
   * token
   */
  const token = localStorage.getItem("token");
  token && (options.headers.Authoriztion = token);

  /**
   * POST 请求的处理
   */
  if (/^(POST|PUT)$/i.test(options.method)) {
    !options.type ? (options.type = "urlencoded") : null;
    if (options.type === "urlencoded") {
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      options.body = qs.stringify(options.body);
    }
    if (options.type === "json") {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(options.body);
    }
  }

  return fetch(url, options)
    .then((response) => {
      // 返回结果可能是非200 状态码
      if (!/^(2|3)\d{2}$/.test(response.status)) {
        switch (response.status) {
          case 401: // 无权限  当前请求需要用户验证（
            break; // 弹出蒙层，或者路由跳转

          case 403: // 服务器拒绝执行（token/session 过期）
            localStorage.removeItem("token");
            break;
          case 404: // 找不到页面
            break;
        }
      }
      return response.json();
    })
    .catch((error) => {
      // 断网处理
      if (!window.navigator.onLine) {
        // 断网处理： 可以跳转到断网页面
        // 连接网络后还要回到之前页面   // 路由保存 数据保存
      }
      return Promise.reject(error);
    });
}
