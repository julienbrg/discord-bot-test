const { Client, Intents } = require("discord.js");
const ethers = require('ethers');
require('dotenv').config();
const key = process.env.DISCORD_BOT_TOKEN;

function getInfuraProvider() {
    const apiKey = {
        projectId: process.env.INFURA_PROJECT_ID,
        projectSecret: process.env.INFURA_PROJECT_SECRET
    };
    const provider = new ethers.providers.InfuraProvider(network=process.env.NETWORK, apiKey);
    return provider;
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const provider = getInfuraProvider();

client.on("ready", () => {
  console.log("Live");
  console.log(provider);
});

let prefix = "!";
client.on("messageCreate", (message) => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    if (message.content.startsWith(`${prefix}dance`)) {
        message.channel.send("Watch me!");
    } else
  
    if (message.content.startsWith(`${prefix}quote`)) {
        message.channel.send("\"Anything beautiful is worth getting hurt for.\" - Prince");
    } else
  
    if (message.content.startsWith(`${prefix}network`)) {
        message.channel.send( "You're connected to " + `${provider._network.name}`);
    }
});

client.login(key);