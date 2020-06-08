import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFechtchUsers';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {
  state = {
    users: null,
  }

  handleDateFetch = () => {
    // console.log("click");
    fetch(API)
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        console.log(typeof data);
        this.setState({
          users: data.results
        })
      })
      .catch(error => console.log(error + " coś nie tak"))
  }

  render() {

    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDateFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
