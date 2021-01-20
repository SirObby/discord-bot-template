const Discord = require('discord.js');
const client = new Discord.Client();
const configs = require('./config.json')

const command = require('./command.js')

client.on('ready', () => {
 
    console.log(`Logged in as ${client.user.tag}!`);
    command.init()
    
    if(configs.autostatus) {
        
        setInterval(function () {
            let status = configs.statuses[Math.floor(Math.random() * configs.statuses.length)]
            client.user.setActivity(status, {
                type: 'WATCHING'
            });
        }, 6000)

    }

});

client.on('message', message => {

    if (message.author.bot == true) return;
    if(message.content.startsWith(configs.prefix)) {
       command.exec(message, client);
       }

});

client.login(configs.token)
