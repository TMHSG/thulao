require("dotenv").config();
const sql = require("mssql");
const { Client } = require('pg');

const pgClient = new Client({
  user: process.env.USERPG,
  host: process.env.HOSTPG,
  database: process.env.DATABASEPG,
  password: process.env.PASSWORDPG,
  port: parseInt(process.env.PORTPG, 10),
  query_timeout: 0,

});


const config_eHospital_TMH = {
  server: process.env.SERVER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORTMS, 10),
  database: "eHospital_TMH",
  // driver: "msnodesqlv8", // Comment or remove this line
  options: {
    trustedConnection: true,
    encrypt: false,
    enableArithAbort: true,
  },
  requestTimeout: 0 
};

const config_Clinic_PK68 = {
  server: process.env.SERVER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORTMS, 10),
  database: "Clinic_PK68",
  // driver: "msnodesqlv8", // Comment or remove this line
  options: {
    trustedConnection: true,
    encrypt: false,
    enableArithAbort: true,
  },
  requestTimeout: 0 
};

const config_Clinic_PKQ7 = {
  server: process.env.SERVER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORTMS, 10),
  database: "Clinic_PKQ7",
  // driver: "msnodesqlv8", // Comment or remove this line
  options: {
    trustedConnection: true,
    encrypt: false,
    enableArithAbort: true,
  },
  requestTimeout: 0 
};

const config_Clinic_TMH = {
  server: process.env.SERVER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORTMS, 10),
  database: "Clinic_TMH",
  // driver: "msnodesqlv8", // Comment or remove this line
  options: {
    trustedConnection: true,
    encrypt: false,
    enableArithAbort: true,
  },
  requestTimeout: 0 
};

pgClient.connect()
.then(() => {
  console.log('Đã kết nối đến PostgreSQL ');
})
.catch(err => {
  console.error('Lỗi khi kết nối đến PostgreSQL:', err.stack);
});

const conn_eHospital_TMH = new sql.ConnectionPool(config_eHospital_TMH)
  .connect()
  .then((pool) => {
    console.log('Đã kết nối đến conn_eHospital_TMH ');
    return pool;
  });

const conn_Clinic_PKQ7 = new sql.ConnectionPool(config_Clinic_PKQ7)
  .connect()
  .then((pool) => {
    return pool;
  });

  const conn_Clinic_PK68 = new sql.ConnectionPool(config_Clinic_PK68)
  .connect()
  .then((pool) => {
    return pool;
  });

  const conn_Clinic_TMH = new sql.ConnectionPool(config_Clinic_TMH)
  .connect()
  .then((pool) => {
    return pool;
  });

module.exports = {
  pgClient: pgClient,
  conn_eHospital_TMH: conn_eHospital_TMH,
  conn_Clinic_PK68: conn_Clinic_PK68,
  conn_Clinic_PKQ7: conn_Clinic_PKQ7,
  conn_Clinic_TMH: conn_Clinic_TMH,
  sql: sql,
};
