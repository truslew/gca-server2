import { Router } from 'express';
import sponsors from './sponsors';

const routes = Router();

routes.use('/sponsors', sponsors);

export default routes;
