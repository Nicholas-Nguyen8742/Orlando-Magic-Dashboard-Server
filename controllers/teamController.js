const knex = require('knex')(require('../knexfile'));

/* [ROUTE] - '/team' */
// [GET] - Retrieves all players info, Querying for name, image, position, PPG, VI, RPG, eFG%
exports.index = (_req, res) => {
    knex('players')
    .select('playerNumber', 'name', 'image', 'position', 'PPG', 'VI', 'RPG', 'eFG' )
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving team data ${err}`));
};

/* [ROUTE] - '/team/ppg' */
// [GET] - Retrieves every players' ppg info
exports.ppg = (_req, res) => {
    knex('players')
    .select('name', 'PPG')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving PPG data for the team: ${err}`));
};

/* [ROUTE] - '/team/RPG-APG' */
// [GET] - Retrieves every players' ppg info
exports.rpgApg = (_req, res) => {
    knex('players')
    .select('name', 'RPG', 'APG')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving RPG & APG data for the team: ${err}`));
};