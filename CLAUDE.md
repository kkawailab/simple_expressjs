# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a beginner-friendly Express.js sample application that demonstrates basic web application concepts in Japanese. The application serves as an educational tool for learning Express.js fundamentals.

## Common Commands

### Development
```bash
# Install dependencies
npm install

# Start the application
npm start

# Start in development mode with auto-reload
npm run dev

# Run on a different port if 3000 is occupied
PORT=3001 npm start
```

### Process Management
```bash
# Check if server is running on port 3000
lsof -i :3000

# Stop any running Express servers
pkill -f "node.*app.js"
```

## Architecture Overview

### Core Application Structure
- **app.js**: Main Express server file with detailed Japanese comments explaining each concept
  - Sets up Express instance on port 3000 (configurable via PORT env var)
  - Configures EJS as the template engine
  - Defines routes: `/` (main), `/hello`, `/goodnight`, and 404 handler
  - Each route renders an EJS template with specific data

### Template System
- Uses EJS (Embedded JavaScript) templating engine
- Templates located in `views/` directory
- Each page has unique styling and themed color schemes:
  - `index.ejs`: Main page with blue theme
  - `hello.ejs`: Green theme with greeting
  - `goodnight.ejs`: Dark purple theme with night styling
  - `404.ejs`: Red theme for error pages

### Key Features
- All content and comments are in Japanese for Japanese learners
- Detailed inline comments explaining Express.js concepts
- Responsive design with centered content containers
- Navigation links between all pages
- Custom 404 error handling

## Important Notes
- This is an educational codebase with extensive comments - preserve the detailed Japanese explanations when making changes
- The application is designed to be simple and accessible for beginners
- All user-facing text should remain in Japanese
- When adding new routes or features, follow the existing pattern of detailed commenting