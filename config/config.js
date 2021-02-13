// module.exports = {
//     development: {
//         username: process.env.DB_USER,
//         password: 'jonesliddy77',
//         database: 'traveljournal_db',
//         port:3306,
//         host: "localhost",
//         dialect: 'mysql',
//     },
//     production: {
//         use_env_variable: 'JAWSDB_URL',
//         dialect: 'mysql',
//     },
// };
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'traveljournal_db',
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql',
    },
};