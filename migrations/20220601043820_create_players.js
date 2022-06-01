/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('players', (table) => {
        table.increments('playerNumber').primary();
        table.string('name').notNullable();
        table.string('image').notNullable().defaultTo('Store Manager');
        table.string('position').notNullable();
        table.integer('age').notNullable();
        table.decimal('GP').notNullable();
        table.decimal('MPG').notNullable();
        table.decimal('MIN%').notNullable();
        table.decimal('USG%').notNullable();
        table.decimal('TO%').notNullable();
        table.decimal('FTA').notNullable();
        table.decimal('FT%').notNullable();
        table.decimal('2PA').notNullable();
        table.decimal('2P%').notNullable();
        table.decimal('3PA').notNullable();
        table.decimal('3P%').notNullable();
        table.decimal('eFG%').notNullable();
        table.decimal('TS%').notNullable();
        table.decimal('PPG').notNullable();
        table.decimal('RPG').notNullable();
        table.decimal('TRB%').notNullable();
        table.decimal('APG').notNullable();
        table.decimal('AST%').notNullable();
        table.decimal('SPG').notNullable();
        table.decimal('BPG').notNullable();
        table.decimal('TOPG').notNullable();
        table.decimal('VI').notNullable();
        table.decimal('ORTG').notNullable();
        table.decimal('DRTG').notNullable();
      })
    .createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('position').notNullable();
        table.string('password').notNullable().unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('players');
};
