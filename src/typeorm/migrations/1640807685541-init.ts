import {MigrationInterface, QueryRunner} from "typeorm";

export class init1640807685541 implements MigrationInterface {
    name = 'init1640807685541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`email\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`user_role\` varchar(15) NOT NULL DEFAULT 'ghost',
                \`first_name\` varchar(255) NOT NULL,
                \`last_name\` varchar(255) NOT NULL,
                UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`product\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`product_name\` varchar(255) NOT NULL,
                \`description\` text NOT NULL,
                \`product_type\` varchar(255) NOT NULL,
                \`price\` float NOT NULL,
                \`amount\` int NOT NULL,
                UNIQUE INDEX \`IDX_aff16b2dbdb8fa56d29ed91e28\` (\`product_name\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX \`IDX_aff16b2dbdb8fa56d29ed91e28\` ON \`product\`
        `);
        await queryRunner.query(`
            DROP TABLE \`product\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    }

}
