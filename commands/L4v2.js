module.exports = {
    name: 'L4v2',
    description: "part of libray update",
    execute(message, args, Discord){
        const LibraryEmbed = new Discord.MessageEmbed()
        .setColor('#E5FF00')
        .setTitle('L4v2')
        .addFields(
            {name: 'Info', value: 'NSFW vid'}
        )
        .setFooter('Conformation below')
        .setImage('https://st.depositphotos.com/1915171/3368/v/600/depositphotos_33682077-stock-illustration-adults-only-content-sign-vector.jpg')
        message.channel.send(LibraryEmbed);
        message.channel.send('do you want to procced type *yL4v2 or *nL4v2')
    }

    
}