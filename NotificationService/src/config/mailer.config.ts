import nodemailer from 'nodemailer'
import { serverConfig } from '.';

const transporter = nodemailer.createTransport({
  host: serverConfig.SMTP_HOST,
  port: Number(serverConfig.SMTP_PORT) || 587,
  service: serverConfig.SMTP_SERVICE,
  auth: {
    user: serverConfig.SMTP_USER,
    pass: serverConfig.SMTP_PASS,
  },
});

export default transporter
