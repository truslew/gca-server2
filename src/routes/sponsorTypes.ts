import { Router } from 'express';
import SponsorTypeController from '../controllers/SponsorTypeController';

const router = Router();

router.get('/', SponsorTypeController.listAll);

export default router;
