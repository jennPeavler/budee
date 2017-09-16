module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/budee',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    }
  }

}
