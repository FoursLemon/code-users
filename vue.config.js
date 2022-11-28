const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 5000,
    // open: true,
    proxy:"https://www.escook.cn"
  }
})
