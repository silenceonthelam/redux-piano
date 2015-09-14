"use strict";

require("../styles/style.scss");

var Piano = require("./components/Piano"),
    React = require("react");

React.render(<Piano />, document.getElementById("piano"));