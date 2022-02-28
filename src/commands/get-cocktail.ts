import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";
const axios = require('axios');


export const GetCocktail: Command = {
    name: "get-cocktail",
    description: "Returns a random cocktail",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = 'Hello';
        const cocktail: any = await axios({
            method: 'get',
            url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        });

          console.log(cocktail);

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};