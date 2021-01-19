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
     } else if (message.content.startsWith('&wierd1')){
            message.channel.send ('https://cdn.discordapp.com/attachments/629752300302237722/740366665962881024/video0.mp4')
        } else if (message.content.startsWith('&shutup')){
            message.channel.send ('https://cdn.discordapp.com/attachments/703855942055493652/739284997201985648/video0-36.mp4')
        } else if (message.content.startsWith('&wierd2')){
            message.channel.send ('https://cdn.discordapp.com/attachments/703855942055493652/736980424600846426/video0-9.mov')
        } else if (message.content.startsWith('&rickroll')){
            message.channel.send ('https://cdn.discordapp.com/attachments/703855942055493652/736846546104090654/Minecracft_wink.mp4')
        } else if (message.content.startsWith('&wierd3')){
            message.channel.send ('https://cdn.discordapp.com/attachments/724767300338712678/736088008893268048/video0.mp4')
        } else if (message.content.startsWith('&amazongo')){
            message.channel.send ('https://cdn.discordapp.com/attachments/717384499041665036/725224219134394428/amazon_go.mp4')
        } else if (message.content.startsWith('&NSFW1')){
            if (message.channel.nsfw) {
                message.channel.send('(warning this is DISTURBING),(warning this is NSFW!), https://media.discordapp.net/attachments/740191587149021204/742374616475107369/video0.mp4');
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('&NSFW2')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/738881181759701074/754464641744371873/video0.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } 
        
        
        


        
});

client.login('Token');
