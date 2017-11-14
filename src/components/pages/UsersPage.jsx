import React, {Component} from 'react';
import BtnList from '../BtnList'
import UserMock from '../../mocks/users.json'
import UserList from '../User/UserList';

const shortItems = [
  {
    label: 'Age',
    value: 'age'
  }, {
    label: 'Name',
    value: 'name'
  }
]

class UsersPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
      error: null,
      sortField: 'age'
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    setTimeout(() => this.setState({users: UserMock, loading: false}), 500);
  }

  sortHandler = (sortField) => { this.setState({sortField})}

  render() {
    return (<div>
      {
        this.state.loading
          ? <span>loading</span>
          : <div>
              <UserList users={this.state.users} sortField={this.state.sortField}/>
              <BtnList onChange={this.sortHandler} items={shortItems} value={this.state.sortField}/>
            </div>

      }
    </div>);
  }
}

export default UsersPage;
