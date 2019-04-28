# Phaser 3 GameJam Template

A Phaser 3 game jam template with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/)
that includes hot-reloading for development and production-ready builds.

Loading images via JavaScript module `import` is also supported.

- - -
## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Installation

After cloning the rep, run `npm install` from your project directory. You can then start the local development server by running `npm start`

### Available Commands
| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

- - -
## Features

Includes the following scenes
- Boot: the first scene that is loaded by Phaser. Loads the assets required for the preloader             Scene
- Preloader: displays a logo, a progress bar, and loads all the required game assets.
- Title: the game's title screen, also displays buttons to start the game, modify options, and             view credits.
- Options: will contain any settings that player's are able to modify in-game.
- Credits: the credits for the game
- Game: main logic

- - -
## Customizing The Template

### Babel
You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you
want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently
targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

  ```
  "browsers": [
    ">0.25%",
    "not ie 11",
    "not op_mini all"
  ]
  ```

### Webpack
If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code
After you run the `npm run build` command, your code will be built into a single bundle located at 
`dist/bundle.min.js` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), 
you should be able to open `http://mycoolserver.com/index.html` and play your game.

- - -
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.

- - -