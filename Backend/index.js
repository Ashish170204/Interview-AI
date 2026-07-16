import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

import path from "path";

import cors from "cors";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();
const __dirname = path.resolve();

// middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({
   origin: [
      "http://localhost:5173",
      "https://interview-ai-1-rdsg.onrender.com"
   ],
   credentials: true
}));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()


app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);


// test the production..
app.get("/health",(req,res) => {
  res.status(200).json({ msg :"api is up for running"});
});


// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server running on address http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error(" Error starting the server", error);
  }
};

startServer();
