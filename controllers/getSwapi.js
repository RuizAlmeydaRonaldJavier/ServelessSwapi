'use strict';
const { getSwapi } = require('../services/getSwapi');
const { getSwapiDynamo } = require('../services/getSwapiDynamo');
const { postSwapiDynamo } = require('../services/postSwapiDynamo');
const { translate } = require('../utils/translate');

module.exports.getSwapi = async (event) => {
    const { query } = event.pathParameters;
    let reponseSwapi = {};

    const reponseDynamo = await getSwapiDynamo(query);

    if (reponseDynamo.success && reponseDynamo.data != undefined) {
        console.log("Guardado");
        reponseSwapi = reponseDynamo.data;

    } else {
        console.log("Consulta");
        const response = await getSwapi({
            idPeople: query
        });

        let reponseTranslate = await translate(response);

        reponseTranslate.id = query;

        await postSwapiDynamo(reponseTranslate);

        reponseSwapi = reponseTranslate;
    }

    return reponseSwapi;
};