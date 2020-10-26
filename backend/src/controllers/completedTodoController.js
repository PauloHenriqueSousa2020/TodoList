const db = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id_completed } = request.body;
    const totalInserts = await (await db('completedTo_do').count('* as total').where('id_completed', id_completed))
    const { total } = totalInserts[0] 

    const insert = await db('to_doing').where('id_doing', id_completed).select('id_doing')

    if (total > 0 || insert.length === 0) {
      return response.status(401).json({ error: 'Operação não autorizada!' });
    } else {
      await db('completedTo_do').insert({ id_completed });
      return response.json({ id_completed });
    } 

  
    
  },

  async index(request, response) {
    const toDo = await db('completedTo_do').join('to_do', 'to_do.id', '=', 'completedTo_do.id_completed').select('*');
    return response.json(toDo)
  },


}