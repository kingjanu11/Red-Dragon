//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is ⫷⃞😻Dᵃ͢ʳᵏ Kɪɴɢ |Jᵃⁿ͟ᵘ🎀♥️:✬᭄🔥
My Creator is Jᵃⁿᵘ ʙᴏᴛ @²⁰²²🐱♥️` //Costomize Alive Message (```Hey There !```

```I'm online now 🎀♥️```

|| *😇මගෙ වැඩ ලබා ගැනීමට*  ```.menu```

|| ```😌contac me``` : http://Wa.me/+94788230710?text=_හායි.....🕊️♥️_බ්‍රොක්කාස්ට්_වලට_Add_නොකිරීමට_පොරොන්දු_වෙමි_🙃🌸

|| *_ඔබ එන්න සුලගෙ නැවතිලා...🕊️♥️_*

|| ```Jᵃⁿᵘ ʙᴏᴛ @²⁰²²🐱♥️```

            ||═════🌸═════||)

global.owner = ['+94788230710'] //Owner number in aive msg
global.premium = ['+94788230710'] //Owner Number info
global.ownernomer = '+94788230710' //Owner Number <<<

global.ownername = '⫷⃞😻Dᵃ͢ʳᵏ Kɪɴɢ |Jᵃⁿ͟ᵘ🎀♥️:✬᭄' //Owner Name
global.botname = 'Jᵃⁿᵘ ʙᴏᴛ @²⁰²²' //Bot Name

global.button = '🎀Facebook♥️' //Costomize A Button Name In Alive Message
global.btnurl = 'https://www.facebook.com/profile.php?id=100070412296277' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = 'Jᵃⁿᵘ ʙᴏᴛ @²⁰²²' //Bot Pacage Name
global.author = '⫷⃞😻Dᵃ͢ʳᵏ Kɪɴɢ |Jᵃⁿ͟ᵘ🎀♥️:✬᭄' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©_Jᵃⁿᵘ ʙᴏᴛ' //In list menu
global.chatbotpre = 'false'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
