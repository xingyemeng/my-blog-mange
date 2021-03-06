module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8001',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        sourceMap: true
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}
