const Pool = require("pg").Pool;

// A pool is just your pool of database connections. In this case it's just the one.

const pool = new Pool({
    user: "postgres",
    password: "CriminalScum2001",
    host: "localhost",
    port: 5432,
    database: "People"

})

module.exports = pool;