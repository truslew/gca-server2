import { Router } from 'express';
import AgreementController from '../controllers/AgreementController';

const router = Router();

router.get('/', AgreementController.listAll);
router.get('/:id(w+)', AgreementController.getOneById);

router.post('/', AgreementController.create);

router.patch('/:id(w+)', AgreementController.edit);
router.put('/', AgreementController.edit);

router.delete('/:id(w+)', AgreementController.delete);

export default router;
