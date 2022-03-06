// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.register(require('./src/router'))
.register(require('fastify-postgres'), {
    connectionString: 'postgres://postgres:admin@localhost/postgres'
})

fastify.decorateRequest('fastify', fastify); 

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()