import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "GREG IS A LOSER!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};