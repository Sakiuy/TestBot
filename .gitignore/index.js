const Discord = require("discord.js");
const client = new Discord.Client();
var googlesearch = " ";

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
        message.channel.send("-ping : Repondre par un pong")
        message.channel.send("-avatar : mettre l'avatar du bot a son propre avatar")
        

    }

    if (message.content === '-avatar') {
        client.user.setAvatar(message.author.avatarURL);
        message.channel.send("L'avatar du bot va etre changé ...")
    }

    if (message.content === '-join') {
        VoiceChannel.join(message.author.VoiceChannel)
    }
    
    if (message.content === '-quit') {
        VoiceChannel.leave(message.author.VoiceChannel)
    }

    if (message.content === "-command1") {
        message.channel.send("Aucun effet n'est encore attribué a cette commande : 2 !", {
        tts: true
        })
        
    }

    if (message.content === "-command2") {
        message.channel.send("Aucun effet n'est encore attribué a cette commande : 2 !")

    }

    if (message.content === "-command3") {
        message.channel.send("Aucun effet n'est encore attribué a cette commande : 3 !")

    }

    if (message.content === "-command4") {
        message.channel.send("Aucun effet n'est encore attribué a cette commande : 4 !")

    }

    if (message.content === "-command5") {
        message.channel.send("Aucun effet n'est encore attribué a cette commande : 5 !")

    }


});


client.login('Mzg2ODQ3MzgyMzIwNzA5NjMz.DQmguQ.89dkG31fnQB8DSuMQiYMW7wgKIA');
