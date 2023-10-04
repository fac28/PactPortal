const db = require("../database/db.js");
const { removeSessionByUserId } = require("./session.js");

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (username, hash, imageURL, isWizard, bio)
  VALUES ($username, $hash, $imageURL, $isWizard, $bio)
  RETURNING id
`);

function createUser(username, hash, imageURL, isWizard, bio) {
  return insert_user.get({ username, hash, imageURL, isWizard, bio });
}

const select_user_by_username = db.prepare(/*sql*/ `
  SELECT id, username, hash, created_at, imageURL, isWizard, isAdmin, isBanned, bio FROM users WHERE username = ?
`);

function getUserByUsername(username) {
  return select_user_by_username.get(username);
}

const select_user_by_id = db.prepare(/*sql*/ `
  SELECT id, username, hash, created_at, imageURL, isWizard, isAdmin, isBanned, bio FROM users WHERE id = ?
`);

function getUserById(id) {
  return select_user_by_id.get(id);
}
const update_user = db.prepare(/*sql*/ `
  UPDATE users
  SET imageURL = $imageURL, bio = $bio
  WHERE id = $id
  RETURNING id
`);

function updateUser(id, imageURL, bio) {
  return update_user.get({ id, imageURL, bio });
}

const delete_user = db.prepare(/*sql*/ `
  DELETE FROM users WHERE id = $id
`);

function deleteUser(id) {
  console.log(`deleting user: ${id}`);
  removeSessionByUserId(id);
  return delete_user.run({ id });
}

module.exports = { createUser, updateUser, deleteUser, getUserByUsername,getUserById };
