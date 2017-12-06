const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, -help");
    console.log("Bot turned on")
    
})

bot.login("Mzg3OTU2NTUyNTUzOTg4MTA4.DQmAOg.abBvZBD2TdXOF5YVOIdbHtH4Stw");
