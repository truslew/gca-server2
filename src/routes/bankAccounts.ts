import { Router } from 'express';
import BankAccountController from '../controllers/BankAccountController';

const router = Router();

router.get('/', BankAccountController.listAll);

export default router;
