const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // 指向后端服务
        changeOrigin: true,
        pathRewrite: { '^/api': '' },    // 把前端的 /api 路径重写为空，使其指向后端的根路径
      }
    }
  }
});
