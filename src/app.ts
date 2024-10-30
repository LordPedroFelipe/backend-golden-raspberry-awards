import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import routes from './routes/routes';
import { loadMoviesFromCSV } from './utils/csvReader';

const app = express();
app.use(express.json());

app.use('/api', routes);

createConnection()
  .then(async () => {
    if (process.env.NODE_ENV !== 'test') {
      await loadMoviesFromCSV('movielist.csv');
      console.log('Database initialized and CSV data loaded');
    } else {
      console.log('Test environment: Skipping CSV data load');
    }
  })
  .catch((error) => console.log(error));

export default app;