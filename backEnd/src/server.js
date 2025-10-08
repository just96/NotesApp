import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// middleware - to parse JSON bodies: get access req.body
app.use(express.json());
app.use(rateLimiter);

// // simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

// Connection to Database before server on
connectDB().then(() => {
  app.listen(PORT, () => console.log("LISTENING ON PORT", PORT));
});
