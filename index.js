/*
DEIXE OS CREDITOS MEU NOBRE 🗿🍷
|-------------------------|
|> CloverMods <|
|________________|
se inscreva no meu canal e deixa o like no video
meta de 200 inscritos </>
base editavel para criacao de bots 

   ╱╱┏╮╱╱╱╱╱╱╱╱╱╱
   ╱╱┃┃╱╱┳╱┓┳╭┛┳┓
   ▉━╯┗━╮┃╱┃┣┻╮┣╱
   ▉┈┈┈┈┃┻┛┛┻╱┗┗┛
   ▉╮┈┈┈┃▔▔▔▔▔▔▔▔
   ╱╰━━━╯
   
   
*/
const util = require("util")
const { 
default: WAConnection,
downloadContentFromMessage, 
emitGroupParticipantsUpdate, 
emitGroupUpdate,
generateWAMessageContent, 
generateWAMessage, 
makeInMemoryStore, 
prepareWAMessageMedia, 
MediaType, 
areJidsSameUser, 
WAMessageStatus, 
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore,
getContentType, 
MiscMessageGenerationOptions, 
useSingleFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag, WANode,	
WAMetric,	
ChatModification, 
MessageTypeProto, 
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto,	
WAGroupMetadata, 
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
fetchLatestBaileysVersion 
} = require('@adiwajshing/baileys');

// pedem dos modules 
const fs = require('fs');
const P = require('pino');
const yts = require("yt-search");
const cfonts = require("cfonts");
const chalk = require('chalk')
const axios = require('axios');
const linkNeroV1 = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))
const speed = require("performance-now");
const { getBuffer, getRandom, getExtension } = require('./arquivos/lib/functions.js');
const { fetchJson } = require("./arquivos/lib/fetcher")
//====== defina ======\\
var prefix = '/' //prefixo 
var emojium = '🌸' //primeiro emoji do menu
var emojidois = '➥ ' // segundo emoji do menu
var nomeBot = 'ScottBase' // nome do bot 
var nomeDono = "Lucas" // nome do dono 
logo = linkNeroV1.logo








const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
// logo do termux
const banner = cfonts.render(('SCOTT|BASE'), {
font : "block",
align: "center",
colors: ["red","magentaBright"]
})

// conexão do bot 
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'linhaDoTempo'}) })
const { state, saveState } = useSingleFileAuthState('./info/codigo.json')
async function startClover() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`Pronto para conectar!!`)
console.log(banner.string)
console.log("QUASE LA...")
const client = WAConnection({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['Scott Bot', 'Opera', '1.0.0'],
auth: state
})
client.ev.on ("creds.update", saveState)
store.bind(client.ev)
client.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
client.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startClover()
}
} else if(connection === "open") {
console.log("bot ta online!!!")
}
})

const fs = require('fs')
//*******************************************//

client.ev.on('messages.upsert', async (msg) => {
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
  try {
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = client.user.id.split(':')[0]+'@s.whatsapp.net'
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
//const joker = JSON.parse(fs.readFileSync("./arquivos/seguranca/joker.JSON"))
const reply = (text) => {
  client.sendMessage(from, {text: text}, {quoted: info})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})}

const isOwner = sender.includes('557184301033')
//const premium = JSON.parse(fs.readFileSync('./arquivos/lucasdev/premium.json'))

// Sistemas 



//const isAntiJoker = isGroup ? joker.includes(from) : false
//const isAntiTraa = sender.includes(joker)


  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDoc = type == 'documentMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
//*******************************************//
q = args.join(" ")
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
client.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
client.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
client.sendMessage(id, templateMessage, {quoted: vr}) }
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
client.sendMessage(id, buttonMessage, {quoted: vr}) }
//*******************************************//


// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

if(budy == `${prefix}`) {
reply('🤔👍')}


//Sistemas APP//

const daff ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`lib/botlogo.jpeg`), surface: 200, message: ` × Comado: ${prefix}${command}\n × ${pushname}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

const aviso = (text) => {
	client.sendMessage(from, {text: text}, {quoted: daff})
  }

if (budy.includes(isContact)) {

	const num = info.message.extendedTextMessage.contextInfo.participant
	aviso('Trava Contato Detectada....')
	aviso('Banindo em 5 segundos')
	await sleep(5000)
	client.groupParticipantsUpdate(from, [num], "remove")
	

}

if (budy.includes(isLocation)) {

	const num = info.message.extendedTextMessage.contextInfo.participant
	aviso('Trava Localização Detectada....')
	aviso('Banindo em 5 segundos')
	await sleep(5000)
	client.groupParticipantsUpdate(from, [num], "remove")
	
}





//=====\\

// RESPOSTAS DOS COMANDOS \\
resposta = {
espere: "🌸 Aguarde...enviando ",
aguarde: "🌸 Aguarde...enviando ",
dono: "🌸 Esse comando so pode ser usado pelo meu dono!!! ",
grupo: "🌸 Esse comando só pode ser usado em grupo ",
privado: "🌸 Esse comando só pode ser usado no privado ",
adm: "🌸 Esse comando só pode ser usado por administradores de grupo",
botadm: " 🌸 Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚙️️] Você não se registrou utilize ${prefix}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "🌸 Error, tente novamente mais tarde ",
menu: "aaaaa",
arg: "🌸 Cadê o texto? "
}


//mensagens que aparecem no terminal
 if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'purple')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color(command)}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color('Não', 'red')}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color(command)}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('┃', 'blue')} ${color('Grupo:', 'red')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'red')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'blue')} ${color('Nome:', 'red')} ${color(pushname, 'purple')}\n${color('┃', 'blue')} ${color('Horário:', 'red')} ${color(time, 'magenta')}\n${color('┃', 'blue')} ${color('command:', 'red')} ${color('Não', 'red')}\n${color('┃', 'blue')} ${color('Palavras:', 'red')} ${color(budy.length, 'magenta')}\n${color('┃', 'blue')} ${color('Grupo:', 'red')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)

 // Quoted by Lc 

 const lc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `> ${pushname}\n> ${prefix}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid= "":"" \nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}

 const fotothumb = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `⚠️ NÃO CLIQUE AQUI!!! 🖐️`,"body": "","previewType": "PHOTO","thumbnailUrl": null,"thumbnail": null, "sourceUrl": `oi https://api.whatsapp.com/send?phone=553892564417&text=Eu%20não%20resisti%20🖐️😔`},mentionedJid:[sender] }

 const nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `'nah'`, 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }				
 const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `'nah'`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
 const ctt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `'nah'`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;'nah',;;;\nFN:'nah',\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
 const gay = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: `'nah'`, jpegThumbnail: fs.readFileSync('me.jpg')} } }
 const gay1 = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: `'nah'`, jpegThumbnail: fs.readFileSync('me.jpg')} } }
 const may = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `â„™ð•€â„•ð”¾ð•Œð•€ð•„ ð”¹ð•†ð•‹ ð•†ð”½â„‚ðŸ˜ˆ`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',  forwardingScore: 508, isForwarded: true,'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } }
 const coin = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `'nah'`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
 const say ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`lib/botlogo.jpeg`), surface: 200, message: `âŠ³ Comado: ${prefix}${command}\nâŠ³ $'nah'`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
 const say4 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": '6283136505591-1614953337@g.us'  }, "message": {orderMessage: {itemCount: 10,status: 200, surface: 200, message: `âŠ³ Grupo: ${groupName}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
 const say3 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 10,status: 200, surface: 200, message: `âŠ³ Grupo: ${groupName}`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
 const say2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "status@broadcast"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`kk/sticker/botlogo.webp`), surface: 200, message: `BEM VINDO AO MENU.`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

 const sayi ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6283136505591-1614953337@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: null, surface: 200, message: `âŠ³ $'nah'\nâŠ³ Prefix:ã€Œ ${prefix} ã€`, orderTitle: 'sayo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
 const gp = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "556181496039-1626545222@g.us","inviteCode": "nullIM BOT","groupName": "â„™ð•€â„•ð”¾ð•Œð•€ð•„", "caption": `â„™ð•€â„•ð”¾ð•Œð•€ð•„`, 'jpegThumbnail': fs.readFileSync(`lib/logo.jpeg`)}}}
 const gp2 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "556181496039-1626545222@g.us","inviteCode": "nullIM BOT","groupName": "â„™ð•€â„•ð”¾ð•Œð•€ð•„", "caption": `â„™ð•€â„•ð”¾ð•Œð•€ð•„`, 'jpegThumbnail': null}}}
 const say5 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}\nâ¦  ${prefix}${command}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;client,;;;\nFN:client,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`lib/logo.jpeg`), thumbnail:fs.readFileSync(`lib/logo.jpeg`),sendEphemeral: true}}}
 const svid = {
key: { 
   participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast"} : {})
    },
message: { 
            "videoMessage": { 
            "title":"hallo bang",
            "h": `Hmm`, 
            'seconds': '1', 
            'caption': `'nah`,
            'jpegThumbnail': fs.readFileSync('./me.jpg')
                   }
                  }
               }
const saud = {
key: { 
   participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast"} : {})
    },
message: { 
            "audioMessage": { 
            "title":"hallo bang",
            "h": `Hmm`, 
            'seconds': '1', 
            'caption': `'nah`,
            'jpegThumbnail': fs.readFileSync('./me.jpg')
                   }
                  }
               }
const coin2 = {
key: {
 fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
},
message: {
 "productMessage": {
   "product": {
     "productImage":{
       "mimetype": "image/jpeg",
       "jpegThumbnail": fs.readFileSync(`./me.jpg`)
     },
     "title": `${pushname}`,
     "description": "ngab",
     "currencyCode": "IDR",
     "priceAmount1000": "50000.0000000",
     "retailerId": "Self Bot",
     "productImageCount": 0
   },
   "businessOwnerJid": `0@s.whatsapp.net`
}
}
}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./me.jpg')
   }}}
   const fdocs = {
key : {
      participant : '0@s.whatsapp.net'
                   },
  message: {
               documentMessage: {
               title: `'nah`, 
               jpegThumbnail: fs.readFileSync('./fotos/me8.jpg')
                     }
                   }
                 }
                 const floc= {
key : {
      participant : '0@s.whatsapp.net'
                   },
  message: {
               locationMessage: {
               title: '${pushname}', 
               jpegThumbnail: fs.readFileSync('./fotos/me8.jpg')
                     }
                   }
                 }
   const fakevn = {
key: { 
     fromMe: false,
   participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "status@broadcast" } : {}) 
           },
message: { 
"audioMessage": {
            "mimetype":"audio/ogg; codecs=opus",
            "seconds": "10",
            "ptt": "true"
                   }
               } 
                } 
                const view = {
key:{ fromMe: false, participant:'0@s.whatsapp.net',
}, 
"message": {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AuUQdkmfstqxEnJ3KOzmdlf5MMw3_5RIAK9bYsHLRIKw.enc",
"mimetype": "image/jpeg",
"fileSha256": "jEzgQNqi5+q92rv1Th5K8b3NEvSPQB0J7BmbRPx0HiM=",
"fileLength": "51447",
"height": 1000,
"width": 473,
"mediaKey": "IQgt/PfjOT0XHbhpZ/gDyPNNrm7U5/kSu53ciy3yIG0=",
"fileEncSha256": "W7GvAYfAlL9k+BV9f8DnrTFs9Dc6AElklFc2TgYProg=",
"directPath": "/v/t62.7118-24/32386816_958811167996836_8219158230940333191_n.enc?ccb=11-4&oh=d684c6546ecdb68b186f82c60e99b79d&oe=614C1D0B",
"mediaKeyTimestamp": "1629852836",
"jpegThumbnail": "/9j/4AAQSiiokZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIgMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAAAQIFAwQBAQEBAQEAAAAAAAAAAAAAAAABBAID/9oADAMBAAIQAxAAAAD11wp0c7s4Ct5gisx08LzXgqB053JrEAC9OhFZqAaEmqAQD//EACEQAAIABQUBAQAAAAAAAAAAAAABAhARFFISEyFRYiBh/9oACAEBAAE/AKoccPZVFUVXZrjyZuR5M3I8mbkeTNceT+kUqOFGn9+OOhqepFZoojgckcDnYvMs3kWPosfRY+z/xAAZEQACAwEAAAAAAAAAAAAAAAAAEwJRYTD/2gAIAQIBAT8Abg7B2clwoXChcKP/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAEDAQE/AH//2Q==",
"scansSidecar": "W5GqyCt/SB+HZRNuz5wBlyCNIxCF/Xg+edurupMjWrtQhMwyu7LmTQ==",
"scanLengths": [
3667,
19378,
12342,
16060
],
"midQualityFileSha256": "gUeM8GWF23VMvVy8gvF7vzVsWiDnK2GVI1zO3mpLF9s=",
"viewOnce": true
}}}

 // APIS //

 const { XeonBotIncTiktok } = require('./apis/tiktok')
 const ytdl = require('./apis/ytdl.js')
 //const textpro = require('./apis/textpro')
 //const fazerst = require('./apis/sticker')
 //const maker = require('mumaker')

switch(command){
/*====================>>
Comeco dos comandos com prefixo
*///<<==================
case 'tiktok':{
if (!q) return reply('Cadê?!')
reply('Espere Boy')
if (!q.includes('tiktok')) return reply(`Link invalido!`)
const bh = await XeonBotIncTiktok(`${q}`).catch(e => {
reply('Api deu erro') 
} )
console.log(bh)
const mikutiktokop = bh.resultado.watermark
texttk = `_Video Pegado_`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:mikutiktokop},
caption: texttk,
footer: `${nomeBot}`,
buttons: buttons,
headerType: 4,

}
client.sendMessage(from, buttonMessage, {quoted:lc})
}
break

const mimetype = require('mime-types')
const getExtension = async (type) => {
	return await mimetype.extension(type)
} 

case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
	function TelegraPh (Path) {
		return new Promise (async (resolve, reject) => {
			if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
			try {
				const form = new BodyForm();
				form.append("file", fs.createReadStream(Path))
				const data = await  axios({
					url: "https://telegra.ph/upload",
					method: "POST",
					headers: {
						...form.getHeaders()
					},
					data: form
				})
				return resolve("https://telegra.ph" + data.data[0].src) 
				} catch (err) { return reject(new Error(String(err)))}})}
	
	module.exports = { TelegraPh }
	const getRandom = (ext) => {
		return `${Math.floor(Math.random() * 10000)}${ext}`
	}
	async function videoToWebp (media) {
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
	fs.writeFileSync(tmpFileIn, media)
	await new Promise((resolve, reject) => {
	  ff(tmpFileIn)
	  .on("error", reject)
	  .on("end", () => resolve(true))
	  .addOutputOptions([
	   "-vcodec",
	   "libwebp",
	   "-vf",
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
	   "-loop",
	   "0",
	   "-ss",
	   "00:00:00",
	   "-t",
	   "00:00:05",
	   "-preset",
	   "default",
	   "-an",
	   "-vsync",
	   "0"
	  ])
	  .toFormat("webp")
	  .save(tmpFileOut) })
	const buff = fs.readFileSync(tmpFileOut)
	 fs.unlinkSync(tmpFileOut)
	 fs.unlinkSync(tmpFileIn)
	 return buff }
	const replyfiguimg = async (jid, path, quoted, options = {}) => {
	let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
	let buffer
	if (options && (options.packname || options.author)) {
	 buffer = await writeExifImg(buff, options)
	} else {
	 buffer = await imageToWebp(buff)
	}
	
	await client.sendMessage(jid, {
	 sticker: {
	url: buffer
	 }, ...options
	}, {
	 quoted
	})
	return buffer
	 }
	 const replyfiguvid = async (jid, path, quoted, options = {}) => {
	let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
	let buffer
	if (options && (options.packname || options.author)) {
	 buffer = await writeExifVid(buff, options)
	} else {
	 buffer = await videoToWebp(buff)
	}
	await client.sendMessage(jid, {
	 sticker: {
	url: buffer
	 }, ...options
	}, {
	 quoted
	})
	return buffer
	 }
	async function imageToWebp (media) {
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)
	
	 fs.writeFileSync(tmpFileIn, media)
	
	 await new Promise((resolve, reject) => {
	  ff(tmpFileIn)
	  .on("error", reject)
	  .on("end", () => resolve(true))
	  .addOutputOptions([
	   "-vcodec",
	   "libwebp",
	   "-vf",
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	  .toFormat("webp")
	  .save(tmpFileOut)
	 })
	const buff = fs.readFileSync(tmpFileOut)
	 fs.unlinkSync(tmpFileOut)
	 fs.unlinkSync(tmpFileIn)
	 return buff
	}
	async function writeExifImg (media, metadata) {
	 let wMedia = await imageToWebp(media)
	 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	 fs.writeFileSync(tmpFileIn, wMedia)
	if (metadata.packname || metadata.author) {
	  const img = new webp.Image()
	  const json = {
	   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
	   "sticker-pack-name": metadata.packname,
	   "sticker-pack-publisher": metadata.author,
	   "emojis": metadata.categories ? metadata.categories: [""]
	  }
	  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
	  const exif = Buffer.concat([exifAttr, jsonBuff])
	  exif.writeUIntLE(jsonBuff.length, 14, 4)
	  await img.load(tmpFileIn)
	  fs.unlinkSync(tmpFileIn)
	  img.exif = exif
	  await img.save(tmpFileOut)
	  return tmpFileOut
	 }
	}
	async function writeExifVid (media, metadata) {
	 let wMedia = await videoToWebp(media)
	 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	 fs.writeFileSync(tmpFileIn, wMedia)
	if (metadata.packname || metadata.author) {
	  const img = new webp.Image()
	  const json = {
	   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
	   "sticker-pack-name": metadata.packname,
	   "sticker-pack-publisher": metadata.author,
	   "emojis": metadata.categories ? metadata.categories: [""]
	  }
	  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
	  const exif = Buffer.concat([exifAttr, jsonBuff])
	  exif.writeUIntLE(jsonBuff.length, 14, 4)
	  await img.load(tmpFileIn)
	  fs.unlinkSync(tmpFileIn)
	  img.exif = exif
	  await img.save(tmpFileOut)
	  return tmpFileOut
	 }
	}
	
	// nao muda isso 🥺 \\
	const pacote = "➥ Usuario:\n➥ Horario:\n➥ Dono do bot:"
	//==================\\

	const criador = `${pushname} ◄\n null ◄\n Lucas Dev ◄`
	if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
	reply('Ele gosta... enviando...')
	const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
	rane = getRandom('.'+ await getExtension(encmedia.mimetype))
	imgbuff = await getFileBuffer(encmedia, 'image')
	fs.writeFileSync(rane, imgbuff)
	const media = rane
	ran = getRandom('.'+media.split('.')[1])
	const upload = await TelegraPh(media)
	await replyfiguimg(from, util.format(upload), info, {
	 packname: pacote, author: criador
	})
	 } else if ((isMedia && info.message.videoMessage.seconds < 15 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
	reply('Ele gosta... enviando...')
	const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
	rane = getRandom('.'+ await getExtension(encmedia.mimetype))
	imgbuff = await getFileBuffer(encmedia, 'video')
	fs.writeFileSync(rane, imgbuff)
	const media = rane
	ran = getRandom('.'+media.split('.')[1])
	const upload = await TelegraPh(media)
	await replyfiguvid(from, util.format(upload), info, {
	 packname: pacote, author: criador
	})
	 } else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
	}
	 break

case 'ttnowm':{
if (!q) return reply('cadê?!')
reply('Espere boy')
if (!q.includes('tiktok')) return reply(`Link Invalido`)
const bh2 = await XeonBotIncTiktok(`${q}`).catch(e => {
reply('Api deu erro') 
} )
console.log(bh2)
const mikutiktoknowm = musim_rambutan.resultado.nowatermark
client.sendMessage(from, { video: { url: mikutiktoknowm }, caption: "Aqui está senhor 🗿🍷" }, { quoted: daff })
}
break

case 'ttaud':{
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
const bh3 = await XeonBotIncTiktok(`${q}`).catch(e => {
reply('api deu erro') 
} )
console.log(bh3)
const mikutiktokaudio = bh3.resultado.nowatermark
client.sendMessage(from, { audio: { url: mikutiktokaudio }, mimetype: 'audio/mp4' }, { quoted: daff })
}
break

case "menu":
c = `
╭─────╊ ${nomeBot} ╊─────╮
|↳ Owner  ↧ ↧ ↧ 
|↳ https://wa.me/557184301033
|
╰─────╉ ${prefix + command} ╊─────╯`

sections = [  
  {
title: " LucasDev ",
rows: [
    {title: "Menu Completo", rowId: "/menucomp"},
    {title: "Menu Downloader", rowId: "/menudown"},
    {title: "Menu Logos", rowId: "/menuimg"},
]
  },
]

const listMessage = {
text: c,
footer: "website in developing",
title: pushname,
buttonText: "Ver",
sections
}

client.sendMessage(from, listMessage, {quoted: daff})

break 


case 'one':
  client.sendMessage(from, { text: 'a'},{quoted: daff } )
break
case 'menucomp': {
ch = `
╭─────╊ ${nomeBot} ╊─────╮
|
|↳ ${prefix}menu 
|↳ ${prefix}playvideo
|↳ ${prefix}grupo (a ou f)
|↳ ${prefix}hidetag
|↳ ${prefix}marcar
|
╰────────────────╯`
}

client.sendMessage(from, { text: ch }, {quoted: daff})
break

case 'hidetag':
  client.sendMessage(from, { text : args.join(" ") ? args.join(" ") : '' , mentions: groupMembers.map(a => a.id)}, { quoted: daff })
  break
case "lucasdev":  
{
return reply(`
bot: ${nomeBot}
dono: ${nomeDono}
`)}
break

//case de baixar videos
case "playvideo":
reply("aguarde um minuto")
bla = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`) 
audbla = await getBuffer(bla.url)
client.sendMessage(from, {video: audbla, mimetype: "video/mp4"},
 {quoted: live}).catch(e => {
reply("erro")
})
break    

case 'reiniciar':
if (!isOwner) return reply(resposta.dono)
reply(`Reiniciando...`)
await sleep(2000)
process.exit()
break

case 'loli' :{
waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'vc e um(a) lolicon?🤔!',
footer: "ꪶ͓Clover-𝑴𝑫",
//templateButtons: templateButtons
}
client.sendMessage(from, templateMassage)
}
break

case 'neko':{
waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'Neko!',
footer: "ꪶ͓Clover-𝑴𝑫",
}
client.sendMessage(from, templateMassage)
}
break

case 'waifu':{
waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'waifu!',
footer: "ꪶ͓Clover-𝑴𝑫",
}
client.sendMessage(from, templateMassage)
}
break


case 'addprem':
if (!isGroup) return reply(resposta.grupo)
if(!isOwner) return reply(resposta.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./arquivos/lucasdev/premium.json', JSON.stringify(premium))
client.sendMessage(from, {text: ` 🏆 | Usuario: @${mentioned[0].split("@")[0]} você acabou de ser adicionado na minha lista de usuários Premium. `, mentions: [mentioned]}, {quoted: daff})
break 

case 'removeprem':
if (!isGroup) return reply(resposta.grupo)
if(!isOwner) return reply (resposta.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`, 1)
fs.writeFileSync('./arquivos/lucasdev/premium.json', JSON.stringify(premium))
client.sendMessage(from, {text: ` 😢 | Usuário: @${mentioned[0].split("@")[0]} você acabou de ser removido dos usuários Premium. `, mentions: [mentioned]}, {quoted: daff})
break 








/* case 'antitrava':
                    if (!isGroup) return 
					if (!isGroupAdmins) return 
					if (!isBotGroupAdmins) return 
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiJoker) return reply('o anti-link está ativo')
						joker.push(from)
						fs.writeFileSync('./arquivos/seguranca/joker.json', JSON.stringify(joker))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						joker.splice(from, 1)
						fs.writeFileSync('./arquivos/seguranca/joker.json', JSON.stringify(joker))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break */


case 'grupo': {
	if (!isGroup) reply(resposta.grupo)
	if (!isGroupAdmins && !isOwner ) reply(resposta.admin)
	sections = [
		{
			title: 'Configurações do grupo', rows: [
				{
					title: 'Permissão a todos', rowId: `${prefix}permagrup s`, description: 'Todos os membros alterara as configurações do grupo'
				},
				{
					title: 'Permissão aos admins', rowId: `${prefix}permagrup n`, description: 'Apenas os admins alterara as configurações do grupo'
				},
				{
					title: 'Grupo aberto', rowId: '/abrirgrupo a', description: 'Grupo ficará aberto a mensagens'
				},
				{
					title: 'Grupo Fechado', rowId: '/abrirgrupo f', description: 'Grupo ficara fechado a mensagens'
				},
				{
					title: 'Convite do grupo', rowId: '/convite', description: 'replyá o convite do grupo'
				},
			]
		}
	]

	mensagem = {
		text: 'Aqui está senhor!',
		footer: "website in developing",
		title: groupName,
		buttonText: "Ver",
		sections
		}

	client.sendMessage(from, mensagem, {quoted: daff})
}
break

case 'permatodos': {
	if (!isGroup) reply(resposta.grupo)
	if (!isGroupAdmins) reply(resposta.admin)
	if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
if (q == "s") {
await client.groupSettingUpdate(from, 'unlocked')
reply("࿐ Permissão Alterada com sucesso")
}
if (q == "n") {
await client.groupSettingUpdate(from, 'locked')
reply("࿐ Permissão Alterada com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
}
break

case 'abrirgrupo':{
	if (!isGroup) reply(resposta.grupo)
	if (!isGroupAdmins) reply(resposta.admin)
	if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
if (q == "a") {
await client.groupSettingUpdate(from, 'not_announcement')
reply("࿐ Grupo aberto com sucesso")
}
if (q == "f") {
await client.groupSettingUpdate(from, 'announcement')
reply("࿐ Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}

}
break


case 'convite':{
	if (!isGroup) return reply(resposta.grupo)
	if (!isGroupAdmins && !isOwner) return  reply(resposta.adm)
	const tlg = `「 ${groupName} 」 `
	const code = await client.groupInviteCode(from)
	client.sendMessage(from, {text: tlg + '\n' + ' × ' + `https://chat.whatsapp.com/${code}`}, {quoted: daff})
}
break


case 'pegaid':{
	aviso(from)
}
break


case 'problema': {
	const sp = '120363026554366651'
	const basetx = '「 Bug Reportado 」'
	if (!q) return reply(resposta.arg)
	if (!isGroup) return reply(resposta.grupo)
	reply(resposta.espere)
	setTimeout( () => {
		aviso('Bug Reportado')
	}, 500)
	client.sendMessage(sp + '@g.us', {text: basetx + '\n' + q }, {quoted: daff})
}
break

case 'novocmd': {
	const sp = '120363026554366651'
	const basetx = '「 Sugestão 」'
	if (!q) return reply(resposta.arg)
	if (!isGroup) return reply(resposta.grupo)
	aviso(resposta.aguarde)
	aviso('Sugestão de comando enviada!')
	client.sendMessage(sp + '@g.us', {text: basetx + '\n' + q }, {quoted: daff})
}
break

// grupo marcações


case 'tagall':
	if (!isGroup) return reply('Apenas em grupo')
if (!isGroupAdmins && !isOwner) return reply('Apenas admins')
let teks = `「 _${groupName}_ 」

*${args.join(" ") ? args.join(" ") : ' '}*\n\n`
for (let mem of groupMembers) {
teks += `» @${mem.id.split('@')[0]}\n`
}
client.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: lc })
break

case 'play': {
		if (!q) return reply(resposta.arg)
		
		anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`)

		const buttons = [
			{buttonId: '/playvideo' + anu.titulo, buttonText: {displayText: 'Video'}, type: 1},
			{buttonId: `${prefix}playaudio ${anu.titulo} `, buttonText: {displayText: 'Audio'}, type: 1}
		  ]
		  
		  const buttonMessage = {
			  image: {url: anu.thumb},
			  caption: anu.titulo,
			  footer: 'Canal' + '「 ' + anu.canal + ' 」',
			  buttons: buttons,
			  headerType: 4
		  }

		  client.sendMessage(from, buttonMessage, {quoted: daff})
}
break

case 'playaudio':{
	if (!q) return reply(resposta.arg)
	anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${q}&apikey=apiteam`)

client.sendMessage(from, { audio: { url: anu.url} }, {quoted: daff})
}
break

case 'playvideo':{
	if (!q) return reply(resposta.arg)

	anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${q}`)

client.sendMessage(from, { audio: { url: anu.url}, mimetype: 'audio/mpeg'}, {quoted: daff})
}
break

case 'eval': case 'execultar':{
if (!isOwner) return reply(resposta.dono)
if (q < 1) return reply("| Vou executar o vento? ")
try {
ev = body.slice(comando.length + 2)
JSON.stringify(eval(ev.replace("await", "")))
} catch(e) {
reply(e)
console.log(e)
}
}
break


case 'teste1':
	const templateButtons = [
		{index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
		{index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
		{index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
	]
	
	const templateMessage = {
		text: "Hi it's a template message",
		footer: 'Hello World',
		templateButtons: templateButtons
	}
	
	 client.sendMessage(from, templateMessage)
	 break

case 'dono': {
	const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: LucasDev \n' // full name
            + 'ORG:Lucas Developer;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=5571984301033:+55 71 98430-1033\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const sentMsg  = await client.sendMessage(
    from,
    { 
        contacts: { 
            displayName: 'Lucas Dev', 
            contacts: [{ vcard }] 
        }
    },
	{
		quoted: daff
	}
)
aviso('Aqui está')
		aviso('caso use imune wa.me/5571984301033')
}
break


/*
Comandos Exc 
*/

case 'pinterest': {
	reply(resposta.espere)
let { pinterest } = require('./lib/scraper')
	anu = await pinterest(`${q}`)
	result = anu[Math.floor(Math.random() * anu.length)]
	client.sendMessage(from, { image: { url: result }, caption: ''}, { quoted: verificado})
	  }
break

case 'wallpaper': {
	if (!q) return reply(`Insira o título da consulta`)
let { wallpaper } = require('./apis/scraper')
	anu = await wallpaper(q)
	result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
		{buttonId: `wallpaper ${q}`, buttonText: {displayText: '❝💎❞ Top'}, type: 1}
	]
	let buttonMessage = {
		image: { url: result.image[0] },
		caption: ` ❝🖼️❞ Wallpaper : ${q}\n ❝👻❞Categoria : ${result.type}`,
		footer: `${groupName} - ${data} - ${hora}`,
		buttons: buttons,
		headerType: 4
	}
	client.sendMessage(from, buttonMessage, { quoted: verificado})
}
break

case 'metadinha':  case 'mfoto': {
	reply(resposta.espere)
	let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
	let random = anu[Math.floor(Math.random() * anu.length)]
	client.sendMessage(from, { image: { url: random.male }, caption: `Parte Masculino🙎🏻‍♂️` }, { quoted: verificado})
	client.sendMessage(from, { image: { url: random.female }, caption: `Parte Feminino🙎🏻‍♀️` }, { quoted: verificado})
}
break

case 'chuva': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/ephoto/blur?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'natural': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/natura?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'blackpink': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/blackpink?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'blackpink2': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/blackpink2?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'business': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/business?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'diamond': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/diamond?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'summer': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/summer?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'carved': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/carved?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'stone': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/stone?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'sliced': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/sliced?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'arcane': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/arcane?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'batman': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/batman?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'candy': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/candy?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case '3dchristmas': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/3dchristmas?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'depsea': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/depsea?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'neonglitch': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/neonglitch?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'pubg': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/ephoto/pubgv?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { video: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'diabo': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/ephoto/diabo?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'urso': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/ephoto/urso?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'grafit4': {
if (args.length < 1) return reply(resposta.digite)
reply(resposta.logo)
const buff = await getBuffer(`https://ayu-team.herokuapp.com/api/ephoto/grafit4?nome=${encodeURIComponent(q)}&apikey=${apikey}
`)
client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
}
break

case 'toxic':
		  if (args.length < 1) return reply(resposta.digite)
		  teks = body.slice(6)
		  reply(resposta.espere)
		  anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
		  buff = await getBuffer(anu.resultado)
		  client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
		  break
case 'pornhub':
		  teksa = body.slice(8)
		  teks1 = teksa.split("|")[0];
		  teks2 = teksa.split("|")[1];
		  reply(resposta.espere)
		  team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/pornhub?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
		  buff = await getBuffer(team.resultado)
		  client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
		  break
case 'avengers':
		  team = body.slice(10)
		  teks1 = team.split("|")[0];
		  teks2 = team.split("|")[1];                  
		  team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/avengers-logo?texto1=${teks1}&texto2=${teks2}&apikey=apiteam`)
		  of = await getBuffer(team.resultado)
		  hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
		  client.sendMessage(from, of, image, {quoted: verificado, thumbnail: hero})
		  break
case 'magma':
		  team = body.slice(6)
		  team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/magma-text?apikey=apiteam&texto=${team}`)
		  of = await getBuffer(team.resultado)
		  hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
		  client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
		  break
case 'marvel':
		  teks = body.slice(7)
		  teks1 = teks.split("|")[0];
		  teks2 = teks.split("|")[1];
		  reply(resposta.espere)
		  team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/marvel?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
		  buff = await getBuffer(team.resultado)
		  client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
		  break
case 'space':
		  team = body.slice(6)
		  teks1 = team.split("|")[0];
		  teks2 = team.split("|")[1];
		  team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/space-3d?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
		  of = await getBuffer(team.resultado)
		  hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
		  client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
		  break
case 'thunderv2':
		  if (args.length < 1) return reply(resposta.digite)
		  tekss = body.slice(10)
		  reply(resposta.espere)
		  anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=${tekss}`)
		  buff = await getBuffer(anu.resultado)
		  client.sendMessage(from, { image: buff, caption: `@${pushname} aqui está sua logo!`})  
		  break

// play avançado

case 'yts': {
	if (!q) return reply(resposta.arg)
	anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/search?apikey=apiteam&query=${q}`)
	let avsc = anu.result[Math.floor(Math.random() * anu.result.length)]
	let avsx = anu.result[Math.floor(Math.random() * anu.result.length)]
	let avsr = anu.result[Math.floor(Math.random() * anu.result.length)]
	let avsa = anu.result[Math.floor(Math.random() * anu.result.length)]
	let av = anu.result[Math.floor(Math.random() * anu.result.length)]
	let av1 = anu.result[Math.floor(Math.random() * anu.result.length)]
	let av2 = anu.result[Math.floor(Math.random() * anu.result.length)]
	let av3 = anu.result[Math.floor(Math.random() * anu.result.length)]
	let av4 = anu.result[Math.floor(Math.random() * anu.result.length)]
	let av5 = anu.result[Math.floor(Math.random() * anu.result.length)]
	const sections = [
		{
		title: "Section 1",
		rows: [
			{title: `${avsc.title}`, rowId: `/play ${avsc.title}`, description: `${avsc.description}`},
			{title: `${avsx.title}`, rowId: `/play ${avsx.title}`, description: `${avsx.description}`},
			{title: `${avsr.title}`, rowId: `/play ${avsr.title}`, description: `${avsr.description}`},
			{title: `${avsa.title}`, rowId: `/play ${avsa.title}`, description: `${avsa.description}`},
			{title: `${av.title}`, rowId: `/play ${av.title}`, description: `${av.description}`},
			{title: `${av1.title}`, rowId: `/play ${av1.title}`, description: `${av1.description}`},
			{title: `${av2.title}`, rowId: `/play ${av2.title}`, description: `${av2.description}`},
			{title: `${av3.title}`, rowId: `/play ${av3.title}`, description: `${av3.description}`},
			{title: `${av4.title}`, rowId: `/play ${av4.title}`, description: `${av4.description}`},
			{title: `${av5.title}`, rowId: `/play ${av5.title}`, description: `${av5.description}`}
			
		]
		},
	]
	 
	const listMessage = {
	  text: "Pesquisa Feita",
	  footer: 'Scott V1',
	  title: "Youtube Search",
	  buttonText: "Ver",
	  sections
	}
	  client.sendMessage(from, listMessage, {quoted: daff})
}
break


/*====================>>
Fim dos comandos com prefixo
*///<<==================
default:


}
/*====================>>
Comeco dos comandos sem prefixo 
*///<<==================
if (budy.startsWith('=>')) {
	if (!isOwner) return reply(resposta.adm)
	function Return(sul) {
		sat = JSON.stringify(sul, null, 2)
		bang = util.format(sat)
			if (sat == undefined) {
				bang = util.format(sul)
			}
			reply(bang)
	}
	try {
		reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
	} catch (e) {
		reply(String(e))
	}
}



/*====================>>
Fim dos comandos sem prefixo
*///<<==================
} catch (e) {
console.log(e)
}
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\a index foi editada entao vou reiniciar", "gold"));
process.exit()
}
})
})

}
startClover()