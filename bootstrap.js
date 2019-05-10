/*******************************
* File: start.js
* Author: joseph-kaainoa
* Last Modified: 2019-04-13
* Purpose: boostrap app and ES6 import compatibility
*   Requires packages:
*       * babel-preset-env
*       * babel-register
*******************************/
'use strict';
// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: [ 'env' ]
});

// Import the rest of our application.
module.exports = require('./start.js');