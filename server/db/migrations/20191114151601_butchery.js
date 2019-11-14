
exports.up = function(knex) {
  return knex.schema.createTable('Butchery', table => {
    table.increments().primary()
    table.string('name')
    table.integer('price')
  })
};

exports.down = function(knex) {
  
};
