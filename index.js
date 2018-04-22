const Discord = require('discord.js');
const bot = new Discord.Client();
var servers = {};



// When the bot comes online the game will be with the current servers
bot.on("ready", function() {
    bot.user.setGame(`${bot.guilds.size} servers | _help`);
});

// Updates the bot's status if he joins a server
bot.on("guildCreate", guild => {
    bot.user.setGame(`${bot.guilds.size} servers | _help`);
});

/// Updates the bot's status if he leaves a servers
bot.on("guildDelete", guild => {
    bot.user.setGame(
        `${bot.guilds.size} servers | _help`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  const prefix = "_ ";
    client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
        
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



  if (message.content === (prefix + "serverinfo")) {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
     .setDescription("Server Information")
     .setColor("#15f153")
     .setThumbnail(sicon)
     .addField("Server Name", message.guild.name)
     .addField("Created On", message.guild.createdAt)
     .addField("Joined At", message.member.joinedAt)
     .addField("Members", message.guild.memberCount);

   return message.channel.send(serverembed);
 }

  if (message.content === (prefix + "say")) {
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(0x954D23)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}


    if (message.content === (prefix + "botinfo")) {

   let bicon = bot.user.displayAvatarURL;
   let botembed = new Discord.RichEmbed()
   .setDescription("Bot Informtaion")
   .setColor("#15f153")
   .setThumbnail(bicon)
   .addField("Bot Name", bot.user.username)
   .addField("Created On", bot.user.createdAt);

     return message.channel.send(botembed);
   }



   if (message.content === (prefix + "report")) {
   var reportchannel = bot.channels.get('435862363158085652');
             var reporteduser = message.mentions.users.first().id;
             var reportreason = message.content.split(' ').slice(3).join(' ');

             if (!message.channel.id == '435861980079849472') {
              return message.reply(`Please report someone in the \`reports\` channel!`);
             }

             if (message.author.id === reporteduser) {
                 return message.reply('You cant punish yourself :wink:')
             }

             if (message.mentions.users.size < 1 || message.mentions.users.size > 1) {
                 return message.reply('You need to mention someone to report him!')
             }

             reportchannel.send(`Maniak: ${message.author.tag}\nReported user: ${reporteduser}\nReason: ${reportreason}`);

             message.reply(`We got your report! Thanks :heart:`);
   }
    
     if (message.content === (prefix + "help")) {
   message.reply('שולח לך בפרטי נודר');
   message.author.send(`${prefix}serverinfo - info about the server\n\
_report - report someone for breaking the server rules
_botinfo - info about the bot
_moveall (room) (-mute - if you want) - move members - only staff
_say (text) - The bot says what you say`);
   }

  if (message.content === (prefix + "moveall")) {
  let isAdmin = message.member.roles.filterArray(role => {return role.name === 'Owner' || role.name === 'Move-all-er';}).length;
  if (isAdmin === 0){
    return;
  }
  if (message.content.indexOf(".moveall") > -1) {
    channelGetName = message.content.slice(9, 9999);
    findChannel = bot.channels.find('name', channelGetName);
    if (message.content.indexOf("-mute") > -1) {
      MoveMuteUsers(findChannel);
    } else{
      MoveUsers(findChannel);
    }
  }
}
});

function MoveUsers(findChannel){
  bot.channels.findAll('type', 'voice').forEach(channelInfo => {
    if (channelInfo.name.indexOf("AFK") > -1 ){
      console.log("afk");
    } else {
      channelInfo.members.array().forEach(memberNumber => {
        memberNumber.setVoiceChannel(findChannel);
        console.log('moving');
        });
    }
});
}

function MoveMuteUsers(findChannel){
  bot.channels.findAll('type', 'voice').forEach(channelInfo => {
    if (channelInfo.name.indexOf("AFK") > -1 ){
      console.log("afk");
    } else {
      channelInfo.members.array().forEach(memberNumber => {
        memberNumber.setVoiceChannel(findChannel);
        memberNumber.setMute(true, 'moveall');
        console.log('moving');
        });
    }
});
}


// * Move from specific channels.
// * ignore specific users.


client.login(process.env.BOT_TOKEN);
