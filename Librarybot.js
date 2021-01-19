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
        } else if (command === 'info'){
        client.commands.get('librarycommandlist').execute(message, args, Discord)
        }  else if (command === 'help'){
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
        } else if (message.content.startsWith('*L1v1')){
            message.channel.send('https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755')
        } else if (message.content.startsWith('*L1v2')){
            message.channel.send('https://cdn.discordapp.com/attachments/717384499041665036/731649428150157362/Yandere_Dev_Viva_La_Vida.mp4')
        } else if (message.content.startsWith('*L1v3')){
            message.channel.send('https://cdn.discordapp.com/attachments/717384499041665036/739930648923472003/image0.jpg')
        } else if (message.content.startsWith('*L1v4')){
            message.channel.send('https://cdn.discordapp.com/attachments/738929450959503361/743942710297362472/video0.mp4')
        } else if (message.content.startsWith('*L1v5')){
            message.channel.send('https://cdn.discordapp.com/attachments/579937698039726081/740621521784930324/Renai_Circulation.mp4')
        } else if (message.content.startsWith('*L1v6')){
            message.channel.send('https://cdn.discordapp.com/attachments/717384185194479681/740685228972179596/video0_13.mov')
        } else if (message.content.startsWith('*L1v7')){
            message.channel.send('https://cdn.discordapp.com/attachments/740191587149021204/740295265000357995/image0.jpg')
        } else if (message.content.startsWith('*L1v8')){
            message.channel.send('https://cdn.discordapp.com/attachments/723195804906422362/729224124039430194/video0_21-2.mov')
        } else if (message.content.startsWith('*rickroll2')){
            message.channel.send('https://cdn.discordapp.com/attachments/745505740831064127/745634842347044934/why.mp4')
        } else if (message.content.startsWith('*L2v1')){
            client.commands.get('L2v1').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v2')){
            client.commands.get('L2v2').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v3')){
            client.commands.get('L2v3').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v4')){
            client.commands.get('L2v4').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v5')){
            client.commands.get('L2v5').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v6')){
            client.commands.get('L2v6').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v7')){
            client.commands.get('L2v7').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v8')){
            client.commands.get('L2v8').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v9')){
            client.commands.get('L2v9').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2vI0')){
            client.commands.get('L2v10').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v1')){
            client.commands.get('L3v1').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v2')){
            client.commands.get('L3v2').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v3')){
            client.commands.get('L3v3').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v4')){
            client.commands.get('L3v4').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v5')){
            client.commands.get('L3v5').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v6')){
            client.commands.get('L3v6').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v7')){
            client.commands.get('L3v7').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v8')){
            client.commands.get('L3v8').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v9')){
            client.commands.get('L3v9').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3vI0')){
            client.commands.get('L3v10').execute(message, args, Discord);
        } else if (command === 'libraryinfo'){
            client.commands.get('libraryinfo').execute(message, args, Discord);
        } else  if (command === 'nsfwcheck') {
            // You can get the Channel class (which contains the nsfw property) using the Message class.
            if (message.channel.nsfw) {
                message.channel.send("This channel is NSFW.");
            } else {
                message.channel.send("This channel is SFW.");
            }
        } else if (message.content.startsWith('*L4v1')){
            client.commands.get('L4v1').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v1')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/729051121133420564/774400257919680512/IcyDearIberianmole.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*L4v2')){
            client.commands.get('L4v2').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v2')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/667526139991818283/776592372409696256/VID-20201113-WA0006.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v2')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v3')){
            client.commands.get('L4v3').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v3')){
            if (message.channel.nsfw) {
                message.channel.send("https://media.discordapp.net/attachments/667526139991818283/779743958376775700/VID-20201121-WA0044.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v3')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v4')){
            client.commands.get('L4v4').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v4')){
            if (message.channel.nsfw) {
                message.channel.send("https://media.discordapp.net/attachments/667526139991818283/779852502324871188/VID_20201121_050437.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v4')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v5')){
            client.commands.get('L4v5').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v5')){
            if (message.channel.nsfw) {
                message.channel.send("https://media.discordapp.net/attachments/667559464383152140/776624959019155466/VID_20201113_071910.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v5')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v6')){
            client.commands.get('L4v6').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v6')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/745240109800095814/776213514603724800/video0.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v6')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v7')){
            client.commands.get('L4v7').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v7')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/742217561239978025/775210659541417994/VID-20201108-WA0021.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v7')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v8')){
            client.commands.get('L4v8').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v8')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/675162643895681073/777452631844061194/video0-5-1.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v8')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v9')){
            client.commands.get('L4v9').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v9')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/675162643895681073/777704335206252544/video0_72.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v9')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4vl0')){
            client.commands.get('L4v10').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4vl0')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/675162643895681073/778702801768939590/video0.mov");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4vl0')){
            message.channel.send('request succsesfully denied')
        } 
        
        
        


        
});

client.login('Token');
