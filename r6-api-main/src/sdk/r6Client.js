const getProfile = require('./endpoints/profile');
const getMatches = require('./endpoints/matches');
const getSeasonal = require('./endpoints/seasonal');
const getOperators = require('./endpoints/operators');

// 加入提取器
const extractProfile = require('./extractors/profileExtractor');
const extractMatches = require('./extractors/matchesExtractor');
const extractSeasonal = require('./extractors/seasonalExtractor');
const extractOperators = require('./extractors/operatorsExtractor');

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