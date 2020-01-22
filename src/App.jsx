import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './styles/App.css';
import Scroll from './Scroll'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    };
    render() {
        const filterRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <hi>Loading</hi>;
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;
