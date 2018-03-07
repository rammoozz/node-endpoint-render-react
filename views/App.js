// views/App.js

var React = require('react');
var createReactClass = require('create-react-class');
var App = createReactClass({
  render: function() {
    return React.createElement('h1', {}, 'Hello, ' + this.props.name + '!');
  },
});
module.exports = App;
