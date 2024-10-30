import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

interface ProducerAward {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export class ProducerService {
  public async getProducersWithInterval(): Promise<{ min: ProducerAward[]; max: ProducerAward[] }> {
    const movieRepository = getRepository(Movie);

    const winners = await movieRepository
      .createQueryBuilder('movie')
      .where('movie.winner = :winner', { winner: true })
      .select(['movie.producer', 'movie.year'])
      .getRawMany();

    const producerAwards: Record<string, number[]> = {};

    // Agrupar vencedores por produtor
    winners.forEach((winner) => {
      const producer = winner.movie_producer;
      const year = winner.movie_year;

      if (!producerAwards[producer]) {
        producerAwards[producer] = [];
      }
      producerAwards[producer].push(year);
    });

    const intervals: ProducerAward[] = [];

    // Calcular intervalos entre prêmios para cada produtor
    for (const producer in producerAwards) {
      const years = producerAwards[producer].sort((a, b) => a - b);

      if (years.length > 1) {
        for (let i = 1; i < years.length; i++) {
          intervals.push({
            producer,
            interval: years[i] - years[i - 1],
            previousWin: years[i - 1],
            followingWin: years[i],
          });
        }
      }
    }

    // Encontrar os menores e maiores intervalos
    const minInterval = Math.min(...intervals.map((i) => i.interval));
    const maxInterval = Math.max(...intervals.map((i) => i.interval));

    // Agora, incluir todos os produtores que compartilham os menores e maiores intervalos
    const min = intervals.filter((i) => i.interval === minInterval);
    const max = intervals.filter((i) => i.interval === maxInterval);

    // Retornar a lista de produtores com os menores e maiores intervalos
    return { min, max };
  }
}
