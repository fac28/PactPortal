

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  hash TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  --profile info below
  image TEXT DEFAULT NULL, 
  isWizard BOOLEAN DEFAULT NULL, 
  isBanned BOOLEAN DEFAULT NULL,
  bio TEXT DEFAULT 'You haven''t added this information yet'
);


CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);