
import mysql from 'mysql';

let config = {
    host    : process.env.HOST,
    user    : process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  };
console.log(
    config
)
export let db = mysql.createConnection(config);
