/*
  Warnings:

  - You are about to drop the `Attestation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EnsName` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OffchainRevocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schema` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SchemaName` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Timestamp` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "NodeType" AS ENUM ('PSN', 'BSN', 'GP');

-- CreateEnum
CREATE TYPE "NodeStatus" AS ENUM ('INITIATED', 'VERIFIED', 'INVALID');

-- DropForeignKey
ALTER TABLE "Attestation" DROP CONSTRAINT "Attestation_schemaId_fkey";

-- DropForeignKey
ALTER TABLE "SchemaName" DROP CONSTRAINT "SchemaName_schemaId_fkey";

-- DropTable
DROP TABLE "Attestation";

-- DropTable
DROP TABLE "EnsName";

-- DropTable
DROP TABLE "OffchainRevocation";

-- DropTable
DROP TABLE "Schema";

-- DropTable
DROP TABLE "SchemaName";

-- DropTable
DROP TABLE "Timestamp";

-- CreateTable
CREATE TABLE "NodeEntry" (
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "callbackUrl" TEXT NOT NULL,
    "location" TEXT[],
    "industryCode" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "nodeType" "NodeType" NOT NULL,
    "status" "NodeStatus" NOT NULL,

    CONSTRAINT "NodeEntry_pkey" PRIMARY KEY ("uid")
);
