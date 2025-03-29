const getProfile = require('./endpoints/profile');
const getMatches = require('./endpoints/matches');
const getSeasonal = require('./endpoints/seasonal');
const getOperators = require('./endpoints/operators');

// 加入提取器
const extractProfile = require('./extractors/profileExtractor');
const extractMatches = require('./extractors/matchesExtractor');
const extractSeasonal = require('./extractors/seasonalExtractor');
const extractOperators = require('./extractors/operatorsExtractor');


//这个r6也是野路子获得json时写的
//tracker.gg只给了profile一个接口，所以清洗器那四个要重新写 
//直接清洗获取的profile.js里 player的数据就好了
//封装的类目前是没改的，目前只调试通了fetch、profile

class R6Client {
    constructor(platform = 'ubi') {
        this.platform = platform;
    }

    async profile(username) {
        const raw = await getProfile(this.platform, username);
        return extractProfile(raw);
    }

    async matches(username) {
        const raw = await getMatches(this.platform, username);
        return extractMatches(raw);
    }

    async seasonal(username) {
        const raw = await getSeasonal(this.platform, username);
        return extractSeasonal(raw);
    }

    async operators(username) {
        const raw = await getOperators(this.platform, username);
        return extractOperators(raw);
    }
}

module.exports = R6Client;