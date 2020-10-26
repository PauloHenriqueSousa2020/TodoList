  
exports.up = function(knex) {
  return knex.schema.createTable('to_doing', function(table){
    table.decimal('id_doing').notNullable().references('id').inTable('to_do');
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('to_doing');
};