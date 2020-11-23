module.exports={
  //配置客户端http代理跨域请求
  devServer: {
    
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/scend': {
        target: `http://sa.sogou.com/`,//真实服务器地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/scend' : '' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
        }
      },
      '/replace': {
        target: `https://m.look.360.cn/`,//真实服务器地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/replace' : '' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
        }
      },
    },
  }
}