BEGIN;

INSERT INTO users VALUES
  (1, 'steveTheWizard', '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO', '2017-12-25 00:00:00', 'images/mage-1.jpg', 1, 0, 0, 'You haven''t added this yet'),
  (2, 'sharon123', '$2a$12$o2NP8ykiki.T11qRQOCnBeX68PhwXHprM/hxHkbAfqotWo2XT.vdW', '2017-12-25 00:00:00', 'images/mage-2.jpg', 1, 0, 0, 'You haven''t added this yet'),
  (3, 'harrystylesABC', '$2a$12$8HIQ9kqN0brBUfDigfSfB.9BlSsICw4LQ/tiw4U/zMW5QWtuTqMG6', '2017-12-25 00:00:00', 'images/mage-3.jpg', 1, 0, 0, 'You haven''t added this yet'),
  (4, 'demonLover', '$2a$12$vpUb03L0WVHMfrHducL2SumogekzuPfh9Ych0Il8Zkt5Baqch7QZq', '2017-12-25 00:00:00', 'images/mage-4.jpg', 1, 0, 0, 'You haven''t added this yet'),
  (5, 'barbara', '$2a$12$4luxIrDKiU.bpasgzWuRwurBeGX8JNc7Q.taioE6nP3ZUGsN8cH2i', '2017-12-25 00:00:00', 'images/entity-1.jpg', 0, 0, 0, 'You haven''t added this yet'),
  (6, 'f@example.com', '$2a$12$.nvgl/CiZLYqnf6zz4Iq4OUGEN72OmArjhz6j5BCyKQz6i9TCDBfS', '2017-12-25 00:00:00', 'images/entity-2.jpg', 0, 0, 0, 'You haven''t added this yet'),
  (7, 'g@example.com', '$2a$12$fNhJ0RA8nAK.FVbYARXr7e8pMpR8hgLl11xkBpRdIyubrgapb6NeK', '2017-12-25 00:00:00', 'images/entity-3.jpg', 0, 0, 0, 'You haven''t added this yet'),
  (8, 'h@example.com', '$2a$12$M3CzlEMu7CqCJseuus70Ne4xAKFh795psGCgTQc1diZVL5UiYPqG.', '2017-12-25 00:00:00', 'images/entity-4.jpg', 0, 0, 0, 'You haven''t added this yet'),
  (9, 'i@example.com', '$2a$12$lThFqSHOxWqsWU52CUcWeOcDWE70H6GedGDdRBk7QEb/1gfb/PBzm', '2017-12-25 00:00:00', 'images/entity-5.jpg', 0, 0, 0, 'You haven''t added this yet'),
  (10, 'j@example.com', '$2a$12$AEVcwDH6apiHoyJnZcgWaemY9gZ.fn2ZlTeQZKy.w4Pq7qptgyJtG', '2017-12-25 00:00:00', NULL, 0, 0, 0, 'You haven''t added this yet')
ON CONFLICT DO NOTHING;

COMMIT;