import { typeRepository } from "../repository/typeDB";
import { iType } from "../interface/iType";
import mysql from "mysql2/promise"

export class typeServices {
    db: typeRepository = new typeRepository();   

    public async getAllType(): Promise<iType[]> {
        return this.db.getAllType();
    }

    public async addType(type: iType): Promise<mysql.RowDataPacket[]> {
        return this.db.createType(type);
    }

    public async updateType(type: iType): Promise<mysql.RowDataPacket[]> {
        return this.db.updateType(type);
    }

    public async deleteType(id: number): Promise<mysql.RowDataPacket[]> {
        return this.db.deleteType(id);
    }

    public async getTypeById(id: number): Promise<mysql.RowDataPacket> {
        const result = await this.db.getTypeById(id);
        return result;
    }

    public async getTypeByName(name: string): Promise<mysql.RowDataPacket[]> {
        const result = await this.db.getTypeByName(name);
        return result;
    }
}