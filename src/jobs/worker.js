import { Worker } from "bullmq";
import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const connection = createClient({ url: process.env.REDIS_URL });
await connection.connect();

const emailWorker = new Worker("emailQueue", async (job) => {
  console.log(`Processing job ${job.id} for: ${job.data.email}`);

  // Simulate possible failure
  if (Math.random() < 0.3) throw new Error("Random failure");

  return { success: true };
}, {
  connection,
  attempts: 3,
  backoff: {
    type: "exponential",
    delay: 2000
  }
});

emailWorker.on("completed", job => {
  console.log(`Job ${job.id} completed`);
});

emailWorker.on("failed", (job, err) => {
  console.log(`Job ${job.id} failed after retries: ${err.message}`);
});
