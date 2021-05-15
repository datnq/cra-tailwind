const db = require('../../lib/db')

module.exports = async function (fastify, opts) {
  fastify.put('/:authId', async function (request, reply) {
    const now = new Date()
    const user = await db.user.upsert({
      where: {
        authId: request.params.authId,
      },
      update: {
        lastLoggedIn: now,
      },
      create: {
        authId: request.params.authId,
        dateRegistered: now,
        lastLoggedIn: now,
      },
    })

    return user
  })
}
