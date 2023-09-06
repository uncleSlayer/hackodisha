-- CreateEnum
CREATE TYPE "CartStatus" AS ENUM ('ALIVE', 'DEAD');

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "status" "CartStatus" NOT NULL DEFAULT 'ALIVE';
