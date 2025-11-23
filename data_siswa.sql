CREATE DATABASE data_siswa;
USE data_siswa;

CREATE TABLE siswa (
  kode_siswa VARCHAR(50) PRIMARY KEY,
  nama_siswa VARCHAR(100) NOT NULL,
  alamat TEXT NOT NULL,
  tanggal_lahir DATE NOT NULL,
  jurusan VARCHAR(50) NOT NULL
);