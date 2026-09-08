CREATE TABLE game_scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_type ENUM('memory', 'number', 'pattern', 'attention') NOT NULL,
    score INT NOT NULL CHECK (score >= 0),
    moves INT DEFAULT 0 CHECK (moves >= 0),
    accuracy DECIMAL(5, 2) CHECK (accuracy >= 0.00 AND accuracy <= 100.00), -- PRD requirement
    time_taken_seconds INT CHECK (time_taken_seconds >= 0),                 -- PRD requirement
    mistakes INT DEFAULT 0 CHECK (mistakes >= 0),                          -- PRD requirement
    difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'easy',             -- PRD requirement
    played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_scores_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
