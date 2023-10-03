BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  hash TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  -- profile info below
  imageURL TEXT, --change this to a default image (dylan you choose)
  isWizard BOOLEAN,
  isAdmin BOOLEAN DEFAULT 0,
  isBanned BOOLEAN DEFAULT 0, --wont use til MVP made
  bio TEXT DEFAULT "You haven't added this yet"
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
