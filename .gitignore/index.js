const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as §{client.user.tag}!`);
    client.user.setGame('Zenoxia | -help')
});

client.on('message', message => {
    if (message.content === '-ping') {
        message.channel.send('Pong!')
    }

    if (message.content === '-help') {
        message.channel.send("►ZENOXIA◄")
        message.channel.send("-help : Afficher l'aide")
        message.channel.send("-ping : Verifier la vitesse du bot")
        
    }
});

client.login('Mzg2ODQ3MzgyMzIwNzA5NjMz.DQmguQ.89dkG31fnQB8DSuMQiYMW7wgKIA');
