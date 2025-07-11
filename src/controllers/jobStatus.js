import { jobQueue } from "../queues/jobQueue.js";

export const getJobStatus = async (req, res) => {
  try {
    const jobId = req.params.jobId;

    //get job by id
    const job = await jobQueue.getJob(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    //job state: completed, failed, waiying etc
    const state = await job.getState();

    // get job return value or failure reason if available
    const returnValue = job.returnValue || null;
    const failedReason = job.failedReason || null;

    res.json({
      jobId: job.id,
      state,
      data: job.data,
      returnValue,
      failedReason,
      attemptsMade: job.attemptsMade,
      timestamp: job.timestamp,
      finishedOn: job.finishedOn,
    });
  } catch (error) {
    console.error("Error fetching job status:", error);
    res.status(500).json({ message: "Server error" });
  }
};
