import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Sponsor } from '../entity/Sponsor';

class SponsorController {
    static listAll = async (req: Request, res: Response) => {
        const sponsorRepository = getRepository(Sponsor);
        const sponsor = await sponsorRepository.find();

        res.json(sponsor);
    };

    static getOneById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const sponsorRepository = getRepository(Sponsor);
        try {
            const sponsor = await sponsorRepository.findOneOrFail(id);
            res.json(sponsor);
        } catch (error) {
            res.status(400).send('User not found');
        }
    };

    static create = async (req: Request, res: Response) => {
        const sponsor = plainToClass(Sponsor, req.body);

        const errors = await validate(sponsor, { skipMissingProperties: false, forbidUnknownValues: true });
        if (errors.length > 0) {
            const error = errors.map(e => e.constraints);
            res.status(400).send(error);
            return;
        }

        const sponsorRepository = getRepository(Sponsor);

        const existing = await sponsorRepository.findOne(sponsor.id);
        if (existing) {
            res.status(400).send('Exists');
            return;
        }

        try {
            await sponsorRepository.save(sponsor);
            const result = await sponsorRepository.findOne(sponsor.id);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };

    static edit = async (req: Request, res: Response) => {
        const sponsor = plainToClass(Sponsor, req.body);

        const errors = await validate(sponsor, { skipMissingProperties: true });
        if (errors.length > 0) {
            const error = errors.map(e => e.constraints);
            res.status(400).send(error);
            return;
        }

        const sponsorRepository = getRepository(Sponsor);

        try {
            await sponsorRepository.save(sponsor);
            const result = await sponsorRepository.findOne(sponsor.id);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.body;
        try {
            const sponsorRepository = getRepository(Sponsor);
            await sponsorRepository.delete(id);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };
}

export default SponsorController;
