import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { BankAccount } from '../entity/BankAccount';

class BankAccountController {
    static listAll = async (req: Request, res: Response) => {
        const repository = getRepository(BankAccount);
        const receivers = await repository.find();
        res.json(receivers);
    };
}

export default BankAccountController;
