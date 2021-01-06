const configs = require('./configs.json')
let cache = []
let prefix = configs.prefix

exports.init = () => {

    console.log("Commands Initialized!")

}

exports.exec = (message, client) => {

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    try {

        const cmd = require(`./cmds/${command}.js`)

        if (configs.autoupdate) {

            delete require.cache[require.resolve(`./cmds/${command}.js`)];
            cmd.init(command)

        } else {

            if (!cache.includes(command)) {
                cache.push(command)
                cmd.init(command)

            }

        }

        cmd.execute(message, command, args, client)

    } catch (e) {

        console.log(e)

    }
}
