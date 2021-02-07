import { Router } from 'express';
import SponsorController from '../controllers/SponsorController';

const router = Router();

router.get('/', SponsorController.listAll);

router.get('/:id(w+)', SponsorController.getOneById);

router.post('/', SponsorController.create);

router.patch('/:id(w+)', SponsorController.edit);
router.put('/', SponsorController.edit);

router.delete('/:id(w+)', SponsorController.delete);

export default router;
