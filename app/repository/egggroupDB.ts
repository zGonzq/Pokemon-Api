import { Conexion } from "../DBConnect";
import { iEggGroup } from "../interface/iEggGroup";
import mysql from "mysql2/promise" 

export class egggroupRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    
    async getEggGroupById(id: number): Promise<mysql.RowDataPacket>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM egggroup WHERE IDegg = ?", [id]);
        return rows as mysql.RowDataPacket;
    }
    
    async getEggGroupByName(name: string): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM egggroup WHERE eggname = ?", [name]);
        return rows as mysql.RowDataPacket[];
    }
    
    public async getAllEggGroup(): Promise<iEggGroup[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM egggroup");
        return rows as iEggGroup[];
    }

    async createEggGroup(egggroup: iEggGroup): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO egggroup (IDegg, eggname) VALUES (?, ?)", [egggroup.IDegg, egggroup.eggname]);
        return rows as mysql.RowDataPacket[];
    }

    async updateEggGroup(egggroup: iEggGroup): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE egggroup SET eggname = ? WHERE IDegg = ?", [egggroup.eggname, egggroup.IDegg]);
        return rows as mysql.RowDataPacket[];
    }
    
    async deleteEggGroup(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM egggroup WHERE IDegg = ?", [id]);
        return rows as mysql.RowDataPacket[];
    }
}