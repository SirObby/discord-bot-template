const Discord = require('discord.js');

exports.init = (command) => {
    console.log(`${command} has been initialised!`)
}

exports.execute = (message, command, args, client) => {

    message.channel.send('Pinging...').then (msg => {
        msg.edit(`Latency is: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);
    })

}
