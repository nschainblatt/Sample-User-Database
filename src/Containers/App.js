import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBar from '../Components/SearchBar';
import ErrorBoundry from '../Components/ErrorBoundry';
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robotState: [],
      searchfield: ''
  }
}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => {
      return Response.json();
    }).then(users => {
      return this.setState({ robotState: users})
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robotState, searchfield } = this.state;
    const filteredRobots = robotState.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robotState.length) {
      return <h1>Loading</h1>
    } 
    else {
      return (
        <div>
          <h1>User Database</h1>
          <SearchBar searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList filteredSearch={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
