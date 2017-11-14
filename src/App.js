import React, { Component } from 'react';
import './App.css';

import UserMock from './mocks/users.json'

import UserList from './components/User/UserList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(
      () => this.setState({ users: UserMock, loading: false }),
      500
    );
  }

  render() {
    return (
      <div>
        {
          this.state.loading ?
          <span>loading</span> :
          <UserList users={this.state.users} />
        }
      </div>
    );
  }
}

export default App;
