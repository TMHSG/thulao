const { Client } = require('pg');
require("dotenv").config();
// Cấu hình kết nối
const client = new Client({
  user: process.env.USERPGWP,
  host: process.env.HOSTPGWP,
  database: process.env.DATABASEPGWP,
  password: process.env.PASSWORDPGWP,
  port: process.env.PORTPGWP, 

});

// Kết nối với PostgreSQL
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // Thực hiện truy vấn
    return client.query('SELECT * FROM remuneration ORDER BY remuneration_id');
  })
  .then(res => {
    console.log('Query results:', res.rows);
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL database', err.stack);
  })
  .finally(() => {
    // Đóng kết nối
    client.end();
  });
