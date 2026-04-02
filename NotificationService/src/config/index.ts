// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number,
    REDIS_PORT:number
    REDIS_HOST:string,
    SMTP_HOST:string,
    SMTP_SERVICE:string,
     SMTP_PORT:string,
      SMTP_USER:string,
       SMTP_PASS:string,

}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
    SMTP_HOST: process.env.SMTP_HOST ||'',
    SMTP_SERVICE: process.env.SMTP_SERVICE ||'',
    SMTP_PORT: process.env.SMTP_PORT ||'',
    SMTP_USER: process.env.SMTP_USER ||'',
    SMTP_PASS: process.env.SMTP_PASS ||''
};
