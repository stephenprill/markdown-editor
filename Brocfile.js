/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('http://type-scale.com/?size=16&scale=1.414&text=A Visual Type Scale&webfont=Libre+Baskerville&font-family='Libre Baskerville', serif&font-weight=400&font-family-headers=&font-weight-headers=inherit&background-color=white&font-color=');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
