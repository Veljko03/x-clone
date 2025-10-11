import express from "express";
import { ENV } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());
app.get("/", (req, res) => res.send("Hello from server"));

app.use("/api/users", userRoutes);
app.use("/api/posts", userRoutes);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});
const startServer = async () => {
  try {
    await connectDb();

    // listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () =>
        console.log("Server is up and running on PORT:", ENV.PORT)
      );
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
