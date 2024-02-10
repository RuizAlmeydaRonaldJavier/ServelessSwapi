'use strict';
const dynamodb = require('../utils/dynamodb');

module.exports.getSwapiDynamo = async (swapiParams) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: swapiParams
        },
    };

    try {
        const response = await dynamodb.get(params).promise();

        return {
            success: true,
            data: response.Item
        };

    } catch (error) {
        console.log(error);

        return {
            success: false,
            msg: 'Se generó un problema al momento de consultar la información en Dynamo.'
        };
    }
};