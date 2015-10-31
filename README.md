# babel-preset-async-to-bluebird

> Babel preset to convert async functions to bluebird coroutines.

## Install

```sh
$ npm install --save-dev babel-preset-async-to-bluebird
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["async-to-bluebird"]
}
```

### Via CLI

```sh
$ babel script.js --preset async-to-bluebird
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["async-to-bluebird"]
});
```
