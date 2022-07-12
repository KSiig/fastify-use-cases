const fastify = require('fastify')({
  logger: false
})

fastify.listen({port: 3000}, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}) 
