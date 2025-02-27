# Todo App Installation Instructions

Follow these steps to get the Todo app up and running:

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

or if you use yarn:

```bash
yarn
```

## Running the App

Start the development server:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

The app should automatically open in your browser at [http://localhost:3000](http://localhost:3000).

## Build for Production

To create a production build:

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

To preview the production build locally:

```bash
npm run serve
```

## Project Structure

- `/src/components`: React components
- `/src/hooks`: Custom React hooks
- `/src/styles`: CSS and Tailwind styles
- `/public`: Static assets

## Features to Try

1. **Adding Tasks**: Type a task title in the input field and click "Add"
2. **Updating Task Status**: Click on a task's status badge to cycle through states (Open → WIP → Completed → Open)
3. **Filtering Tasks**: Use the tabs at the top to filter tasks by their status
4. **Editing Tasks**: Hover over a task and click the edit icon to modify its title
5. **Deleting Tasks**: Hover over a task and click the trash icon to remove it