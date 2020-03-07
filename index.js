const fs = require('fs');
const Discord = require('discord.js');
const dotenv = require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(
    'mongodb://localhost/water_bot',
    { useNewUrlParser: true },
);

// Prefix to call bot, owner ID
const PREFIX = process.env.PREFIX;
const OWNER_ID = process.env.OWNER_ID;

// Create a Client instance with our bot token
const client = new Discord.Client();
client.commands = new Discord.Collection();

const command_files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Dynamically requires all commands
for (const file of command_files) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// When the bot is connected and ready, log to console
client.once('ready', () => {
    console.log('All revved up with no place to go');
    client.user.setActivity('Staying hydrated')

    // In Discord.js v12, things changed with repeating messages. This is the way now
    var generalChannel = client.channels.cache.get('685307424869187615')

    // Sends a message every 20 min
    client.setInterval(() => {
        // ID is hardcoded. TODO -> better solution?
        client.guilds.cache.get('685307423921405982').members.fetch()
            .then(fetchedGuild => {
                if (fetchedGuild.filter(member => member.presence.status === 'online').size > 0) {
                    generalChannel.send("Remember to drink water!");
                }
            })
    }, 1200000);
});

// Every time a message is sent anywhere the bot is present,
// this event will fire
client.on('message', async (msg) => {
    try {
        const content = msg.content;

        // Only continue if starts with prefix
        if (!content.startsWith(PREFIX)) {
            return;
        }

        // Don't look at message if from a bot
        if (msg.author.bot) return;

        // Parses command
        const parts = content.split(" ").map(s => s.trim()).filter(s => s);
        console.log(parts);
        const command_name = parts[1];

        // Get the requested command, if there is one.
        const command = client.commands.get(command_name)
        if (!command) {
            return;
        }

        // If this command is only for the bot owner, refuse
        // to execute it for any other user
        const author_is_bot_owner = msg.author.id === OWNER_ID;
        if (command.bot_owner_only && !author_is_bot_owner) {
            return await msg.channel.createMessage('Hey, only my owner can issue that command!');
        }

        const args = parts.slice(2);
        console.log("Args: " + args)

        await command.execute(msg, args);

    } catch (err) {
        console.warn('Error handling message create event');
        console.warn(err);
    }
});

client.on('error', err => {
   console.warn(err);
});

client.login(process.env.BOT_TOKEN);
