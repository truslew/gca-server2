import { Router } from 'express';
import SponsorController from '../controllers/SponsorController';

const router = Router();

//Get all users
router.get('/', SponsorController.listAll);

// Get one user
router.get('/:id([0-9]+)', SponsorController.getOneById);

//Create a new user
router.post('/', SponsorController.create);

//Edit one user
router.patch('/:id([0-9]+)', SponsorController.edit);
router.put('/', SponsorController.edit);

//Delete one user
//router.delete('/:id([0-9]+)', UserController.deleteUser);

export default router;
