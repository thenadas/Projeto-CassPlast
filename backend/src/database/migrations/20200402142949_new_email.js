
exports.up = function(knex) {
  return knex.schema.createTable('email', function (table) {
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('Empresa').notNullable();
      table.string('Cidade').notNullable();
      table.string('Email').notNullable();
      table.string('Mensagem').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('email');
};
