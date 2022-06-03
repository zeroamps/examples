import fs from 'fs';
import crypto from 'crypto';

const publicKey = fs.readFileSync('./public.pem');
const privateKey = fs.readFileSync('./private.pem');

function hashPassword(password: string, salt: string) {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
}

function verifyPassword(password: string, hash: string, salt: string) {
  return hash === hashPassword(password, salt);
}

function generateSalt() {
  return crypto.randomBytes(16).toString('hex');
}

export { publicKey, privateKey, hashPassword, verifyPassword, generateSalt };
