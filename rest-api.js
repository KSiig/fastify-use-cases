const fastify = require('fastify')({
  logger: false
})

let persons = [{
  id: 0,
  firstName: 'John',
  lastName: 'Doe',
  city: 'Austin'
  },
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    city: 'Chicago'
  }]

fastify.post('/person', (req, res) => {
  persons.push(req.body)
  res.send(persons)
})

// Get a person given an ID
fastify.get('/person', (req, res) => {
  res.send(persons.find(x => x.id == req.query.id))
})

// Update a person given an ID
fastify.put('/person', (req, res) => {
  const index = persons.findIndex(x => x.id == req.query.id)
  for (const key of Object.keys(req.body)) {
    persons[index][key] = req.body[key];
  }
  res.send(persons.find(x => x.id == req.query.id))
})

// Delete a person given an ID
fastify.delete('/person', (req, res) => {
  persons = persons.filter(x => x.id != req.query.id)
  res.send(persons)
})

fastify.listen({port: 3000}, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}) 
