# Getting Started Redux-Saga

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application fetches repositories from the GitHub API associated with a specific user ("snvas" in this instance) using Redux Saga, a middleware library for Redux. It retrieves the repositories and sorts them based on their creation date in descending order. The sorted repositories are then limited to the top 50 entries and dispatched to the Redux store. This application is useful for showcasing GitHub repositories in a React application, with a focus on displaying the most recent repositories first.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
