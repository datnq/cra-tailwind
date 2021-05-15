'use strict'

const fp = require('fastify-plugin')
const { omit } = require('lodash')

require('dotenv').config()

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-http-proxy'), {
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
})
