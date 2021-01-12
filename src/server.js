const Fastify = require('fastify')
const server = Fastify()

server.register(require('fastify-http-proxy'), {
  upstream: 'https://github.com',
  prefix: '/proxy/github', // optional
  http2: false, // optional
})

server.listen(5000)
