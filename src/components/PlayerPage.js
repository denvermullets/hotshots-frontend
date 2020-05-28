// import React, { Component } from 'react';
import React, {Component } from 'react';
// import PlayerList from './components/PlayerList';
import PlayerList from './PlayerList'
import Container from 'react-bootstrap/Container'

class PlayerPage extends Component {

    state = {
    players: [],
    }

    componentDidMount() {
        fetch ("http://localhost:3000/players")
        .then(resp => resp.json())
        .then(data => this.setState({
            players: data
        }))
    }

    
    render() {
        return (
            // <NavBar />
            <Container>
             <PlayerList players={this.state.players}/>
            </Container>
        )
    }
}

export default PlayerPage;
