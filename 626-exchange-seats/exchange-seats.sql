SELECT
    CASE 
        WHEN id % 2 = 1 AND (SELECT COUNT(*) FROM Seat) != id
        THEN id + 1 
        WHEN id % 2 = 0 THEN id - 1
        ELSE id END AS id,
    student
FROM Seat
ORDER BY id ASC;