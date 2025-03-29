// src/sdk/extractors/profileExtractor.js
//这四个清洗器是我前面野路子弄得json搞得，需重写
/**
 * @typedef {Object} PlayerProfile
 * @property {string|null} profile_id
 * @property {string|null} user_id
 * @property {string|null} username
 * @property {string|null} platform
 * @property {number|null} level
 * @property {number|null} xp
 * @property {number|null} lootbox_probability
 * @property {string|null} profile_banner_url
 * @property {number|null} rank_point
 * @property {number|null} last_match_mmr_change
 * @property {number|null} rank
 * @property {number|null} max_rank
 * @property {number|null} rank_win_loss_ratio
 * @property {number|null} rank_kd
 * @property {number|null} rank_matches_played
 * @property {number|null} rank_wins
 * @property {number|null} rank_losses
 * @property {number|null} rank_abandons
 * @property {number|null} casual_wins
 * @property {number|null} casual_losses
 * @property {number|null} casual_matches_played
 * @property {number|null} casual_kd
 * @property {number|null} casual_win_loss_ratio
 * @property {number|null} casual_abandons
 * @property {number|null} playtime_pvp
 * @property {number|null} playtime_pve
 * @property {string|null} created_at
 * @property {string|null} last_played_at
 * @property {boolean|null} is_cheater
 * @property {string|null} avatar_url_256
 * @property {string|null} platform_user_id
 * @property {number|null} current_season_id
 */

module.exports = function extractProfile(raw) {
    const data = raw.data || {};

    return {
        profile_id: data.profileId || null,
        user_id: data.userId || null,
        username: data.username || null,
        platform: data.platformType || null,
        level: data.level || null,
        xp: data.xp || null,
        lootbox_probability: data.lootboxProbability || null,
        profile_banner_url: data.profileBannerUrl || null,
        rank_point: data.rankPoint || null,
        last_match_mmr_change: data.lastMatchMmrChange || null,
        rank: data.rank || null,
        max_rank: data.maxRank || null,
        rank_win_loss_ratio: data.rankWinLossRatio || null,
        rank_kd: data.rankKd || null,
        rank_matches_played: data.rankMatchesPlayed || null,
        rank_wins: data.rankWins || null,
        rank_losses: data.rankLosses || null,
        rank_abandons: data.rankAbandons || null,
        casual_wins: data.casualWins || null,
        casual_losses: data.casualLosses || null,
        casual_matches_played: data.casualMatchesPlayed || null,
        casual_kd: data.casualKd || null,
        casual_win_loss_ratio: data.casualWinLossRatio || null,
        casual_abandons: data.casualAbandons || null,
        playtime_pvp: data.playtimePvp || null,
        playtime_pve: data.playtimePve || null,
        created_at: data.createdAt || null,
        last_played_at: data.lastPlayedAt || null,
        is_cheater: data.isCheater || null,
        avatar_url_256: data.avatar256 || null,
        platform_user_id: data.platformUserId || null,
        current_season_id: data.currentSeasonId || null,
    };
}