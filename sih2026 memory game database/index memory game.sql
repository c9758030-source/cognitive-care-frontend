CREATE INDEX idx_game_scores_user_id ON game_scores(user_id);
CREATE INDEX idx_game_scores_game_type ON game_scores(game_type);
CREATE INDEX idx_reminders_user_id ON reminders(user_id);
CREATE INDEX idx_caregiver_links_caregiver ON caregiver_links(caregiver_id);
CREATE INDEX idx_caregiver_links_patient ON caregiver_links(patient_id);