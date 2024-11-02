#!/bin/bash

# Define the base directory for the practice test
BASE_DIR="practice-test"

# Create the main directory
mkdir -p $BASE_DIR/TestComponents

# Create main files
touch $BASE_DIR/PracticeTests.tsx
touch $BASE_DIR/PracticeTests.css

# Create TestComponents
touch $BASE_DIR/TestComponents/QuestionManager.tsx
touch $BASE_DIR/TestComponents/QuestionManager.css
touch $BASE_DIR/TestComponents/Timer.tsx
touch $BASE_DIR/TestComponents/Timer.css
touch $BASE_DIR/TestComponents/ScoreDisplay.tsx
touch $BASE_DIR/TestComponents/ScoreDisplay.css
touch $BASE_DIR/TestComponents/ReviewMode.tsx
touch $BASE_DIR/TestComponents/ReviewMode.css
touch $BASE_DIR/TestComponents/CategoryDifficultySelector.tsx
touch $BASE_DIR/TestComponents/CategoryDifficultySelector.css
touch $BASE_DIR/TestComponents/ProgressTracker.tsx
touch $BASE_DIR/TestComponents/ProgressTracker.css
touch $BASE_DIR/TestComponents/FeedbackModal.tsx
touch $BASE_DIR/TestComponents/FeedbackModal.css

# Create utils directory and files
mkdir -p $BASE_DIR/utils
touch $BASE_DIR/utils/questionUtils.ts
touch $BASE_DIR/utils/scoreUtils.ts
touch $BASE_DIR/utils/userUtils.ts

# Create types directory and files
mkdir -p $BASE_DIR/types
touch $BASE_DIR/types/Question.ts
touch $BASE_DIR/types/User.ts

echo "Practice test file structure created successfully!"
