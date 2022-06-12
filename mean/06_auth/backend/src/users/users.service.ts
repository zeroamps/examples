import { generateSalt, hashPassword } from '../auth/auth.util';
import { User } from './user.model';

const all: User[] = [
  {
    id: 1,
    username: 'bill',
    hash: '13cb074030c71f6febb07b4b9c5624214ee5af906db9b292f8f5188dec17588ddc8d1d5a7c5ea7cd42b96248accca1e4826dcbcd498d10a8ae824a9e2e53a5ca',
    salt: '981266cb2bcbd61f243dc36a5c33fa0b'
  },
  {
    id: 2,
    username: 'mark',
    hash: '13cb074030c71f6febb07b4b9c5624214ee5af906db9b292f8f5188dec17588ddc8d1d5a7c5ea7cd42b96248accca1e4826dcbcd498d10a8ae824a9e2e53a5ca',
    salt: '981266cb2bcbd61f243dc36a5c33fa0b'
  },
  {
    id: 3,
    username: 'john',
    hash: '13cb074030c71f6febb07b4b9c5624214ee5af906db9b292f8f5188dec17588ddc8d1d5a7c5ea7cd42b96248accca1e4826dcbcd498d10a8ae824a9e2e53a5ca',
    salt: '981266cb2bcbd61f243dc36a5c33fa0b'
  }
];

function find(username: string) {
  return all.find((u) => u.username === username);
}

function create(username: string, password: string) {
  const id = all.length > 0 ? all[all.length - 1].id + 1 : 1;
  const salt = generateSalt();
  const hash = hashPassword(password, salt);
  const user: User = { id: id, username, hash, salt };
  all.push(user);
  return user;
}

export default { all, find, create };
