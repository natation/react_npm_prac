var React = require('react');
var MyComponent = React.createClass({
  getInitialState() {
    return {};
  },
  showArray (arg1, arg2) {
    console.log(arg1 + arg2);
  },
  render () {
    const a = [1, 2];
    const b = [5, ...a, 1];
    this.showArray(...a);
    console.log(b);
    return (
      <div>Hello asdf!</div>
    );
  }
});

var ReactDOM = require('react-dom');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});