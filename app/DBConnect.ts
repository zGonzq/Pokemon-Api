import mysql, { FieldPacket } from "mysql2/promise";

export class Conexion {
  public async connect(): Promise<mysql.Connection> {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "gonza123",
      database: "pokemon",
    });
    return connection;
  }
}