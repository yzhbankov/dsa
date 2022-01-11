class Connection {
    constructor(options) {
        this.options = options;
    }
}

const cache = {};

function createDbConnection(options) {
    if (cache.connection) return cache.connection;

    cache.connection = new Connection(options);

    return cache.connection;
}


const dbConnection = createDbConnection('mysql');
const dbConnection2 = createDbConnection('mariadb');

console.log(dbConnection === dbConnection2);
