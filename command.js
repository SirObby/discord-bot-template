const fs = require('fs');
const configs = require('./config.json');
exports.init = async () => {
    console.log("Command Handler has started!")
}

exports.exec = async (client, args, command, message) => {

    if (!message.content.startsWith(configs.prefix)) return

    const dir = await fs.promises.opendir(__dirname + "/cmds/");
    for await (const dirent of dir) {
        if (!dirent.isFile) return;
        if (dirent.name == command + ".js") {
            try {
                let cmd = require(`./cmds/${dirent.name}`)
                cmd.run(client, args, command, message)
            } catch (e) {
                console.log(e)
            }
        }
    }

    if (command == "reload") {
        if (message.author.id == configs.botowner) {
            if (args[0]) {
                delete require.cache[require.resolve(`./cmds/${args[0]}.js`)];
                message.channel.send(` Reloading command ${quote}${args[0]}${quote}`)
                console.log(`Reloading ${args[0]}`)
            }else {
                message.channel.send("Missing argument")
            }
        }
    }

}
