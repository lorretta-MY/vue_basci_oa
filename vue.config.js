const httpUrl = "www.baidu.com";
// const path = require("path");
const os = require("os");
function getNetworkIp() {
  let needHost = ""; // 打开的host
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces();
    for (let dev in network) {
      let iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (
          alias.family === "IPv4" &&
          alias.address !== "127.0.0.1" &&
          !alias.internal
        ) {
          needHost = alias.address;
        }
      }
    }
  } catch (e) {
    needHost = "localhost";
  }
  return needHost;
}
module.exports = {
  publicPath: "./",
  outputDir: "./dist",
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    // host: "192.168.101.167",
    host: getNetworkIp(),
    port: 8088,
    https: false,
    hotOnly: false,
    //设置代理
    proxy: {
      "/api": {
        target: httpUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  // 第三方插件配置
  pluginOptions: {},
  // webpack相关配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("vue$", "vue/dist/vue.esm.js")
  //     .set("@", path.resolve(__dirname, "./src"));
  // },
  // css相关配置
  // css: {
  //   // 是否分离css（插件ExtractTextPlugin）
  //   extract: true,
  //   // 是否开启 CSS source maps
  //   sourceMap: false,
  //   // css预设器配置项
  //   loaderOptions: {},
  //   // 是否启用 CSS modules for all css / pre-processor files.
  //   modules: false,
  // },
};
