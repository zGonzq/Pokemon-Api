import { iMoves } from '../interface/iMoves';

export class moves implements iMoves{
    IDmove: number = 0;
    movename: string = "";
    IDtype: number = 0;
    IDcat: number = 0;
    power: number = 0;
    accuracy: number = 0;
    PP: number = 0;
    effect: string = "";
}
