/*
  # Student Learning Progress Schema

  ## Overview
  Creates tables to track student progress through the KNN digit classification learning modules.

  ## New Tables
  
  ### `student_progress`
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid) - Reference to auth.users
  - `module_name` (text) - Name of the learning module
  - `completed` (boolean) - Whether module is completed
  - `notes` (text) - Student's notes
  - `created_at` (timestamptz) - When progress was first tracked
  - `updated_at` (timestamptz) - Last update timestamp

  ### `quiz_attempts`
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid) - Reference to auth.users
  - `question` (text) - The quiz question
  - `answer` (text) - Student's answer
  - `is_correct` (boolean) - Whether answer was correct
  - `created_at` (timestamptz) - When attempt was made

  ## Security
  - Enable RLS on all tables
  - Users can only access their own progress and quiz attempts
*/

-- Create student_progress table
CREATE TABLE IF NOT EXISTS student_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  module_name text NOT NULL,
  completed boolean DEFAULT false,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create quiz_attempts table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  is_correct boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Policies for student_progress
CREATE POLICY "Users can view own progress"
  ON student_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON student_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON student_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON student_progress
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for quiz_attempts
CREATE POLICY "Users can view own quiz attempts"
  ON quiz_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz attempts"
  ON quiz_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_student_progress_user_id ON student_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);