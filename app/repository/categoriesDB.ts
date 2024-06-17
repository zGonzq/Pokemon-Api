import { Conexion } from "../DBConnect";
import { iCategorias } from "../interface/iCategories";
import mysql from "mysql2/promise"

export class categoriesRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    
    async getCategoriesById(id: number): Promise<iCategorias[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM categories WHERE IDcat = ?", [id]);
        return rows as iCategorias[];
    }
    
    async getCategoriesByName(name: string): Promise<iCategorias[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM categories WHERE category = ?", [name]);
        return rows as iCategorias[];
    }
    
    public async getAllCategories(): Promise<iCategorias[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM categories");
        return rows as iCategorias[];
    }

    async createCategories(categories: iCategorias): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO categories (IDcat, category) VALUES (?, ?)", [categories.IDcat, categories.category]);
        return rows as mysql.RowDataPacket[];
    }

    async updateCategories(categories: iCategorias): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE categories SET category = ? WHERE IDcat = ?", [categories.category, categories.IDcat]);
        return rows as mysql.RowDataPacket[];
    }
    
    async deleteCategories(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM categories WHERE IDcat = ?", [id]);
        return rows as mysql.RowDataPacket[];
    }
}
