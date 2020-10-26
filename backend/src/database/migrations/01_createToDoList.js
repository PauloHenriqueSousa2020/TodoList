exports.up = function(knex) {
  return knex.schema.createTable('to_do', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('day').notNullable();
    table.string('hour').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('to_do');
};