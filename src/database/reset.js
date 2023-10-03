const seedDb = require("./seed.js");
const db = require("./db.js");

const clear_users = db.prepare("DELETE FROM users;");
const clear_sessions = db.prepare("DELETE FROM sessions;");

function resetDatabase() {
    clear_users.run(); // Clear the users table
    clear_sessions.run(); // Clear the sessions table
    seedDb(); 
}

//just keeping these to keep w existing functionality
clear_users.run();
clear_sessions.run(); 

module.exports = { resetDatabase };