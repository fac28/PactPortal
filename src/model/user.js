const db = require("../database/db.js");

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

const update_user = db.prepare(/*sql*/ `
  UPDATE users
  SET imageURL = $imageURL, bio = $bio
  WHERE id = $id
  RETURNING id
`);

function updateUser(imageURL, bio) {
  return update_user.get({  imageURL, bio });
}
const delete_user = db.prepare(/*sql*/ `
  DELETE FROM users WHERE id = $id
`);

function deleteUser(username) {
  return delete_user.run({ username });
}

module.exports = { createUser, updateUser, deleteUser, getUserByUsername };
