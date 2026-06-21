import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import mahasiswaRoutes from "./routes/mahasiswa.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend Express Berjalan",
  });
});

app.use("/api/mahasiswa", mahasiswaRoutes);

export default app;