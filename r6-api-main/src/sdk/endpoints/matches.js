const fetch = require('../utils/fetch');
//match.js
module.exports = async (platform,username) => {
    const url = `https://public-api.tracker.gg/v2/r6siege/standard/matches/${platform}/${username}`;
    return await fetch(url);
};