const test = require("node:test");
const assert = require("node:assert");
const { reset, count, getLastId } = require("./helpers.js");
const { createUser } = require(`../src/model/user.js`);
const { createSession, getSession } = require(`../src/model/session.js`);


test("createSession can insert a new session", async () => {
    reset()

    const before = count("sessions")
    createUser('testuser', 'hashedPassword', 'image.jpg', 1, 'User bio');
    createSession(getLastId("sessions"))
    const after = count("sessions")
    assert.strictEqual(before, after-1); 

    reset()
});

test("getSession can retrieve an existing session", async () => {
    reset();
  
    // Create a user and session
    createUser('testuser', 'hashedPassword', 'image.jpg', 1, 'User bio');
    const userId = getLastId("sessions")
    const sessionId = createSession(userId);
  
    // Retrieve the session
    const session = getSession(sessionId);
  
    // Assert that the session exists
    assert.ok(session);
  
    reset();
  });