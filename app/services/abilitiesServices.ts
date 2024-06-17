import { abilitiesRepository } from "../repository/abilitiesDB";
import { iAbilities } from "../interface/iAbilities";
import mysql from "mysql2/promise"

export class abilitiesServices {
    db: abilitiesRepository = new abilitiesRepository();   

    public async getAllAbilities(): Promise<iAbilities[]> {
        return this.db.getAllAbilities();
    }

    public async addAbilities(abilities: iAbilities): Promise<mysql.RowDataPacket[]> {
        return this.db.createAbilities(abilities);
    }

    public async updateAbilities(abilities: iAbilities): Promise<mysql.RowDataPacket[]> {
        return this.db.updateAbilities(abilities);
    }

    public async deleteAbilities(id: number): Promise<mysql.RowDataPacket[]> {
        return this.db.deleteAbilities(id);
    }

    public async getAbilitiesById(id: number): Promise<iAbilities[]> {
        const result = await this.db.getAbilitiesById(id);
        return result;
    }

    public async getAbilitiesByName(name: string): Promise<mysql.RowDataPacket[]> {
        const result = await this.db.getAbilitiesByName(name);
        return result;
    }
}