import express, { Application } from 'express';

import { handleError404, handleError500 } from './shared/error.middleware';
import users from './users/users.router';
import auth from './auth/auth.router';

const app: Application = express();
app.use(express.json());

app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(handleError404);
app.use(handleError500);

const port = process.env.PORT || 3000;
app.listen(port, (): void => {
  console.log(`Listening on port ${port}...`);
});
