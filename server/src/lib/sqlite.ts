import path from 'path';
import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

export const connectDB = async():  Promise<Database> => {
    const sqliteDB = await open({
        filename: path.join(__dirname, '../../sample.db'),
        driver: sqlite3.Database,
    }) 
    
    // create customer table to preview the data
    await sqliteDB.exec(`
        CREATE TABLE IF NOT EXISTS customer (
            id INTEGER PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            phone VARCHAR(50) NOT NULL
        )
    `)

    return sqliteDB
}
