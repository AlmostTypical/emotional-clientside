import React from 'react';
import {connect} from 'react-redux';
import actions from '../src/actions/actions';


const App = React.createClass({
  render: function () {
    if (this.props.loaded === true) {
      let tweetData = {};
      tweetData.bigFive = this.props.data.data.tree.children[0].children[0].children;
      tweetData.needs = this.props.data.data.tree.children[1].children[0].children;
      tweetData.values = this.props.data.data.tree.children[2].children[0].children;
      console.log(tweetData);
    }
    return (
      <div>
        <h1>Twitter Personality Analysis</h1>
        <form>
          <input type="text" onChange={this.props.handleUserEntry} />
        </form>
        <button onClick={this.props.handleSubmit}>Get Data Analysis</button>
        <div>

        </div>
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
    handleSubmit: function (user) {
      dispatch(actions.dataRequest('http://localhost:9002/api/personify/tweets/'+ user))
    }
  }
};

const mapStateToProps = function (state) {
  return {
    data: state.data,
    user: state.user,
    loaded: state.loaded
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
