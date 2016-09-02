import React from 'react';
import {connect} from 'react-redux';
import actions from '../src/actions/actions';


const App = React.createClass({
  render: function () {
    console.log(this.props)
    return (
      <div>
        <h1>Hello World!</h1>
        <form>
          <input type="text" onChange={this.props.handleUserEntry} required value="Type Twitter handle here..." />
          <input type="submit" onClick={this.props.handleSubmit} value="Retrieve analysis"/>
        </form>
      </div>
    )
  }
});

const mapDispatchToProps = function (dispatch) {
  return {
    handleUserEntry: function (e) {
      var user = e.target.value;
      dispatch(actions.storeUser(user))
    },
    handleSubmit: function (e) {
      e.preventDefault();
      dispatch(actions.dataRequest('http://localhost:9002/api/dummy'))
    }
  }
};

const mapStateToProps = function (state) {
  return {
    data: state.data,
    user: state.user
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
