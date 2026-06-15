-- Create the database
CREATE DATABASE IF NOT EXISTS jobhuntingdb;
USE jobhuntingdb;

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    description TEXT,
    requirements TEXT,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Applications Table
CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    job_id INT NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

-- Insert some dummy data
INSERT INTO users (username, email, password) VALUES
('johndoe', 'john.doe@example.com', 'hashedpassword1'),
('janesmith', 'jane.smith@example.com', 'hashedpassword2');

INSERT INTO jobs (title, company, location, description, requirements) VALUES
('Software Engineer', 'Tech Solutions Inc.', 'New York, NY', 'Develop and maintain software applications.', 'BS in Computer Science, 2+ years experience.'),
('Product Manager', 'Innovate Corp', 'San Francisco, CA', 'Lead product development from conception to launch.', 'BS in Business or related field, 5+ years experience.'),
('UX Designer', 'Creative Agency', 'Remote', 'Design user interfaces and experiences.', 'Portfolio required, experience with Figma/Sketch.');

INSERT INTO applications (user_id, job_id, status) VALUES
(1, 1, 'Accepted'),
(1, 2, 'Pending'),
(2, 1, 'Rejected');