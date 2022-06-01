const playersData = require('./seeds_data/playersData');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = function (knex) {
    return knex("players").del() 
      .then(() => knex("players").insert(playersData))
      .then(() => {
        return knex('users');
      })
      .then(() => {
        return knex('users');
      });
};