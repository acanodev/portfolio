const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
});

const adapter = new PrismaMariaDb({
  host: process.env.ADAPTER_HOST || "localhost", // your database host
  user: process.env.ADAPTER_USER || "root", // your database username
  password: "your_password", // your database password
  database: "your_database", // optional, your database name
});

const prisma = new PrismaClient({ adapter });

module.exports = {
  prisma,
};
