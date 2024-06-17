import { movesRepository } from "../repository/movesDB";
import { iMoves } from "../interface/iMoves";
import mysql from "mysql2/promise"

export class movesServices {
    db: movesRepository = new movesRepository();   

    public async getAllMoves(): Promise<iMoves[]> {
        return this.db.getAllMoves();
    }

    public async addMoves(moves: iMoves): Promise<mysql.RowDataPacket[]> {
        return this.db.createMoves(moves);
    }

    public async updateMoves(moves: iMoves): Promise<mysql.RowDataPacket[]> {
        return this.db.updateMoves(moves);
    }

    public async deleteMoves(id: number): Promise<mysql.RowDataPacket[]> {
        return this.db.deleteMoves(id);
    }

    public async getMovesById(id: number): Promise<mysql.RowDataPacket> {
        const result = await this.db.getMovesById(id);
        return result;
    }

    public async getMovesByName(name: string): Promise<mysql.RowDataPacket[]> {
        const result = await this.db.getMovesByName(name);
        return result;
    }
}