-- Table 1: Assessments (main record)
CREATE TABLE assessments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    started_at TIMESTAMP NOT NULL,
    submitted_at TIMESTAMP,
    completed BOOLEAN DEFAULT FALSE,
    overall_score INTEGER,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    referrer TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 2: Assessment Answers (individual responses)
CREATE TABLE assessment_answers (
    id SERIAL PRIMARY KEY,
    assessment_id INTEGER NOT NULL,
    question_id VARCHAR(10) NOT NULL,
    question_number INTEGER NOT NULL,
    question_category VARCHAR(100),
    answer_value TEXT,
    answer_score INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_assessment FOREIGN KEY (assessment_id) REFERENCES assessments(id) ON DELETE CASCADE
);

-- Trigger function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for assessments table
CREATE TRIGGER update_assessments_updated_at
    BEFORE UPDATE ON assessments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Indexes for performance
CREATE INDEX idx_assessments_email ON assessments(email);
CREATE INDEX idx_assessments_submitted ON assessments(submitted_at);
CREATE INDEX idx_assessments_completed ON assessments(completed);
CREATE INDEX idx_assessment_answers_assessment_id ON assessment_answers(assessment_id);
CREATE INDEX idx_assessment_answers_question_id ON assessment_answers(question_id);

-- View for easy querying
CREATE VIEW assessment_summary AS
SELECT
    a.id,
    a.name,
    a.email,
    a.overall_score,
    a.submitted_at,
    a.completed,
    COUNT(aa.id) as total_answers,
    AVG(aa.answer_score) as avg_answer_score
FROM assessments a
LEFT JOIN assessment_answers aa ON a.id = aa.assessment_id
GROUP BY a.id, a.name, a.email, a.overall_score, a.submitted_at, a.completed;
