const fetch = require('../utils/fetch');

async function getProfile(apiKey, platform, playerId) {
    if (!apiKey) throw new Error('API Key missing');
    if (!platform || !playerId) throw new Error('Platform and Player ID are required');

    const url = `https://public-api.tracker.gg/v2/r6siege/standard/profile/${platform}/${playerId}`;
    return await fetch(url, apiKey);
}

module.exports = { getProfile };