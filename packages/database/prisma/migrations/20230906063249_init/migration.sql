/*
  Warnings:

  - The values [DUMMY,DUMMY2,DUMMY3] on the enum `ProductCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductCategory_new" AS ENUM ('Other', 'Sambalpuri_Saree', 'Banarasi_Saree', 'Silk_Saree', 'Kashmiri_Saree', 'Pashmina_Shawl', 'Khadi', 'Cotton', 'Silk_rug', 'Cotton_rug', 'Other_rug', 'Porcelain_HomeDecor', 'Metal_HomeDecor', 'Wooden_HomeDecor', 'Other_HomeDecor', 'Porcelain_Sculptures', 'Metal_Sculptures', 'Wooden_Sculptures', 'Other_Sculptures', 'Jewellery', 'Accessories', 'Utensils', 'Pottery');
ALTER TABLE "Product" ALTER COLUMN "category" TYPE "ProductCategory_new" USING ("category"::text::"ProductCategory_new");
ALTER TYPE "ProductCategory" RENAME TO "ProductCategory_old";
ALTER TYPE "ProductCategory_new" RENAME TO "ProductCategory";
DROP TYPE "ProductCategory_old";
COMMIT;
