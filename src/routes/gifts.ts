import { Router } from 'express';
import GiftController from '../controllers/GiftController';

const router = Router();

router.get('/', GiftController.listAll);

export default router;
