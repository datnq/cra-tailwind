const Fastify = require('fastify')
const { omit } = require('lodash')
const server = Fastify()

server.register(require('fastify-http-proxy'), {
  upstream: process.env.REACT_APP_AUTH_URL,
  prefix: '/proxy/auth',
  replyOptions: {
    rewriteRequestHeaders: (_, headers) => {
      const credentials = `${process.env.REACT_APP_AUTH_CLIENT_ID}:${process.env.REACT_APP_AUTH_CLIENT_SECRET}`
      const base64Credentials = Buffer.from(credentials).toString('base64')
      headers.Authorization = 'Basic ' + base64Credentials
      return omit(headers, ['origin', 'Origin'])
    },
  },
})

server.register(require('fastify-sensible'))

server.register(require('fastify-accepts'))

server.register(require('fastify-qs'), {})

server.register(require('@mgcrea/fastify-request-logger').default);

server.register(require('fastify-autoroutes'), {
  dir: './routes',
  
})

server.listen(5000)
