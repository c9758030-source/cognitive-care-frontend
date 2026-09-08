CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    age INT CHECK (age > 0 AND age < 120),
    preferred_language VARCHAR(10) DEFAULT 'en', -- e.g., 'en', 'hi'
    profile_photo_url TEXT,
    text_size VARCHAR(10) DEFAULT 'medium', -- 'small', 'medium', 'large'
    sound_on BOOLEAN DEFAULT TRUE,
    contrast_mode BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_profiles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;