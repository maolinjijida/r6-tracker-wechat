// src/sdk/utils/fetch.js
//用axios来请求封装
const axios = require('axios');
module.exports = fetch;

const headers = {
    'User-Agent' : 'Mozilla/5.0',                     //浏览器特征
    'Accept' : 'application/json',                    //返回json  
    'Referer' : 'https://r6.tracker.network/',        //请求来源页
    'Origin' : 'https://r6.tracker.network'           //来自哪个页面
};

async function fetch(url) {
    try{
        const response = await axios.get(url,{headers});
        return response.data;
    }catch(error){
        console.error("fail to get url");
        throw error;
    }
}