import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Receiver } from '../entity/Receiver';

class ReceiverController {
    static listAll = async (req: Request, res: Response) => {
        const repository = getRepository(Receiver);
        const receivers = await repository.find();
        res.json(receivers);
    };
}

export default ReceiverController;
