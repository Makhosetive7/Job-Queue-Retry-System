// queues/jobQueue.js
import { Queue } from "bullmq";
import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const connection = createClient({ url: process.env.REDIS_URL });
await connection.connect();

export const jobQueue = new Queue("emailQueue", {
  connection,
});
