import { Client, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
require('dotenv').config();

const token: any = process.env.DISCORD_API_KEY;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);

client.login(token);