const React = require('react');
const axios = require('axios');

const App = React.createClass({
  getData: function () {
    console.log('calling for data');
    axios.get('http://localhost:9002/api/dummy')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      });
  },
  render: function () {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.getData}>Console.log the dummy data</button>
      </div>
    )
  }
});

module.exports = App;