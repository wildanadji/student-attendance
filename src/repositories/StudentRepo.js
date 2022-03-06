module.exports.getStudents = async (req) => {
    const client = await req.fastify.pg.connect()
    const { rows } =  await client.query(
      'SELECT * FROM students',
    )
    client.release()
    return rows
}
module.exports.getStudentsSpecs = async (req) => {
  const client = await req.fastify.pg.connect()
  const { rows } =  await client.query(
    'SELECT * FROM students WHERE id=$1', [req.params.id],
  )
  client.release()
  return rows
}