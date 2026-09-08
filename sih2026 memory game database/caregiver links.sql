CREATE TABLE caregiver_links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    caregiver_id INT NOT NULL,
    patient_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_caregiver_patient UNIQUE (caregiver_id, patient_id),
    CONSTRAINT fk_caregiver_user FOREIGN KEY (caregiver_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_patient_user FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT chk_caregiver_patient_different CHECK (caregiver_id <> patient_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;