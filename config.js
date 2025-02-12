//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349123731026";
global.owner = process.env.OWNER_NUMBER || "2349123731026";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ04vTENCVkM2Vitoa1F0aDl4THpuRTRoVkxFd2dGM25YN3Q1ZUlSUnJuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGVNR3NwUkxxU2UzMDBGazFiSVFnNitTb3UrR0p2Ky9NVG52d055Z3NqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TWhqVFNEdG9CS2RCS2hPTy9MRDBJZjloMTgrYVM0SDh5K09yeHN0UWtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSllWclFDOE95M3EyT2RFZURhUTI5elk3U2ZyRVpkWWlsdTdoUmJ0Umg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLL01KSFAxN04zdE9KV2dyVWJ1UTV2NDdwWGRlNWlTSVcwK09wVk5PMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV5V05sT1ZqVHJqMktqSkJyV3dGc2N3L1hWb3JkL1FNUjZ5aGZITkE4VEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9xd2hoMHZ2TlltZDFkKzNmeFNMS05lWHBoNXNDWHBuUWxFckpIYlNXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUhFWHFTM0dxNGV3cWlUMjlsa3ZncStUN0o1akp4TlY0MUxkUXE4RkNWYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNrUXNHUjZJQ1NGbFNydkdwSUNZUEVieDJkOWRhT1N0RzVpU3pteisvODNmWGRuYVEvUFZNaTAycnRmWkx4YlR0KzUzNjN0Y2RvOGpLTmxmazZWZmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IlpiTFE3ZERLMGpzTzJGZXo1M1VYY1hCZkZCRStvRzRLKy9hS3poejZQb0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQyODE3NzYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAxNUI3M0VENDk1NTNGMUM4RTJBMDNGMTEwNTA1NDFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzkzOTgyNzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlplZW04alcwVFBLa3JvTUNUazZ2REEiLCJwaG9uZUlkIjoiMzUzZDdlYzgtMzhkMC00ZjRmLWI0ZWUtM2E5ZDBhNTc4NzUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHOW91NGlwcVY3ZTV4NkhIN24ydEo5RHgyUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3SVdNSENpc2NkdDFmMzIrV1Z1QUtPMklsZUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEFWU05YRVgiLCJtZSI6eyJpZCI6IjkyMzE0MjgxNzc2MzoyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLijq/qr63MvfCThqnjgKzjgK3hqrPwnZq7zaLwnYat8J2akfCdm4bhqrEgU2FN0LwgwrtcbuKLhlxuICDii4ZcbiAg4ouGXG4gy5DNoiDii4YgIFxu4ouGIFxuIOKLhlxuICDii4ZcbiAg4ouGXG4gICDii4YgXG4gIPCThqnwnZCIybTNoc2c8J2QrMSxzIrwnZCd8J2QnvCThqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1ByNzUvd0JFUGk0dEwwR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikp2MFl3Vlh6L3BpaEZVTDljQkxnb0N2VFBWYmRHVkk2NW1EcnZpVUdHRXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktHZW9RaUtUa3lMdTRqdUpKOFRSdU9BeldZblpyYjFHeElKVWpiaFcyUVlsMUZCbVpzTEFleWVTVVF6S3puUWNHcm10azhLUlRZYUduK1ZpUlkvN0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5OC9XRzB6YlNvUU5VeFRkN2ZsTmYyaUlBQllSWXJzSjR4Tlp1d3pGMXk3bUwzNTBLVTQwaUhaZ0xudUh0TTNVaWVodzVFOHZhL0czMHRDN0JIdWlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE0MjgxNzc2MzoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTYjlHTUZWOC82WW9SVkMvWEFTNEtBcjB6MVczUmxTT3VaZzY3NGxCaGhNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5Mzk4Mjc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9xQyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
