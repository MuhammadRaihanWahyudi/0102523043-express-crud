import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import mahasiswaRoutes from "./routes/mahasiswa.route";
import prodiRoutes from "./routes/prodi.route";

dotenv.config();

const app = express();

// Konfigurasi CORS agar frontend Next.js (port 3001) bisa mengakses backend
app.use(cors({
  origin: "http://localhost:3000", // Ubah ke 3000 sesuai port jalannya Next.js kamu
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

// PENTING: Agar file foto di folder uploads bisa diakses langsung via URL oleh frontend
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/", (req, res) => {
  res.json({
    message: "Backend Express Berjalan",
  });
});

// Pendaftaran API Routes
app.use("/api/prodi", prodiRoutes);
app.use("/api/mahasiswa", mahasiswaRoutes);

export default app;