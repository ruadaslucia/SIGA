var sqlite3 = require('sqlite3');

const DBSOURCE = 'siga.db';

let database = new sqlite3.Database(DBSOURCE, (errors) => {
    
    if(errors){
        console.error(errors.message);
    } else {
        console.log('Connected to the SQLite database.')
        createUsersTable();
    }

})


function createUsersTable(){
    let createTableSQL = `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text, 
        email text UNIQUE, 
        password text, 
        CONSTRAINT email_unique UNIQUE (email)
        )`;
        
    database.run(createTableSQL,
    (err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            createDummyUsers(database)
        }
    });  
}

function createDummyUsers(database){
    var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
    database.run(insert, ["admin","admin@example.com","admin123456"])
    database.run(insert, ["user","user@example.com","user123456"])
}

module.exports = database;