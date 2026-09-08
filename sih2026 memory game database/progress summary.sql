CREATE TABLE progress_summary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    games_played INT DEFAULT 0 CHECK (games_played >= 0),
    average_score DECIMAL(6, 2) DEFAULT 0.00 CHECK (average_score >= 0.00),
    current_streak INT DEFAULT 0 CHECK (current_streak >= 0),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_progress_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;