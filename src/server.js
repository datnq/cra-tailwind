const Fastify = require('fastify')
const { omit } = require('lodash')
const server = Fastify()

require('dotenv').config()

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

server.listen(5000)
