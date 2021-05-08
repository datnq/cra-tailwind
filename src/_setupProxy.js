const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: process.env.API_PROXY_TARGET,
      changeOrigin: true,
    }),
  )
}
