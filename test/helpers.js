const db = require(`../src/database/db.js`);

function reset() {
    db.exec(/*sql*/ `
      DELETE FROM users;
      DELETE FROM sessions;
    `);
  }

function count(tableName){
    const countQuery = db.prepare(/*sql*/ `
    SELECT COUNT(*) FROM ${tableName};
  `);
  return countQuery.pluck().get()
}

function getLastId(tableName) {
    const query = db.prepare(`SELECT MAX(id) AS last_id FROM ${tableName}`);
    const result = query.get();
    return result.last_id;
  }

  module.exports = {
    reset,
    db,
    count,
    getLastId
  };