import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1626720417494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'username',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'isAdmin',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
