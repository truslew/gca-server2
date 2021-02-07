import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Gift } from '../entity/Gift';

class GiftController {
    static listAll = async (req: Request, res: Response) => {
        const repository = getRepository(Gift);
        const gifts = await repository.find();
        res.json(gifts);
    };
}

export default GiftController;
