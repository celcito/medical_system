import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBirthdate1717438258196 implements MigrationInterface {
    name = 'AddBirthdate1717438258196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`email\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`timestamp\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`birthDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`firstName\` \`firstName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`lastName\` \`lastName\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`birthDate\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`timestamp\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`email\` ON \`user\` (\`email\`)`);
    }

}
