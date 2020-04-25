# React-Redux-Antd Template
Single-page web application template using [React](https://reactjs.org/),[Redux](https://redux.js.org/) and [Antd](https://ant.design/).
[Storybook](https://storybook.js.org/) is used to help during development.

## Installation
```bash
npm install
```
To pick and choose certain packages, please reference to `setup.sh`.

## Usage
The application is bundled using [Webpack](https://webpack.js.org/) during development and production. 
The purpose of webpack is to bundle modules for JavaScript and to transform front-end assets like HTML, CSS, and images.
#### Development
```bash
npm start
```
The storybook website will be on: `https//localhost:8080`. Modify `package.json` to change the port.
The configuration files for storybook, such as webpack configuration file, is localed under `./.storybook`.
The stories are located `./stories`.

#### Production
```bash
npm run build
```
Webpack will use `webpack.config.js` to bunlde packages. 
The environment variable `TITLE` is used set the title of the application.
The entry/main JavaScript is under `./src/index.js`.

#### Test application using Express
```bash
npm run build
npm run test
```
Build application first `npm run build`. 
Use `npm run test` to launch a simple express server. The application will be running on `http//localhost:8080`.

#### Analyse package
```bash
npm run analyze
```
The analysis will be running on `http//localhost:8080`.
#### Deploy to S3
```bash
npm run deploy
```
This will bundle packages and deploy to S3. The environment variable `AWS_BUCKET` needs to be specified.
