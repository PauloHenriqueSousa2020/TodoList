  
exports.up = function(knex) {
  return knex.schema.createTable('completedTo_do', function(table){
    table.decimal('id_completed').notNullable().references('id_doing').inTable('to_doing');
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('completedTo_do');
};