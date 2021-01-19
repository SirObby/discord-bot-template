const Discord = require('discord.js');
const client = new Discord.Client();
const configs = require('./config.json')

const command = require('./command.js')

client.on('ready', () => {
 
    console.log(`Logged in as ${client.user.tag}!`);
    command.init()
    
});

client.on('message', message => {

    if (message.author.bot == true) return;
    if(message.content.startsWith(configs.prefix)) {
       command.exec(message, client);
       }

});

client.login(configs.token)
