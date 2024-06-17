import { Conexion } from "../DBConnect";
import { iAbilities } from "../interface/iAbilities";
import mysql from "mysql2/promise"

export class abilitiesRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    
    async getAbilitiesById(id: number): Promise<iAbilities[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM abilities WHERE IDability = ?", [id]);
        return rows as iAbilities[];
    }
    
    async getAbilitiesByName(name: string): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM abilities WHERE abilityname = ?", [name]);
        return rows as mysql.RowDataPacket[];
    }
    
    public async getAllAbilities(): Promise<iAbilities[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM abilities");
        return rows as iAbilities[];
    }

    async createAbilities(abilities: iAbilities): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO abilities (IDability, abilityname, abilitydescript) VALUES (?, ?, ?)", [abilities.IDability, abilities.abilityname, abilities.abilitydescript]);
        return rows as mysql.RowDataPacket[];
    }

    async updateAbilities(abilities: iAbilities): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE abilities SET abilityname = ?, abilitydescript = ? WHERE IDability = ?", [abilities.abilityname, abilities.abilitydescript, abilities.IDability]);
        return rows as mysql.RowDataPacket[];
    }
    
    async deleteAbilities(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM abilities WHERE IDability = ?", [id]);
        return rows as mysql.RowDataPacket[];
    }
}