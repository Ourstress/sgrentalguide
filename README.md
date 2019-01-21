This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
View it live at sgrentalguide.netlify.com

## Notes

It fetches data from airtable - see under src/data/AirtableAPI.jsx
It authenticates users using netlify auth providers (specifically through github) - see under src/data/auth.jsx

There are only 3 pages - landing page, category page & details page.

- Landing page doesn't have any much content. Category page links to individual detail page.
- Details page is the more interesting page that shows 2 views - one view for readers and another view for the editor who can edit the contents and save changes to airtable.

Outstanding CSS issues

- the hamburger menu and backbutton positioning isn't aligned because the code for both originated from different sources.
- the hamburger's cross mode (where it turns into a cross) looks smaller than the hamburger

## Adapting to your use

- key in your airtable API key as environmental variable in your hosting provider

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
