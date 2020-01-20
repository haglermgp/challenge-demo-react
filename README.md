## Challenge Avanctica
This Challenge Avantica single page application its build mainly with HTML, Css in Js, Javascript, React, Redux, Material-ui and Json Server as a local REST API for prototyping and mocking purposes.

## Project Requirements
Make that your system of your computer have the next requirements <br>

#### `Node >= v10.14.1`
#### `npm >= v6.4.1`

## APP

## Available scripts

In the project directory, you can run: <br>

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## REST API INSTRUCTIONS

When you download the repo and go to root directory, you can find 'DataBaseServer.json' json file that contains the json data.

### Requeriments

Open a second terminal and install the package json-server for serve Challenge Avantica's REST API <br>

#### `npm install -g json-server`

### Start JSON Server

Run the next command for serve the JSON server <br>

#### `json-server --watch DataBaseServer.json --port 8080` or `npm run api:serve`

Great! now our server is running on port 8080