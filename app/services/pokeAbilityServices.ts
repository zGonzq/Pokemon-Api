import { pokeAbilityRepository } from "../repository/pokeAbilityDB";
import { iPokeAbility } from "../interface/iPokeAbility";
import mysql from "mysql2/promise"

export class pokeAbilityServices {
    db: pokeAbilityRepository = new pokeAbilityRepository();   

    public async getAllPokeAbility(): Promise<iPokeAbility[]> {
        return this.db.getAllPokeAbility();
    }

    public async addPokeAbility(pokeAbility: iPokeAbility): Promise<mysql.RowDataPacket[]> {
        return this.db.createPokeAbility(pokeAbility);
    }

    public async updatePokeAbility(pokeAbility: iPokeAbility): Promise<mysql.RowDataPacket[]> {
        return this.db.updatePokeAbility(pokeAbility);
    }

    public async deletePokeAbility(id: number): Promise<mysql.RowDataPacket[]> {
        return this.db.deletePokeAbility(id);
    }

    public async getPokeAbilityById(id: number): Promise<mysql.RowDataPacket> {
        const result = await this.db.getPokeAbilityById(id);
        return result;
    }

    public async getPokeAbilityBySlot(slot: string): Promise<mysql.RowDataPacket[]> {
        const result = await this.db.getPokeAbilityBySlot(slot);
        return result;
    }

}
