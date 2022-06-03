import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Joi from 'joi';

import { validateBody } from '../shared/validate.middleware';
import { privateKey, verifyPassword } from './auth.util';
import users from '../users/users.service';

const router = express.Router();

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

router.post('/login', validateBody(schema), (req: Request, res: Response) => {
  const user = users.find(req.body.username);
  if (!user) return res.sendStatus(401);
  if (!verifyPassword(req.body.password, user.hash, user.salt)) return res.sendStatus(401);
  res.json(jwt.sign({ sub: req.body.username }, privateKey, { algorithm: 'RS256', expiresIn: 60 }));
});

router.post('/signup', validateBody(schema), (req: Request, res: Response) => {
  let user = users.find(req.body.username);
  if (user) return res.sendStatus(400);
  user = users.create(req.body.username, req.body.password);
  if (!user) return res.sendStatus(400);
  res.json(jwt.sign({ sub: req.body.username }, privateKey, { algorithm: 'RS256', expiresIn: 60 }));
});

export default router;
