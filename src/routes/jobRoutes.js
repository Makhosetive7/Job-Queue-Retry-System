import express from "express";
import { createJob } from "../controllers/jobController.js";
import { getJobStatus } from "../controllers/jobStatus.js";

const router = express.Router();

router.post("/createJobs", createJob);
router.get("/:id/status", getJobStatus);

export default router;
