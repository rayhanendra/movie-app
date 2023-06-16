# Movie App

## Description

This is a simple movie app that allows users to search for movies and view details about them. It uses the [TMDB API](https://www.themoviedb.org/) to fetch movie data.

## Built With

#### Frameworks

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

#### Styling

- [Tailwind CSS](https://tailwindcss.com/)

#### API

- [Axios](https://axios-http.com/)
- [React Query](https://react-query.tanstack.com/)

#### Routing

- [React Router](https://reactrouter.com/)

#### State Management

- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

#### Code Quality

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [Commitlint](https://commitlint.js.org/#/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)

#### Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Installation

1. Clone the repo
   ```sh
   git clone
   ```
2. Install packages
   ```sh
   yarn
   ```
3. Install Husky
   ```sh
   yarn husky install
   ```
4. Setup Husky
   ```sh
   chmod ug+x .husky/*
   ```
5. Start the app
   ```sh
   yarn dev
   ```

## Commit Usage

Use `yarn commit` or `yarn cz` to use commitizen locally

or you can install it globally and

Use `git cz` or just `cz` to commit using commitizen

[Commitizen (commitizen-tools.github.io)](https://commitizen-tools.github.io/commitizen/)

## Testing

Use `yarn test` to run tests

Use `yarn coverage` to run tests coverage

## Approach

- I started by creating a simple React app using Vite and TypeScript.
- I then added ESLint, Prettier, Husky, lint-staged, Commitlint, Conventional Commits, and Commitizen for code quality.
- I then added Tailwind CSS for styling and React Router for routing.
- I then added Axios and React Query for fetching data from the TMDB API.
- I then added Zustand for state management.
- I then added Vitest and React Testing Library for testing.

### Routing

- I started by creating the routes.
- I created the home page, search page, movie details page, and other page.
- I used React Router v6 createBrowserRouter to create the routes.

### Responsive Design

- I started with mobile first approach.
- In the middle of development I refactored the UI to make it more responsive to desktop and tablet.
- Design ideas were taken from dribbble and spontaneous ideas.

### Serivces

- I then created the services.
- I created a movie service to group all the movie related endpoints into one service file to make it easier to use and distribute.

### State Management

- I then created the store.
- I created a store using Zustand to store the search data and the search query params.
- I persisted the store using local storage so that the search data is persisted and not lost when the page is refreshed.

### Home Page

- I started by creating the home page.
- I created a list of Card components to display the movies.
- I used React Query to fetch the movies from the TMDB API.
- I used React Router to navigate to the movie details page when a movie is clicked.

### Search Page

- I then created the search page.
- I created a search bar and a list of Card components to display the search results.
- I used React Query to fetch the search results from the TMDB API.
- The searched movies are stored in the query params and zustand store so that the search results are persisted and not lost when the page is refreshed. It also works the same with the pagination.
- I remove all the search data from store when the user navigates away from the search page or when the search page component is unmounted.
- I used React Router to navigate to the movie details page when a movie is clicked.

### Movie Details Page

- I then created the movie details page.
- I used React Query to fetch the movie details from the TMDB API.

### Other Page

- That's all folks gif :)

### Testing

- I then added tests for the components and pages in the middle of development. But I started to change the component and so I had to change the tests.
- I used Vitest and React Testing Library for testing. Vitest is testing runner similar to Jest but enchanced for Vite.
- I used test coverage to make sure that all the code is tested.

## Improvements

- I would like to add more tests.
