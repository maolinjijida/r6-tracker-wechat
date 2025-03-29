const fetch = require('../utils/fetch');
//seasonal.js
module.exports = async (platform,username) => {
    const url = `https://public-api.tracker.gg/v2/r6siege/standard/seasonal/${platform}/${username}`;
    return await fetch(url);
};