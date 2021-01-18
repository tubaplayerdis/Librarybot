module.exports = {
    name: 'help',
    description: "for helping",
    execute(message, args, Discord){
        
        const helpembed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('help')
        .setDescription('developing')
        message.channel.send(helpembed)
    }

    
}