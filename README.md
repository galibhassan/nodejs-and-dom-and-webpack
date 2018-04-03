### Testing dom events from node modules
A check if we can detect dom events (e.g. button clicks) using webpack's `bundle.js`

- clone the repo
- install webpack and its dev-server: `npm install webpack` , `npm install webpack-dev-server`
- execute: `npm run build`, which will make a `bundle.js` in `./dist/` folder
- execute: `npm run serve`, which should run the app at `port:8080`