module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production/'
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://pokeapi.co/api/v2/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }, '/numapi': {
        target: 'http://numbersapi.com/',
        pathRewrite: { '^/numapi': '' },
        ws: true,
        changeOrigin: true,
      },
    }
  }
}