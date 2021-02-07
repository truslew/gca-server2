import { Router } from 'express';
import ReceiverController from '../controllers/RecieverController';

const router = Router();

router.get('/', ReceiverController.listAll);

export default router;
