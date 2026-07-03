import { Request, Response } from "express";
import db from "../config/database";

export const getAllProdi = async (req: Request, res: Response) => {
  try {
    // Mengambil id dan nama prodi diurutkan berdasarkan abjad A-Z
    const [rows] = await db.query(
      "SELECT id, nama_prodi FROM prodi ORDER BY nama_prodi ASC"
    );

    res.json({
      message: "Data prodi berhasil diambil",
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};