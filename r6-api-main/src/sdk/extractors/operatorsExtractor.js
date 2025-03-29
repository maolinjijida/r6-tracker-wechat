// src/sdk/extractors/operatorsExtractor.js

module.exports = function extractOperators(raw) {
    return (raw.data?.segments || [])
        .sort((a, b) => (b.stats?.matchesPlayed?.value || 0) - (a.stats?.matchesPlayed?.value || 0))
        .slice(0, 5) // 取前5个常用干员
        .map(op => ({
            name: op.metadata?.name || '',
            matches: op.stats?.matchesPlayed?.value || 0,
            kd: op.stats?.kd?.value || 0,
            winRate: op.stats?.winPercentage?.value || 0
        }));
}