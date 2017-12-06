const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as §{client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '-ping') {
        msg.reply('Ping!')
    }
});

client.login('Mzg3OTU2NTUyNTUzOTg4MTA4.DQmAOg.abBvZBD2TdXOF5YVOIdbHtH4Stw');
