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
        message.channel.send("-ping : Repondre par un pong")
        message.channel.send("-avatar : mettre l'avatar du bot a son propre avatar")
        message.channel.send("-join : Faire rejoindre le bot à votre salon vocal")
        message.channel.send("-quit : Faire quitter le bot de votre salon vocal")
        
    }

    if (message.content === '-test') {
        var toSplit = message.content.split(" ")
        message.channel.send(toSplit[0])
        message.channel.send(toSplit[1])
        message.channel.send(toSplit[2])
        
    }

    if (message.content === '-join') {
        const cID = message.member.voiceChannel;
        cID.join()
        .then(connection => console.log('Connected!'))
        .catch(console.error);
        message.channel.send('Le bot va rejoindre votre salon vocal .')
    }

    if (message.content === '-quit') {
        const cID = message.member.voiceChannel;
        cID.leave()
        .then(connection => console.log('Disconnected!'))
        .catch(console.error);
        message.channel.send('Le bot va quitter votre salon vocal .')
    }

    if (message.content === '-roles') {
        message.member.voiceChannel.leave()
        message.channel.send('Vos roles sonts : ')
        message.channel.send('En developpement !')
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
