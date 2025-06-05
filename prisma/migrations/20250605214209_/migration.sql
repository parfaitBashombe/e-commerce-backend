/*
  Warnings:

  - You are about to drop the column `name` on the `vendors` table. All the data in the column will be lost.
  - Added the required column `password` to the `vendors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `vendors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vendors` DROP COLUMN `name`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `fullname` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `salt` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true;
