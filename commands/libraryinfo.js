module.exports = {
    name: 'libraryinfo',
    description: "commandlist?",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('Library ifno')
        .setDescription('for info on each library')
        .addFields(

            {name: 'library-old', value: 'mix of funny vids/kinda NSFW ones'},
            {name: 'library 1', value: 'just wierd vids'},
            {name: 'library 2/3', value: 'just funny cat vids'},
            {name: 'library 4', value: 'NSFW vids'}
        )
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyY35Y2TBYJLEmflOL5XqZKiHGtZpKK8cEg&usqp=CAU')
        .setFooter('libraryinfo for Tubabot')
        message.channel.send(newEmbed);
    }

    
}