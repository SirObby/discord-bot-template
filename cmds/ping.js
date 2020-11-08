const Discord = require('discord.js');

exports.run = async (client, args, command, message) => {

    const msg = await message.channel.send('Pinging...');

    msg.edit(`Latency is: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`);

}
