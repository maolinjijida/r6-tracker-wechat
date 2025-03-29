// src/sdk/extractors/matchesExtractor.js

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