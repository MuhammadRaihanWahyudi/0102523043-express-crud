import { Router } from "express";
import {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controllers/mahasiswa.controller";
import { uploadFotoMahasiswa } from "../middlewares/upload.middleware";

const router = Router();

// Route untuk mengambil data mahasiswa (termasuk search, filter, pagination)
router.get("/", getAllMahasiswa);

// Route tambah mahasiswa dengan middleware single upload untuk field bernama "foto"
router.post("/", uploadFotoMahasiswa.single("foto"), createMahasiswa);

// Route ubah mahasiswa dengan middleware single upload untuk field bernama "foto"
router.put("/:id", uploadFotoMahasiswa.single("foto"), updateMahasiswa);

// Route hapus mahasiswa
router.delete("/:id", deleteMahasiswa);

export default router;