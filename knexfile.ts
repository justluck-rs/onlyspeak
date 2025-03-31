import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg', // ou 'mysql2' ou 'sqlite3'
    connection: {
      host: 'localhost',
      port: 5432, // porta padrão do PostgreSQL
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
};

export default config; 