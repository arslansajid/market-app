# Market App

## Testing URL

https://react-market-cart.herokuapp.com

### Technology Stack:

1-React.js with Typescript

2-Redux

3-Redux-Saga

4-Styled-components

5-Axios

6-json-server

7-Heroku for continuous Deployment

# Structure

- Reusable components can be found inside `/components` folder.

- Redux implementation is available inside `/store` folder.

- The types definitions are defined in `/types` folder

- Files should only be put in the components directory if they are truly general. If they are not general they should be put in the folder in which they are used.

# Deployment

- `master` is a protected branch. Make sure all the test cases pass before merging.

- A PR merge on `master` will automatically trigger a deployment pipeline on Heroku.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
