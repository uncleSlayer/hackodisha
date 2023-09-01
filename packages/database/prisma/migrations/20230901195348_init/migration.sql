-- CreateEnum
CREATE TYPE "Role" AS ENUM ('VENDOR', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
