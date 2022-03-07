import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";
import { get } from "lodash";
const axios = require('axios');


export const GetCocktail: Command = {
    name: "get-cocktail",
    description: "Returns a random cocktail",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        let ingredientList: string = '';
        let content: any = await axios({
            method: 'get',
            url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        });

        const drinkName: string = content.data.drinks[0].strDrink;
        const drinkCategory: string = content.data.drinks[0].strCategory;
        const glassType: string = content.data.drinks[0].strGlass;
        const instructions: string = content.data.drinks[0].strInstructions;
        const drinkImage: string = content.data.drinks[0].strDrinkThumb;

        for (let i = 1; i < 16; i++) {
            const ingredient: string = get(content.data.drinks[0], [`strIngredient${i.toString()}`], null);
            let measurement = get(content.data.drinks[0], [`strMeasure${i.toString()}`], null);

            if (!ingredient) {
                break;
            }

            if (!measurement) {
                measurement = 'Add to taste.'
            }

            ingredientList = i === 1 ? ingredientList + `${ingredient} - ${measurement} \n` :
                ingredientList + `            ${ingredient} - ${measurement} \n`;
        }

        await interaction.followUp(
        `__**${drinkName}**__ - *${drinkCategory ?? null}*
        
        __Glass__ - ${glassType}
        __Instructions__ - ${instructions}
        ${drinkImage}
        __Ingredients__:
            ${ingredientList}
        `
        );
    }
};