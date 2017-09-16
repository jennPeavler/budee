exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('strain_data', (table) => {
      table.increments('id').primary();
      table.string('name').unique();
      table.string('strain');
      table.decimal('THC_content', 3, 2);
      table.decimal('CBD_content', 3, 2);
      table.string('dispensary');
      table.integer('cost ($/eighth)');
      table.decimal('rating', 2, 1);
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('strain_data'),
    knex.schema.dropTable('users'),
  ]);
};
