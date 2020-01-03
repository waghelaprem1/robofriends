import React, { Component } from 'react'
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';



class App extends Component {
    constructor(){
    super()
    this.state = {
        robots : [],
        searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState ({robots : users}));

    }

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const { robots , searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
           
         return (
            <div className = 'tc'>
              <h1 className = 'f2'> Robofriends</h1>
                <SearchBox searchchange = {this.OnSearchChange} />
                <Scroll>
                <Cardlist robots = {filteredRobots}/> 
                </Scroll>
                
            </div> 
    
    );
  } 
}

export default App;