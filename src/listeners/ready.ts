import { Client, CommandInteractionOptionResolver } from "discord.js";
import { Commands } from "../commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        console.log(Commands);

        await client.application.commands.set(Commands);

        console.log(`${client.user.username} is online`);
    });
};