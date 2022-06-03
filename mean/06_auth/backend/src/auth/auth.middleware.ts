import { expressjwt } from 'express-jwt';
import { publicKey } from './auth.util';

const authorized = expressjwt({ secret: publicKey, algorithms: ['RS256'] });

export { authorized };
