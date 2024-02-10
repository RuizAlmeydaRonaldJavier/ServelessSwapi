'use strict';
const { postSwapiDynamo } = require('../services/postSwapiDynamo')

module.exports.postSwapiDynamo = async (event) => {
  const data = JSON.parse(event.body);

  const response = await postSwapiDynamo(data);

  return response;
};