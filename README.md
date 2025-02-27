# Todo App

A clean, modern todo application built with React, Tailwind CSS, and Framer Motion.

## Features

- ✅ Add, edit, and delete tasks
- 🔄 Change task status (Open, WIP, Completed)
- 🔍 Filter tasks by status
- ✏️ In-line editing for quick updates
- 📱 Fully responsive design
- ✨ Smooth animations for enhanced user experience

## Tech Stack

- React
- Tailwind CSS for styling
- Framer Motion for animations
- Vite for fast development and optimized builds
- Local storage for persistence

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- Add a new task using the input field at the top
- Click on a task's status label to cycle through statuses
- Hover over a task to reveal edit and delete buttons
- Use the filter tabs to show only specific tasks

## Development Scripts

- `npm start` - Start the development server
- `npm run build` - Create a production build
- `npm run serve` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run analyze` - Analyze the bundle size

## Deployment Guide

### Building for Production

1. Create an optimized production build:
   ```
   npm run build
   ```
2. The production-ready files will be in the `dist` directory

### Deployment Options

#### Vercel (Recommended)

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```
2. Deploy to Vercel:
   ```
   vercel
   ```
3. For production deployment:
   ```
   vercel --prod
   ```

Alternatively, connect your GitHub repository to Vercel for automatic deployments.

#### Netlify

1. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
2. Deploy to Netlify:
   ```
   netlify deploy
   ```
3. For production deployment:
   ```
   netlify deploy --prod
   ```

Alternatively, connect your GitHub repository to Netlify for automatic deployments.

#### GitHub Pages

1. Set the `base` property in `vite.config.js`:
   ```js
   base: '/todo-app-250228/'
   ```
2. Build the project:
   ```
   npm run build
   ```
3. Deploy using GitHub Actions (already configured)

#### Firebase Hosting

1. Install Firebase CLI:
   ```
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```
   firebase login
   ```
3. Initialize Firebase:
   ```
   firebase init hosting
   ```
4. Deploy to Firebase:
   ```
   firebase deploy
   ```

### Environment Variables

The app uses environment variables for configuration. You can set these in your deployment platform or in a `.env` file for local development.

Check the `.env.example` file for available configuration options.

## CI/CD

The project includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that builds the application on each push to the main branch.

## Performance Optimizations

The production build includes:

- Code splitting for better load time
- CSS purging to remove unused styles
- JavaScript minification
- Tree shaking to eliminate dead code
- Image optimization

## Potential Enhancements

- Task drag-and-drop reordering
- Dark mode support
- Due dates and priority levels
- Categories or tags for tasks
- User accounts and cloud sync

## License

This project is licensed under the MIT License - see the LICENSE file for details.