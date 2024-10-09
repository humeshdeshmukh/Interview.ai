#!/bin/bash

# Root directory
mkdir -p "/d/dowunload/Interview master.ai/backend"

# Source directories and files
mkdir -p "/d/dowunload/Interview master.ai/backend/src/controllers"
touch "/d/dowunload/Interview master.ai/backend/src/controllers/AuthController.ts"
touch "/d/dowunload/Interview master.ai/backend/src/controllers/InterviewController.ts"
touch "/d/dowunload/Interview master.ai/backend/src/controllers/QuestionController.ts"
touch "/d/dowunload/Interview master.ai/backend/src/controllers/FeedbackController.ts"
touch "/d/dowunload/Interview master.ai/backend/src/controllers/UserController.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/services"
touch "/d/dowunload/Interview master.ai/backend/src/services/AuthService.ts"
touch "/d/dowunload/Interview master.ai/backend/src/services/InterviewService.ts"
touch "/d/dowunload/Interview master.ai/backend/src/services/QuestionService.ts"
touch "/d/dowunload/Interview master.ai/backend/src/services/FeedbackService.ts"
touch "/d/dowunload/Interview master.ai/backend/src/services/UserService.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/models"
touch "/d/dowunload/Interview master.ai/backend/src/models/User.ts"
touch "/d/dowunload/Interview master.ai/backend/src/models/Interview.ts"
touch "/d/dowunload/Interview master.ai/backend/src/models/Question.ts"
touch "/d/dowunload/Interview master.ai/backend/src/models/Feedback.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/routes"
touch "/d/dowunload/Interview master.ai/backend/src/routes/authRoutes.ts"
touch "/d/dowunload/Interview master.ai/backend/src/routes/interviewRoutes.ts"
touch "/d/dowunload/Interview master.ai/backend/src/routes/questionRoutes.ts"
touch "/d/dowunload/Interview master.ai/backend/src/routes/feedbackRoutes.ts"
touch "/d/dowunload/Interview master.ai/backend/src/routes/userRoutes.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/middlewares"
touch "/d/dowunload/Interview master.ai/backend/src/middlewares/authMiddleware.ts"
touch "/d/dowunload/Interview master.ai/backend/src/middlewares/errorHandler.ts"
touch "/d/dowunload/Interview master.ai/backend/src/middlewares/validate.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/utils"
touch "/d/dowunload/Interview master.ai/backend/src/utils/logger.ts"
touch "/d/dowunload/Interview master.ai/backend/src/utils/sendEmail.ts"
touch "/d/dowunload/Interview master.ai/backend/src/utils/constants.ts"
touch "/d/dowunload/Interview master.ai/backend/src/utils/validation.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/config"
touch "/d/dowunload/Interview master.ai/backend/src/config/db.ts"
touch "/d/dowunload/Interview master.ai/backend/src/config/env.ts"
touch "/d/dowunload/Interview master.ai/backend/src/config/redis.ts"

mkdir -p "/d/dowunload/Interview master.ai/backend/src/tests"
touch "/d/dowunload/Interview master.ai/backend/src/tests/auth.test.ts"
touch "/d/dowunload/Interview master.ai/backend/src/tests/interview.test.ts"
touch "/d/dowunload/Interview master.ai/backend/src/tests/question.test.ts"
touch "/d/dowunload/Interview master.ai/backend/src/tests/feedback.test.ts"

# Root level files
touch "/d/dowunload/Interview master.ai/backend/src/index.ts"

# Docker files
mkdir -p "/d/dowunload/Interview master.ai/backend/docker"
touch "/d/dowunload/Interview master.ai/backend/docker/Dockerfile"
touch "/d/dowunload/Interview master.ai/backend/docker/docker-compose.yml"

# Docs folder
mkdir -p "/d/dowunload/Interview master.ai/backend/docs"
touch "/d/dowunload/Interview master.ai/backend/docs/openapi.yml"
touch "/d/dowunload/Interview master.ai/backend/docs/README.md"

# Other root-level config and environment files
touch "/d/dowunload/Interview master.ai/backend/.env"
touch "/d/dowunload/Interview master.ai/backend/.gitignore"
touch "/d/dowunload/Interview master.ai/backend/package.json"
touch "/d/dowunload/Interview master.ai/backend/tsconfig.json"
touch "/d/dowunload/Interview master.ai/backend/README.md"

echo "Backend directory structure created successfully!"



