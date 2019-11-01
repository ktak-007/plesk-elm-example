// Copyright 1999-2019. Plesk International GmbH. All rights reserved.

'use strict';

//require('ace-css/css/ace.css');
//require('font-awesome/css/font-awesome.css');

let app = require('./Main.elm');
let mountNode = document.getElementById('dec2018');
app.Elm.Main.init({node: mountNode});
// .embed() can take an optional second argument. This would be an object describing the data we need to start a program, i.e. a userID or some token
//let app = Elm.Main.embed(mountNode);
