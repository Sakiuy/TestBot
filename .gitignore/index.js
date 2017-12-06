const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as §{client.user.tag}!`);
});

client.on('message', message => {
    if (message.equals === '-ping') {
        message.channel.send('Pong!')
    }

    if (message.content === '-help') {
        message.channel.send("►ZENOXIA◄")
        message.channel.send("-help : Afficher l'aide")
        message.channel.send("-ping : Verifier la vitesse du bot")
        
    }
});

client.login('Mzg3OTU2NTUyNTUzOTg4MTA4.DQmAOg.abBvZBD2TdXOF5YVOIdbHtH4Stw');
