const fetch = require('../utils/fetch');
//operators.js
module.exports = async (platform,username) => {
    const url = `https://public-api.tracker.gg/v2/r6siege/standard/operators/${platform}/${username}`;
    return await fetch(url);
};