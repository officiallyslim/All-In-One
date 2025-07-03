require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "1387242143268995183", 
    prefix: process.env.PREFIX || "!", 
    ownerID: process.env.OWNER_ID || "1293613906253709332",
    guildID: process.env.GUILD_ID || "1370200323586527232",
    SpotifyID: process.env.SPOTIFY_ID || "85aab1d51a174aad9eed6d7989f530e6",
    SpotifySecret: process.env.SPOTIFY_SECRET || "b2ad05aa725e434c88776a1be8eab6c2",
    mongourl: process.env.MONGO_URL || "",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1389309981328674987",
    logs1: process.env.LOGS1 || "1390417129358233640",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1390417166465110046",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1390417245020360856",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1221788310935179294/1221788721184243722/standard_4.gif', 
        support: process.env.SUPPORT || 'https://discord.gg/WfNXTs4geU',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1387242143268995183' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "85.88.163.80",
            port: parseInt(process.env.NODE_PORT || "3128"),
            password: process.env.NODE_PASSWORD || "saher.inzeworld.com",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            }
           ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}



/*
 * Modified By Gamer CodeX
 * Discord username - ray.dev
 * Youtube - https://www.youtube.com/@GamerCodeX
 * Discord Server - https://dsc.gg/codexdev
 */
