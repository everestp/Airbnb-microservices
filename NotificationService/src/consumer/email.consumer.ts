import { Job, Worker } from "bullmq";
import { NotificationDto } from "../dto/notification.dto";
import { MAILER_QUEUE } from "../queues/mail.queue";
import { getRedisConnObject } from "../config/redis.cofig";
import logger from "../config/logger.config";
import { MAILER_PAYLOAD } from "../produces/email.producer";
import { renderMailTemplate } from "../templates/templates.handler";
import { sendEmail } from "../service/mailer.service";


export const  setupMailerWorker = () =>{
const emailConsumer = new Worker<NotificationDto>(
  MAILER_QUEUE,
  async (job:Job)=>{
  if(job.name !== MAILER_PAYLOAD){
throw new Error("Invalid JOB name")
  }
  // call the service layer form here
  const payload = job.data;
  const emailContent = await renderMailTemplate(payload.templateId, payload.params)
  await sendEmail(payload.to , payload.subject , emailContent)
  logger.info(`Email sent to ${payload.to} with subject \n ${payload.subject}`)






  },{
    connection:getRedisConnObject()
  }
)

emailConsumer.on('failed',()=>{
  logger.error("Email Processing failed")
})
emailConsumer.on('completed',()=>{
  logger.info("Email Processing completed sucessfully")
})


}
