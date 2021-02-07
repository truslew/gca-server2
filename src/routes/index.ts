import { Router } from 'express';
import agreements from './agreements';
import bankAccounts from './bankAccounts';
import gifts from './gifts';
import receivers from './receivers';
import sponsors from './sponsors';
import sponsorTypes from './sponsorTypes';

const routes = Router();

routes.use('/sponsors', sponsors);
routes.use('/agreements', agreements);
routes.use('/sponsor-types', sponsorTypes);
routes.use('/receivers', receivers);
routes.use('/bank-accounts', bankAccounts);
routes.use('/gifts', gifts);

export default routes;
