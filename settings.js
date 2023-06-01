const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V12', // ISI APIKEY LU
}

global.namabot = "FIN MD" // UBAH JADI NAMA LU
global.namaowner = "Fin Ofc" // NAMA OWNER
global.footer_text = "© Fin Ofc" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6281345407953'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.script = ("Chat Owner") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://saweria.co/Rimuru233" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/LJG0yttxW2s0vUpot1VHWI`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = true // BEBAS
global.autorespon = false // BEBAS
global.onlygrub = false // Bebas, kalo gua untuk mengurangi spam aja sih
// - \\
// PEMISAH \\
global.packname = '© Fin Md' //sticker wm ubah
global.author = 'Di Buat Oleh FIN OFC' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
