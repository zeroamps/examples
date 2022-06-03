import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'express-jwt';

function handleError404(req: Request, res: Response) {
  res.sendStatus(404);
}

function handleError500(err: unknown, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof UnauthorizedError) return res.sendStatus(401);
  console.log(err);
  res.sendStatus(500);
}

export { handleError404, handleError500 };
