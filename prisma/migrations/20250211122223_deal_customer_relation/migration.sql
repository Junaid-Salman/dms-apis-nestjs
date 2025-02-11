/*
  Warnings:

  - You are about to drop the column `dealId` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Deal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `Deal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_dealId_fkey";

-- DropIndex
DROP INDEX "Customer_dealId_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "dealId";

-- AlterTable
ALTER TABLE "Deal" ADD COLUMN     "customerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Deal_customerId_key" ON "Deal"("customerId");

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
