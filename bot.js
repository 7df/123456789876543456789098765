const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDgwMzQ5MzA0MTYzMTM5NTg1.DmX0Cg.IWFGn9PBwuKiTj3RQ7vTXEjFLBc);
