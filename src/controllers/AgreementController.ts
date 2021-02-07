import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Agreement } from '../entity/Agreement';

class AgreementController {
    static listAll = async (req: Request, res: Response) => {
        const agreementRepository = getRepository(Agreement);
        const agreements = await agreementRepository.find();

        res.json(agreements);
    };

    static getOneById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const agreementRepository = getRepository(Agreement);
        try {
            const agreement = await agreementRepository.findOneOrFail(id);
            res.json(agreement);
        } catch (error) {
            res.status(400).send('Agreement not found');
        }
    };

    static getBySponsorId = async (req: Request, res: Response) => {
        const { id } = req.params;

        const agreementRepository = getRepository(Agreement);
        try {
            const agreements = await agreementRepository.find({ where: { sponsorId: id } });
            res.json(agreements);
        } catch (error) {
            res.status(400).send('Agreements not found');
        }
    };

    static create = async (req: Request, res: Response) => {
        const agreement = plainToClass(Agreement, req.body);

        const errors = await validate(agreement, { skipMissingProperties: false, forbidUnknownValues: true });
        if (errors.length > 0) {
            const error = errors.map(e => e.constraints);
            res.status(400).send(error);
            return;
        }

        const agreementRepository = getRepository(Agreement);

        const existing = await agreementRepository.findOne(agreement.id);
        if (existing) {
            res.status(400).send('Exists');
            return;
        }

        try {
            await agreementRepository.save(agreement);
            const result = await agreementRepository.findOneOrFail(agreement.id);
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };

    static edit = async (req: Request, res: Response) => {
        const agreement = plainToClass(Agreement, req.body);

        const errors = await validate(agreement, { skipMissingProperties: true });
        if (errors.length > 0) {
            const error = errors.map(e => e.constraints);
            res.status(400).send(error);
            return;
        }

        const agreementRepository = getRepository(Agreement);

        try {
            await agreementRepository.save(agreement);
            const result = await agreementRepository.findOne(agreement.id)
            res.json(result);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.body;
        try {
            const agreementRepository = getRepository(Agreement);
            await agreementRepository.delete(id);
        } catch (error) {
            res.status(400).send(error);
            return;
        }
    };
}

export default AgreementController;
