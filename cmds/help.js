const Discord = require('discord.js');
const fs = require('fs');

exports.command = async (client, args, command, message) => {

    let commands = [];

    let cmds;
    commands.push("reload" + "\n")
    
    const dir = await fs.promises.opendir(__dirname);
    for await (const dirent of dir) {
        if (!dirent.isFile) return;
        commands.push(dirent.name.replace(".js",'') + "\n")
    }

    commands.forEach(element => {
        cmds = cmds + element
    });

    const embed = new Discord.MessageEmbed()

        .setTitle('Help Command')

        .setColor(0x7289da)

        .setDescription('Available Commands: \n' + cmds.replace("undefined",''))

    message.channel.send(embed);


}
