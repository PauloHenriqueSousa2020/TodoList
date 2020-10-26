const db = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id_doing } = request.body;
    const totalInserts = await (await db('to_doing').count('* as total').where('id_doing', id_doing))
    const { total } = totalInserts[0]

    const insert = await db('to_do').where('id', id_doing).select('id')

    if (total > 0 || insert.length === 0) {
      return response.status(401).json({ error: 'Operação não autorizada!' });
    } else {
      await db('to_doing').insert({ id_doing });
      return response.json({ id_doing });
    }

  },

  async index(request, response) {
    const toDo = await db('to_doing').join('to_do', 'to_do.id', '=', 'to_doing.id_doing').select('*');
    return response.json(toDo)
  },

  async delete(request, response) {
    const { id } = request.params;
    await db('to_doing').where('id_doing', id).delete();
    return response.status(204).send();
  }
}