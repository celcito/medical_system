import { DataSource } from 'typeorm';

export const datasource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'celcito',
  synchronize: false,
  migrations: [__dirname+'/src/migrations/*.ts'],
  logging: process.env.NODE_ENV === 'development' ? true : false,
  entities: [`${__dirname}/src/users/*entity.ts`],
  migrationsTableName: 'migrations',
});


