import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const UserList = ({users, sortField}) => {
  return (<ul>
    {
      users.sort((a, b) => (
        a[sortField] < b[sortField]
        ? -1
        : 1)).map((user) => <li key={user.id}><User {...user}/></li>)
    }
  </ul>);
}

export default UserList;

UserList.propTypes = {
users: PropTypes.array
};

UserList.defaultProps = {
users: []
}
