import {MigrationInterface, QueryRunner} from "typeorm";

export class Cart1642959830892 implements MigrationInterface {
    name = 'Cart1642959830892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`order\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`status\` smallint NOT NULL,
                \`total_price\` float NOT NULL,
                \`buyer_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`order_item\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`price\` int NOT NULL,
                \`quantity\` int NOT NULL,
                \`discount\` int NOT NULL,
                \`product_id\` int NULL,
                \`order_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`cart_entity\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`product\` DROP COLUMN \`product_type\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`product\` DROP COLUMN \`amount\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`product\`
            ADD \`quantity\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`user_role\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`user_role\` enum ('ADMIN', 'SUPER_ADMIN', 'USER') NOT NULL DEFAULT 'USER'
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`address\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`address\` json NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`order\`
            ADD CONSTRAINT \`FK_8724877ec30a3aab629727b36ed\` FOREIGN KEY (\`buyer_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`order_item\`
            ADD CONSTRAINT \`FK_5e17c017aa3f5164cb2da5b1c6b\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE \`order_item\`
            ADD CONSTRAINT \`FK_e9674a6053adbaa1057848cddfa\` FOREIGN KEY (\`order_id\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`order_item\` DROP FOREIGN KEY \`FK_e9674a6053adbaa1057848cddfa\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`order_item\` DROP FOREIGN KEY \`FK_5e17c017aa3f5164cb2da5b1c6b\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_8724877ec30a3aab629727b36ed\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`address\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`address\` longtext COLLATE "utf8mb4_bin" NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`user_role\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`user_role\` varchar(15) NOT NULL DEFAULT '' ghost ''
        `);
        await queryRunner.query(`
            ALTER TABLE \`product\` DROP COLUMN \`quantity\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`product\`
            ADD \`amount\` int NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`product\`
            ADD \`product_type\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            DROP TABLE \`cart_entity\`
        `);
        await queryRunner.query(`
            DROP TABLE \`order_item\`
        `);
        await queryRunner.query(`
            DROP TABLE \`order\`
        `);
    }

}
