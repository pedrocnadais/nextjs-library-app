import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import { sequelize } from './config/sequelize-config';
// import { processBookSuggestions } from './scripts/processBooks';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);

// Sync models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
