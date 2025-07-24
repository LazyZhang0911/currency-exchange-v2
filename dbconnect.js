import mysql from 'mysql';
export function createAServer() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "n3u3da!",
        database: "currency"})
    
        connection.connect((err) => {
        if (err) {
            console.error('Databse connection failed:', err);
            return;
        }
        console.log('Database connected successfully');
        });
        return connection;
    }