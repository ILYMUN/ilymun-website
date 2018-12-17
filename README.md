## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- Make sure [Node.js](https://nodejs.org) is installed.
- Make sure [npm](https://www.npmjs.com/get-npm) is installed.

### Installing

Start of by cloning the repository locally:
```
git clone https://github.com/PabiGamito/react-gh-pages.git
```

Then enter the cloned directory
```
cd react-gh-pages
```
and run
```
npm install
```
to install all the required dependencies for the project.

## Running it Locally

All you need to do to run the app locally is to run
```
npm start
```
in the project directory.

This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Deploy

The web app is hosted on GitHub pages. All you need to do to deploy the applicaiton is run
```
npm run deploy
```
in the project directory.

This will build the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

The built app is then deployed to GitHub pages.

You can then visit the live version of the app at [https://pabigamito.github.io/react-gh-pages/](https://pabigamito.github.io/react-gh-pages/)

## Testing

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Advanced

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back! Only do this if you know what you are doing.**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project uses React, so to learn more about React, check out the [React documentation](https://reactjs.org/).
