-- CreateEnum
CREATE TYPE "Jenis_Kelamin" AS ENUM ('L', 'P');

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "nim" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "jenis_kelamin" "Jenis_Kelamin" NOT NULL,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "Ruangan" (
    "id" INTEGER NOT NULL,
    "nama_ruangan" TEXT NOT NULL,

    CONSTRAINT "Ruangan_pkey" PRIMARY KEY ("id")
);
