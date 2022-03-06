const StudentsController = require('../controllers/StudentsController')

module.exports = (fastify, opts, next) => {
    fastify.get('/', async (request, reply) => {
        return { iam: 'health' }
    })

    fastify.route({
        url: "/v1/students",
        method: "GET",
        handler: StudentsController.getStudents
    })
    fastify.route({
        url: "/v1/students/:id",
        method: "GET",
        handler: StudentsController.getStudentsSpecs
    })
    next()
}
