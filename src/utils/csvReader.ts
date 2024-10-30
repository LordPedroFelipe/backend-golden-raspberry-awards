import csvParser from 'csv-parser';
import fs from 'fs';
import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

export const loadMoviesFromCSV = async (filePath: string): Promise<void> => {
  const movieRepository = getRepository(Movie);
  const movies: Movie[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser({ separator: ';' }))
      .on('data', (row) => {
        movies.push({
          title: row['title'],
          year: parseInt(row['year'], 10),
          producer: row['producers'],
          winner: row['winner'].toLowerCase() === 'yes',
        } as Movie);
      })
      .on('end', async () => {
        await movieRepository.save(movies);
        resolve();
      })
      .on('error', (error) => reject(error));
  });
};