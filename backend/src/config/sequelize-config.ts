import { Sequelize } from '@sequelize/core';
import dotenv from 'dotenv';

dotenv.config();

// const dbUrl = process.env.INTERNAL_DB_URL || process.env.EXTERNAL_DB_URL

// export const sequelize = new Sequelize(process.env.EXTERNAL_DB_URL as string, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,  // Allow self-signed SSL certificates if needed
//     },
//   },
// });

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false, // You might need this depending on your setup
    },
  },
});

