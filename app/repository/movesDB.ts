import { Conexion } from "../DBConnect";
import { iMoves } from "../interface/iMoves";
import mysql from "mysql2/promise"

export class movesRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    async getMovesById(id: number): Promise<mysql.RowDataPacket>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM moves WHERE IDmove = ?", [id]);
        return rows as mysql.RowDataPacket;
    }
    
    async getMovesByName(name: string): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM moves WHERE movename = ?", [name]);
        return rows as mysql.RowDataPacket[];
    }
    
    public async getAllMoves(): Promise<iMoves[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM moves");
        return rows as iMoves[];
    }

    async createMoves(moves: iMoves): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO moves (IDmove, movename, power, accuracy, PP, effect) VALUES (?, ?, ?, ?, ?, ?, ?)", [moves.IDmove, moves.movename, moves.power, moves.accuracy, moves.PP, moves.effect]);
        return rows as mysql.RowDataPacket[];
    }

    async updateMoves(moves: iMoves): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE moves SET movename = ?, power = ?, accuracy = ?, PP = ?, effect = ? WHERE IDmove = ?", [moves.movename, moves.power, moves.accuracy, moves.PP, moves.effect, moves.IDmove]);
        return rows as mysql.RowDataPacket[];
    }
    
    async deleteMoves(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM moves WHERE IDmove = ?", [id]);
        return rows as mysql.RowDataPacket[];
    }
}