const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity('ONLINE', {type:'PLAYING'})
})

client.login(process.env.CLIENT_TOKEN);