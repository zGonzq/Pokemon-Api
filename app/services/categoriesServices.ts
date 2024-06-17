import { categoriesRepository } from "../repository/categoriesDB";
import { iCategorias } from "../interface/iCategories";
import mysql from "mysql2/promise"

export class categoriesServices {
    db: categoriesRepository = new categoriesRepository();   

    public async getAllCategories(): Promise<iCategorias[]> {
        return this.db.getAllCategories();
    }

    public async addCategories(categories: iCategorias): Promise<mysql.RowDataPacket[]> {
        return this.db.createCategories(categories);
    }

    public async updateCategories(categories: iCategorias): Promise<mysql.RowDataPacket[]> {
        return this.db.updateCategories(categories);
    }

    public async deleteCategories(id: number): Promise<mysql.RowDataPacket[]> {
        return this.db.deleteCategories(id);
    }

    public async getCategoriesById(id: number): Promise<iCategorias[]> {
        const result = await this.db.getCategoriesById(id);
        return result;
    }

    public async getCategoriesByName(name: string): Promise<iCategorias[]> {
        const result = await this.db.getCategoriesByName(name);
        return result;
    }
}