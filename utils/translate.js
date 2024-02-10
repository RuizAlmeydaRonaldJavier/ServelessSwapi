'use strict';
const fetch = require('node-fetch');

module.exports.translate = async (translateParams) => {
    const response = {}

    for (var key in translateParams) {
        const keySplit = key.split('_');
        const keyTranslate = await Promise.all(keySplit.map(e => translateGoogle(e)));
        const KeyTranslateJoin = keyTranslate.join('_');

        response[KeyTranslateJoin] = translateParams[key];
    }

    return response
};

const translateGoogle = async (params) => {
    const text = params;
    const source = "en";
    const target = "es";

    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaS...................IV4`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            source: source,
            target: target,
        }),
    });

    const data = await response.json();
    const textTranslate = data.data.translations[0].translatedText;

    return textTranslate;
}