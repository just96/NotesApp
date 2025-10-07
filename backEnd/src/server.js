import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => console.log("LISTENING ON PORT", PORT));
