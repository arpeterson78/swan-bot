import { Command } from "./command";
import { Hello } from "./commands/hello";
import { GetCocktail } from "./commands/get-cocktail";

export const Commands: Command[] = [Hello, GetCocktail];
