import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Sponsor } from '../entity/Sponsor';

class SponsorController {
    static listAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(Sponsor);
        const users = await userRepository.find();

        res.json(users);
    };

    static getOneById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const userRepository = getRepository(Sponsor);
        try {
            const user = await userRepository.findOneOrFail(id);
            res.json(user);
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

        const userRepository = getRepository(Sponsor);

        const existing = await userRepository.findOne(sponsor.id);
        if (existing) {
            res.status(400).send('Exists');
            return;
        }

        try {
            const result = await userRepository.save(sponsor);
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

        const userRepository = getRepository(Sponsor);

        try {
            await userRepository.save(sponsor);
            const result = await userRepository.findOne(sponsor.id)
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.body;
        try {
            const userRepository = getRepository(Sponsor);

            await userRepository.delete(id);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };
}

export default SponsorController;
