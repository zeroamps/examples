import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, (): void => {
  console.log(`Listening on port ${port}...`);
});
