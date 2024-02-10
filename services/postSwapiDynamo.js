'use strict';
const dynamodb = require('../utils/dynamodb');

module.exports.postSwapiDynamo = async (swapiParams) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: swapiParams
    }

    try {
        await dynamodb.put(params).promise();

        return {
            success: true,
            msg: 'La información se registro correctamente.'
        };

    } catch (error) {
        console.log(error);

        return {
            success: false,
            msg: 'Se generó un problema al momento de registrar la información.'
        };
    }
};