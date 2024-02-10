'use strict';

const AWS = require('aws-sdk');

let options = {};

if (process.env.IS_OFFLINE) {
    options = {
        region: 'local',
        endpoint: 'http://localhost:8000',
        accessKeyId: '123',
        secretAccessKey: '123'
    };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;