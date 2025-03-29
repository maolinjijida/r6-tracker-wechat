// src/sdk/extractors/seasonalExtractor.js
//这四个清洗器是我前面野路子弄得json搞得，需重写
module.exports = function extractSeasonal(raw) {
    const current = raw.data?.seasons?.[0];
    if (!current) return {};

    return {
        seasonName: current.metadata?.seasonName || '',
        rank: current.stats?.rank || '',
        mmr: current.stats?.mmr || 0,
        kd: current.stats?.kd || 0,
        winRate: current.stats?.winPercentage || 0
    };
}