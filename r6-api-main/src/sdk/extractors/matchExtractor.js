// src/sdk/extractors/matchesExtractor.js
//这四个清洗器是我前面野路子弄得json搞得，需重写
module.exports = function extractMatches(raw) {
    return (raw.data || []).map(match => ({
        matchId: match.id,
        map: match.metadata?.mapName || '',
        result: match.metadata?.result || '',
        date: match.metadata?.timestamp || '',
        kills: match.stats?.kills?.value || 0,
        deaths: match.stats?.deaths?.value || 0
    }));
}