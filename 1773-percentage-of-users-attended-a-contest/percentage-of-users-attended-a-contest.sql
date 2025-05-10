WITH total_users AS (
    SELECT COUNT(*) AS total
    FROM users
)

SELECT
    contest_id,
    ROUND(
        (COUNT(DISTINCT user_id) * 100 / (SELECT total FROM total_users))
    ,2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC,
contest_id ASC;    
