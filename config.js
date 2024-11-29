const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=suhailmd-2-0&repository=ghostarray263%2Fsuhailmd-2.0&branch=main&builder=dockerfile&instance_type=free&env%5BSESSION_ID%5D=SUHAIL_08_45_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgI&env%5BPREFIX%5D=.&env%5BMODE%5D=private&env%5BOWNER_NAME%5D=Wolf.Inc&env%5BOWNER_NUMBER%5D=263713328548&env%5BOPENAI_API_KEY%5D=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&env%5BMONGODB_URI%5D=mongodb%2Bsrv%3A%2F%2Fmohsin%3Amohsin%40cluster0.iauaztt.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority&env%5BPACK_NAME%5D=wolf_pack)"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="artykikypop@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/ghostarray263";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaxyElU6GcGIeqYRsj0V";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaxyElU6GcGIeqYRsj0V" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© WolfTech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713328548";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263713328548,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_45_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImx6ei9ZTWhjVllpL3NMaXhDcXRzaWRiVmk3VDJwZ0pEc21sVlNDRzE4SzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjUwYlhQNVlEUWMtUks3anhDbTR2T1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTAyMjAyMjctZGRkMC00NzM4LWIyZDgtMDJhN2U3ZDlhN2EwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE5MSxcbiAgICAgIDk1LFxuICAgICAgMjAyLFxuICAgICAgMjExLFxuICAgICAgMTU3LFxuICAgICAgMjM1LFxuICAgICAgMixcbiAgICAgIDEzNSxcbiAgICAgIDE5MixcbiAgICAgIDQ5LFxuICAgICAgMjMzLFxuICAgICAgNjMsXG4gICAgICAyMDksXG4gICAgICAxMTksXG4gICAgICA3MSxcbiAgICAgIDUxLFxuICAgICAgMjQ5LFxuICAgICAgNDUsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDE1NSxcbiAgICAgIDg2LFxuICAgICAgNjksXG4gICAgICAxNTQsXG4gICAgICA4OCxcbiAgICAgIDIwMyxcbiAgICAgIDIwOCxcbiAgICAgIDIyMixcbiAgICAgIDE1MixcbiAgICAgIDMsXG4gICAgICAyMTQsXG4gICAgICAyMDcsXG4gICAgICA4OSxcbiAgICAgIDE0NSxcbiAgICAgIDI1MyxcbiAgICAgIDM0LFxuICAgICAgMTA0LFxuICAgICAgOTAsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbjJwSmdIRUp2Ym9Mb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdLV1pBVEhmNVdLQXZyc0VPRGtrK2o2bXlDY05zS3B6ai9ZOWxySHdKd2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1FzdDNxWWpQVENnTDdkd05EcUVyVVFEd3dRY1hjcGYxc1YwZmxvRzBUK3ppV1BNOTlIdlNkVXBZRkZFODNJUFI0cWIrSVlSQzYycThTMVNlKzhrQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHYwSU9OVHEybTlVM3JxbGhqWVdHd2VVcncwV25Ick1ITHBUZTlTSTBxOVdCOUU0Tnh1ZU0xMXJNN0FWT1pGK05jbFUwSTYxakc2V0kvYWxxR05uRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTMzMjg1NDg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYxMDk5MDU3NzY4NTc6NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzMyODU0ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjc4MzUxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1WblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVZtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGh3TG1zc1piTVJiaEdmU2ZZSDd2S1lnUWNWY3ZDc0piei9BRTJEbjBpUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTI5OTg0ODA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI3Nzk4ODUwMDRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaVWk5S25pTmpPYTJacFVzMTU3Mm1NVHNnVEFxM04zWHlVaS95SjVRMmZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5Mjk5ODQ4MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI3Nzk5NTU5NzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Wolf-XMD",
  ownername:process.env.OWNER_NAME|| "Wolf-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
