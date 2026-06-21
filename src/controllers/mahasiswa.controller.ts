import { Request, Response } from "express";
import db from "../config/database";

export const getMahasiswa = async (
  req: Request,
  res: Response
) => {
  const [rows] = await db.query(
    "SELECT * FROM mahasiswa"
  );

  res.json({
    message: "Data mahasiswa berhasil diambil",
    data: rows,
  });
};

export const createMahasiswa = async (
  req: Request,
  res: Response
) => {
  const { nim, nama, prodi, angkatan } = req.body;

  await db.query(
    "INSERT INTO mahasiswa (nim, nama, prodi, angkatan) VALUES (?, ?, ?, ?)",
    [nim, nama, prodi, angkatan]
  );

  res.json({
    message: "Data mahasiswa berhasil ditambahkan",
  });
};

export const deleteMahasiswa = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  await db.query(
    "DELETE FROM mahasiswa WHERE id = ?",
    [id]
  );

  res.json({
    message: "Data mahasiswa berhasil dihapus",
  });
};

export const updateMahasiswa = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { nim, nama, prodi, angkatan } = req.body;

  await db.query(
    "UPDATE mahasiswa SET nim=?, nama=?, prodi=?, angkatan=? WHERE id=?",
    [nim, nama, prodi, angkatan, id]
  );

  res.json({
    message: "Data mahasiswa berhasil diupdate",
  });
};