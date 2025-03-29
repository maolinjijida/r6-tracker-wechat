// src/sdk/extractors/seasonalExtractor.js

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