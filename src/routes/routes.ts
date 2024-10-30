import { Router } from 'express';
import { ProducerController } from '../controllers/producerController';

const router = Router();
const producerController = new ProducerController();

router.get('/producers', producerController.getProducersWithInterval);

export default router;