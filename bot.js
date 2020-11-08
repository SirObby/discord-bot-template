const Discord = require('discord.js');
const configs = require('./config.json');
const commandHandler = require('./command.js');

const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    commandHandler.init();
  });
  
client.on("message", async message => {

    if (message.author.bot) return;

    const args = message.content.slice(configs.prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    commandHandler.exec(client, args, command, message) 
});

client.login(configs.token)
