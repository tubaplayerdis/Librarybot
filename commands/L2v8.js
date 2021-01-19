module.exports = {
    name: 'L2v8',
    description: "part of libray update",
    execute(message, args, Discord){
        const LibraryEmbed = new Discord.MessageEmbed()
        .setColor('#E5FF00')
        .setTitle('L2v8')
        .addFields(
            {name: 'Info', value: 'Funny video about cats and dogs'}
        )
        .setFooter('In discord watchable below')
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png')
        message.channel.send(LibraryEmbed);
        message.channel.send('https://www.youtube.com/watch?v=BkD2nN5275c')
    }

    
}