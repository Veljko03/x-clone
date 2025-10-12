import express from "express";
import { ENV } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentsRoutes from "./routes/comments.route.js";
import notificationRoutes from "./routes/nottification.route.js";

import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use(arcjetMiddleware);

await connectDb();

// basic route
app.get("/", (req, res) => res.send("Hello from server 🚀"));

// API routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/notifications", notificationRoutes);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

if (ENV.NODE_ENV !== "production") {
  app.listen(ENV.PORT, () =>
    console.log("Server is up and running on PORT:", ENV.PORT)
  );
}

// export for Vercel
export default app;
