const fetch = require('../utils/fetch');
//profile.js
module.exports = async (platform,username) => {
    const url = `https://public-api.tracker.gg/v2/r6siege/standard/profile/${platform}/${username}`;
    return await fetch(url);
};