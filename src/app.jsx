'use strict';

var React = require('react');
var ViewContainer = require('components/view-container/view-container.jsx.js');

React.renderComponent(
    <ViewContainer />,
    document.getElementById('main-container')
);