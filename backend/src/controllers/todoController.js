const db = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { title, description, day, hour } = request.body;


    const [ id ] = await db('to_do').insert({
      title,
      description,
      day,
      hour
    })

    return response.json({ id });
  },

  async index(request, response) {
    const {page = 1 } = request.query;

    const count = await db('to_do').count();

    console.log(count)


    const toDo = await db('to_do').select('*').limit(5).offset((page - 1) * 5);

    response.header('X-Total-Counter', count['count(*)'])
    return response.json(toDo)
  },

  async delete(request, response){
    const { id } = request.params;

    await db('to_do').where('id', id).delete();

    return response.status(204).send();
  }
}