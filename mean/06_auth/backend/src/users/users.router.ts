import express, { Request, Response } from 'express';

import { authorized } from '../auth/auth.middleware';
import users from '../users/users.service';

const router = express.Router();

router.get('/', authorized, (req: Request, res: Response) => {
  res.json(users.all);
});

export default router;
