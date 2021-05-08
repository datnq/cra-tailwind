const Fastify = require('fastify')
const server = Fastify()

require('dotenv').config()

server.register(require('fastify-http-proxy'), {
  upstream: process.env.REACT_APP_MAL_AUTH_ENDPOINT,
  prefix: '/proxy/auth', // optional
  http2: false, // optional
})

server.register(require('fastify-http-proxy'), {
  upstream: process.env.REACT_APP_MAL_ENDPOINT,
  prefix: '/proxy/mal', // optional
  http2: false, // optional
})

server.listen(5000)
