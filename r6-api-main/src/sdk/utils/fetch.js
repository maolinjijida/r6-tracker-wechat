// src/sdk/utils/fetch.js
//用axios来请求封装
// fetch.js - 封装 axios 请求
const axios = require('axios');
async function fetch(url, apiKey) {
    const headers = {
        'TRN-Api-Key': apiKey,
        'Accept': 'application/json'
    };

    const response = await axios.get(url, { headers });
    return response.data;
}

module.exports = fetch;