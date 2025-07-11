import express from "express";
import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter.js";

import { jobQueue } from "./src/queues/jobQueue.js";
import jobRoutes from "./src/routes/jobRoutes.js";

const app = express();
app.use(express.json());

// Setup Bull Board
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [new BullMQAdapter(jobQueue)],
  serverAdapter,
});

app.use("/admin/queues", serverAdapter.getRouter());
app.use("/api/jobs", jobRoutes);

// Your other routes...
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

export default app;
