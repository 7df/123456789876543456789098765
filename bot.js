const Discord = require('discord.js');
const client = new Discord.Client();






client.login(process.env.BOT_TOKEN);







client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});




client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });


client.on('message', message => {
     if (message.content === "$help") {
message.author.send("** [❖═════اوامر البوت═══════❖]**" + `  **

❖ $ping : معرفت سرعة الاتصال
❖ $id : معلوماتك
❖ $colors : قائمة الالوان
❖ $color : اختيار اللون
❖ $avatar : صورتك
❖ $boteideter : مطور البوت
[❖═══════admins═══════❖]

❖ $help-admin

[❖═══════--------------------═══════❖]



**`);
    }
});     






















client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'welcome✋');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('🎽 | name :  ',`${member}`)
            .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
            .setImage('https://b.top4top.net/p_980agk0m1.jpg')
			.addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                    .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                   
                      .addField("Name:",`<@` + `${member.id}` + `>`, true)
                         
                                         .addField(' الـسيرفر', `${member.guild.name}`,true)
                                           
         .setFooter(`${member.guild.name}`)
            .setTimestamp()
       
          channel.sendEmbed(embed);
        });
        
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'سجلات')
        if (!channel) return;
        channel.send({embed : embed});
        })

		
		
		
		
		
		
		
		
		
		
		
		
client.on('message', message => {
      if (message.author.bot) return;
      var prefix ="$"
       if (message.content === prefix + "help-admin") {
        if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
       message.channel.send('**تم ارسال رسالة في الخاص**');
  
  
  
  
   message.author.sendMessage(`
   **
  [❖═════اومر ادمن═══════❖]

 ❖ $bc: للنشر لكل اعظاء السيرفر
 
 ❖ $mutec : اقلاق الجات
  
  ❖ $unmutec : تفتح الجات
  
  ❖ $cchat : مسح الجات
  
  ❖ $kick : طرد
  
  ❖ $ban : حظر

  ❖ $cr-colors : صنع جميع الوان

  ❖ $del-colors : حذف جميع الالوان



  **
  `);
  
      }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  client.on("message", msg => {
  if(msg.content === '$' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});





















client.on('message' , message => {
if (message.content === '$boteideter') {
         let embed = new Discord.RichEmbed()
.setImage('https://1.top4top.net/p_12397s1ay1.png')
      .addField("**تم تطوير وبرمجه البوت من قبل 🔧 **","** @TnT#5855**")
.setColor('#B101FC')
  message.author.sendEmbed(embed);
    }
});














client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('زق')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "انت",
        color: 0x06DF00,
        description: "الفاظك",
        footer: {
          text: "By TnT"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


































client.on('message', message => {
  if (message.content.startsWith('$max')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "max"));
 
 }
 });

client.on('ready', () => {
console.log("ALPHACODESS");
});



client.on('message', msg => {
  if (msg.content === '$max') {
    msg.reply('done');
  }
});




client.on('message', message => {
  if (message.content.startsWith('$king')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "kings"));
 
 }
 });

client.on('ready', () => {
console.log("ALPHACODESS");
});



client.on('message', msg => {
  if (msg.content === '$king') {
    msg.reply('done');
  }
});
  
















client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "By TnT"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


































client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mutec") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutec") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});






























client.on('message' , message => {
if (message.content === '$صورتي') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
.setColor('#B101FC')
  message.author.sendEmbed(embed);
    }
});

 




















client.on("message", message => {
              var prefix = "$";;
              if (message.content.startsWith(prefix + "cchat")) {
                  if(!message.channel.guild) return message.reply('**❌ ليس لديك رتبة ادمن **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**🚫  MANAGE_MESSAGES ليس لديك رتبة ادمن او بريم 🚫 **');
          var msg;
          msg = parseInt(); ///KillerFox AlphaCodes
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error); ///KillerFox AlphaCodes
        message.channel.sendMessage("", {embed: { ///KillerFox AlphaCodes
          title: "** ➡ تــم مسح الشات ⬅ **",
          color: 0x06DF00,
          footer: { ///KillerFox AlphaCodes
            
          }
        }}).then(msg => {msg.delete(10000)});
                            }
  
       
  });


































client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "pro");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})








client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "- Member");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})








var prefix = "$"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);//thekings

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");//thekings
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");//thekings

  message.guild.member(user).kick();//thekings

  const kickembed = new Discord.RichEmbed()//thekings
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()//thekings
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({//thekings
    embed : kickembed
  })//thekings
}
});
















































var prefix = "$"
client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});

