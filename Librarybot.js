const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}





client.on("ready", () =>{
    console.log('Library bot is online');
    client.user.setActivity('Tubabot pog - use &help')
    

 });
 client.on("message", message => {
    if (message.author.bot) return false;

});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    


    if (command === 'ping'){
        message.channel.send('pong!')
     } else if (command === 'help'){
        client.commands.get('help').execute(message, args, Discord)
    } 
        
        
        


        
});

client.login('Nzg4ODQ3MTExNjAwOTk2NDMz.X9pdHw.xLE34lsdZDzKeWAIm-P4v8FTONg');