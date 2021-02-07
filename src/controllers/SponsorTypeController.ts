import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { SponsorType } from '../entity/SponsorType';

class SponsorTypeController {
    static listAll = async (req: Request, res: Response) => {
        const repository = getRepository(SponsorType);
        const sponsorTypes = await repository.find();
        res.json(sponsorTypes);
    };
}

export default SponsorTypeController;
