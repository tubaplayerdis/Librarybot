module.exports = {
    name: 'librarycommandlist',
    description: "commandlist?",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('INFO')
        .setDescription('info on Librarybot')
        .addFields(

            {name: 'Old library system vids', value: '1.wierd1, 2.wierd2, 3.wierd3, 4.rickroll, 5.amazongo, 6.NSFW1, 7.NSFW2'},
            {name: 'How to use new library system', value: 'how to use: L1=library 1 v3=video3. ex command, "*L1v3". Ten vids in all libraries'},
            {name: 'Libaries', value: 'L1,L2,L3,(nsfw)L4'},
            {name: 'Notes', value: 'on tenthvid relpacle 1 with capital I'}
        )
        .setImage('https://media.timeout.com/images/105628370/image.jpg')
        .setFooter('Info for Librarybot')
        message.channel.send(newEmbed);
    }

    
}
