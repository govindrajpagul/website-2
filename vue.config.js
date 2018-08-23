module.exports = {
    // https://github.com/vuejs/vue-cli/tree/dev/docs/zh/config#baseurl
    // 设置成相对路径，打包出来可以部署到任意路径
    baseUrl: './',
    // 打包目录
    outputDir: 'admin',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    filenameHashing: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // 开发服务器配置
    devServer:{
        port:10086,
        // 代理服务器
        proxy:{
            '/api':{
                target:'http://api.demo.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    },
    //webpack配置  config:被解析的配置参数
    configureWebpack: config=>{

    }
}