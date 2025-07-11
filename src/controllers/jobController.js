import { jobQueue } from "../queues/jobQueue.js";

export const createJob = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email address is required" });
    }

    const job = await jobQueue.add("sendWelcomeEmail", { email });

    return res.status(201).json({
      message: "Job added",
      jobId: job.id,
    });
  } catch (error) {
    console.error("Failed to add job", error);
    return res.status(500).json({ message: "Server error" });
  }
};
