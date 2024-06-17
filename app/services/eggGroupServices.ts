import { egggroupRepository } from "../repository/egggroupDB";
import { iEggGroup } from "../interface/iEggGroup";
import mysql from "mysql2/promise"

export class eggGroupServices {
    db: egggroupRepository = new egggroupRepository();   

    public async getAllEggGroup(): Promise<iEggGroup[]> {
        return this.db.getAllEggGroup();
    }

    public async addEggGroup(egggroup: iEggGroup): Promise<mysql.RowDataPacket[]> {
        return this.db.createEggGroup(egggroup);
    }

    public async updateEggGroup(egggroup: iEggGroup): Promise<mysql.RowDataPacket[]> {
        return this.db.updateEggGroup(egggroup);
    }

    public async deleteEggGroup(id: number): Promise<mysql.RowDataPacket[]> {
        return this.db.deleteEggGroup(id);
    }

    public async getEggGroupById(id: number): Promise<mysql.RowDataPacket> {
        const result = await this.db.getEggGroupById(id);
        return result;
    }

    public async getEggGroupByName(name: string): Promise<mysql.RowDataPacket[]> {
        const result = await this.db.getEggGroupByName(name);
        return result;
    }
}