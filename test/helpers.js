const db = require(`../src/database/db.js`);
const server = require(`../src/server.js`);

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

async function request(pathname, options = {}) {
    const app = server.listen(0);
    const { port } = app.address();
    const url = new URL(pathname, `http://localhost:${port}`);
    options.headers = { ...options.headers, connection: "close" };
    const response = await fetch(url, options);
    app.close();
    const body = await response.text();
    const headers = Object.fromEntries(response.headers);
    return { status: response.status, body, headers };
}
  
function get_sid(headers) {
    const [sid_cookie] = headers["set-cookie"].split(".");
    const encoded_sid = sid_cookie.replace("sid=s%3A", "");
    return decodeURIComponent(encoded_sid);
}

module.exports = {
    reset,
    db,
    count,
    getLastId,
    request,
    get_sid
  };
