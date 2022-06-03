import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

function validateBody(schema: Joi.ObjectSchema<object>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      const { details } = error as Joi.ValidationError;
      const message = details.map((i) => i.message).join(',');
      res.status(400).json({ error: message });
    }
  };
}

export { validateBody };
