"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var _1 = require(".");
var Example = function () { return (React.createElement("main", null,
    React.createElement(_1.Laptop, null),
    React.createElement(_1.Phone, null))); };
ReactDOM.render(React.createElement(Example, null), document.getElementById('app'));
