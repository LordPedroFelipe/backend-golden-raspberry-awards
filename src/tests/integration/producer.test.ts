import request from 'supertest';
import { Connection, createConnection } from 'typeorm';
import app from '../../app';
import { Movie } from '../../entities/Movie';
import { loadMoviesFromCSV } from './../../utils/csvReader';


let connection: Connection;

beforeAll(async () => {
  connection = await createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [Movie],
    synchronize: true,
    logging: false,
  });
  
  await loadMoviesFromCSV('movielist.csv');
});

afterAll(async () => {
  if (connection.isConnected) {
    await connection.close();
  }
});

describe('Teste de Integridade', () => {
  
  it('deve criar todas as tabelas definidas nas entidades', async () => {
    expect(connection.isConnected).toBe(true);

    const queryRunner = connection.createQueryRunner();
    const tables = await queryRunner.getTables(['movies']); 

    await queryRunner.release();

    expect(tables.length).toBeGreaterThan(0);
  });

  it('Deve retornar os produtores com intervalos min e max', async () => {
    const response = await request(app).get('/api/producers');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('min');
    expect(response.body).toHaveProperty('max');
    expect(response.body.min.length).toBeGreaterThan(0);
    expect(response.body.max.length).toBeGreaterThan(0);
  });
});