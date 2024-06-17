import { iPokemon } from "../interface/iPokemon";

export class Pokemon implements iPokemon{
    IDpoke: number = 0;
    pokename: string = "";
    HP: number = 0;
    attack: number = 0;
    defense: number = 0;
    spattack: number = 0;
    spdefense: number = 0;
    speed: number = 0;
    dualtype: number = 0;
}