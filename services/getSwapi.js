'use strict';
const fetch = require('node-fetch');

module.exports.getSwapi = async (swapiParams) => {
    const uri = `https://swapi.dev/api/people/${swapiParams.idPeople}`;
    const response = await fetch(uri);
    const data = await response.json();

    return data;
};