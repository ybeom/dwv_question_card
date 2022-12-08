import { cleanEnv, str, url, port, num } from 'envalid';

const envValidator = () => {
  cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'production'] }),
    BACKEND_PORT: port(),
    MONGODB_URL: url(),
    HASH_SALT: num(),
  });
};

export { envValidator };
