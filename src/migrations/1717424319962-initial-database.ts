import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDatabase1717424319962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE  IF NOT EXISTS user (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL UNIQUE,
                firstName VARCHAR(255) NULL,
                lastName VARCHAR(255) NULL,
                password VARCHAR(255) NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user`);
    }

}
