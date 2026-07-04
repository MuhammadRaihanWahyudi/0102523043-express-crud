import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { allowRoles } from "../middlewares/role.middleware";

// Memanggil fungsi controller dan upload middleware yang dibutuhkan
import { 
  getAllMahasiswa, 
  createMahasiswa, 
  updateMahasiswa, 
  deleteMahasiswa 
} from "../controllers/mahasiswa.controller";
import { uploadFotoMahasiswa } from "../middlewares/upload.middleware";

const router = Router();

// Semua role bisa melihat data mahasiswa (Admin, Operator, Viewer)
router.get("/", authMiddleware, allowRoles("admin", "operator", "viewer"), getAllMahasiswa);

// Hanya admin dan operator yang bisa menambah data
router.post("/", authMiddleware, allowRoles("admin", "operator"), uploadFotoMahasiswa.single("foto"), createMahasiswa);

// Hanya admin dan operator yang bisa mengubah data
router.put("/:id", authMiddleware, allowRoles("admin", "operator"), uploadFotoMahasiswa.single("foto"), updateMahasiswa);

// Hanya admin yang bisa menghapus data
router.delete("/:id", authMiddleware, allowRoles("admin"), deleteMahasiswa);

export default router;