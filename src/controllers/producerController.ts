import { Request, Response } from 'express';
import { ProducerService } from '../services/producerService';

export class ProducerController {
  private producerService: ProducerService;

  constructor() {
    this.producerService = new ProducerService();
  }

  public getProducersWithInterval = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.producerService.getProducersWithInterval();

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };
}