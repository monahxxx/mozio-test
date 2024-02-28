# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

### Design

https://www.figma.com/file/GSIB3ruHqfmv2Rubs4wK6J/?type=design&node-id=146-138&mode=design

### Notes

Imagine that the backend API can NOT return you the full list of cities, and you’ll need to search the cities with a keyword.

The app should consist of two pages: the search form (home page) and the search results.

On the home page there should be a search form. The form should consist of the following fields:

City of origin. Required to fill. A searchable dropdown (combobox) with a list of cities. The list of cities should be requested and searched asynchronously with the loading indication.

Intermediate cities. Same as City of origin. There should be a way to add/remove multiple intermediate cities. No intermediate cities should be shown when the page is first loaded. If an intermediate city is added it has to be filled.

City of destination. Required to fill. Same as City of origin.

Date of the trip. Required to fill. Should be a date in the future.

Number of passengers. Required to fill. Should be a number greater than 0.

The form should be validated. If some field has an invalid value the error should be shown around the problematic field and the submit button should be disabled. The submit button when clicked should navigate to the search results page.

The home page should allow deep-linking: form data should store in the URL, so when a user copy and share the link, the form can be pre-filled with the data from the URL parameters.

On the search results page all the fields filled on the home page should be displayed. The distance of the route (in kilometers) should be calculated and displayed: between subsequent cities of the route and the total distance. The distance calculation should be performed asynchronously with loading indication and error handling.

The search results page should take all parameters from the URL, meaning that the link to a particular search result can be shared with others.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
