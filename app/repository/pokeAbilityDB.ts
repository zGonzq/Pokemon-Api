import { Conexion } from "../DBConnect";
import { iPokeAbility } from "../interface/iPokeAbility";
import mysql from "mysql2/promise"

export class pokeAbilityRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    
    async getPokeAbilityById(id: number): Promise<mysql.RowDataPacket>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM `poke-ability` WHERE IDpokeability = ?", [id]);
        return rows as mysql.RowDataPacket;
    }
    
    async getPokeAbilityBySlot(slot: string): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM `poke-ability` WHERE slot = ?", [slot]);
        return rows as mysql.RowDataPacket[];
    }
    
    public async getAllPokeAbility(): Promise<iPokeAbility[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM `poke-ability`");
        return rows as iPokeAbility[];
    }

    async createPokeAbility(pokeability: iPokeAbility): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO `poke-ability` (IDability, slot, IDpoke) VALUES (?, ?, ?)", [pokeability.IDability, pokeability.slot, pokeability.IDpoke]);
        return rows as mysql.RowDataPacket[];
    }

    async updatePokeAbility(pokeability: iPokeAbility): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE `poke-ability` SET abilityname = ?, IDpoke = ? WHERE IDpokeability = ?", [pokeability.slot, pokeability.IDpoke, pokeability.IDability]);
        return rows as mysql.RowDataPacket[];
    }
    
    async deletePokeAbility(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM `poke-ability` WHERE IDability = ?", [id]);
        return rows as mysql.RowDataPacket[];
    }
}
