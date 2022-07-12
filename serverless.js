const fastify = require('fastify')({
  logger: false
})

fastify.get('/add', async (req, res) => {
  let a = req.query.a;
  let b = req.query.b;

  res.send(+a + +b);
})

fastify.listen({port: 3000}, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}) 
