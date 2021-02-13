module.exports = {
    development: {
        username: process.env.DB_USER,
        password: 'jonesliddy77',
        database: 'traveljournal_db',
        port:3306,
        host: "localhost",
        dialect: 'mysql',
    },
    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql',
    },
};
