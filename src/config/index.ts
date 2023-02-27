import { config as dotenvLib } from 'dotenv';
import * as fs from 'fs';

const pathEnv = [
  `.env.${process.env.NODE_ENV}`,
  '.env',
];
const baseDir = process.env.PWD
const getPathEnv = () => {
  for (const path of pathEnv) {
    if (fs.existsSync(path)) {
      return path;
    }
    if (fs.existsSync(baseDir + path)) {
      return baseDir + path;
    }
  }
  return null;
}
const configDotenv: any = {
  path: getPathEnv(),
};
dotenvLib(configDotenv);
if (configDotenv.path) {
  console.log('++++ Load file env', configDotenv.path);
}

const configDefault = {
  basedir: baseDir,
  appdir: baseDir + 'src/',
  storagedir: baseDir + 'storage/',
  isProd: process.env.APP_ENV &&
    (process.env.APP_ENV.toLowerCase() === 'prod' ||
      process.env.APP_ENV.toLowerCase() === 'production')
    ? true : false,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs'
};

const config: any = Object.assign(configDefault, process.env);
export default config;
