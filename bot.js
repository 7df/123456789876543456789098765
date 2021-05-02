const Discord = require('discord.js');
const client = new Discord.Client();






client.login(process.env.BOT_TOKEN);







client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by tnt');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
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








