module.exports = {
  lintOnSave: false, //禁用eslint
  devServer: {
    // host: '1493ae86.ngrok.io',
    // port: 80,
    proxy: {
      '/web/v1': {
        target: process.env.VUE_APP_URL, //调用对应的接口
        changeOrigin: true
      }
    }
  },
}
