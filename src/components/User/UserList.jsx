import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

export default class UserList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.users.map((user) => <li key={user.id}><User {...user} /></li>)
        }
      </ul>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array,
};

UserList.defaultProps = {
  users: [],
}
