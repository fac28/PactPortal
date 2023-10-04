const test = require("node:test");
const assert = require("node:assert");
const { reset, count } = require("./helpers.js");
const { createUser, getUserByUsername } = require(`../src/model/user.js`);

test('can create a new user', () => {
    reset()
    const before = count("users")
    createUser('testuser', 'hashedPassword', 'image.jpg', 0, 'User bio');
    const after = count("users")
    assert.strictEqual(before, after-1); 
});

test('can retrieve a user by username', () => {
    reset(); // Reset the database before the test
    createUser('testuser', 'hashedPassword', 'image.jpg', 1, 'User bio');
    const user = getUserByUsername('testuser');
    assert.strictEqual(user.username, 'testuser');
    reset()
});

test('returns null when trying to retrieve a non-existent user', () => {
    reset(); // Reset the database before the test
    const user = getUserByUsername('nonexistentuser');
    assert.equal(user, null);
    reset()
});