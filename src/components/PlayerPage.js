import React, {Component } from 'react';
import PlayerList from './PlayerList'
import Container from 'react-bootstrap/Container'

const teamPlayers = 'http://localhost:3000/team_players'

class PlayerPage extends Component {

    state = {
        players: [],
        randomPlayers: [],
        currentTeam: [],
    }

    componentDidMount() {
        fetch ("http://localhost:3000/players")
        .then(resp => resp.json())
        .then(data => this.setState({
            players: data
        }))
    }

    addPlayerToTeam = (playerId) => {
        fetch(teamPlayers, {
            method: 'POST',
            body: JSON.stringify({
                team_id: 1,
                player_id: playerId
            }),
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            } })
                .then(response => response.json())
    }

    deleteFromTeam = (playerId) => {
        fetch(`${teamPlayers}/${playerId}`, {
            method: 'DELETE'
        })
    }

    addToTeam = (playerId) => {
        // want to check if player is on team
        // if no - add to team,
        // if yes - remove from team
        if (this.state.currentTeam.length === 5){
            alert('You already have 5 players selected')
        } else {

            let currentSelected = this.state.currentTeam
            if (currentSelected.includes(playerId)) {
                let newCurrentTeam = this.state.currentTeam
                let currentIndex = newCurrentTeam.findIndex(player => player === playerId)
                newCurrentTeam.splice(currentIndex, 1)
                this.setState({ currentTeam: newCurrentTeam })
                // this.deleteFromTeam(playerId)
            } else {
                this.setState({ currentTeam: [...this.state.currentTeam, playerId]})
                this.addPlayerToTeam(playerId)
            }
        }
    }
        
    render() {
        return (
            // <NavBar />
            <Container>
                <PlayerList 
                    players={this.state.players} 
                    addToTeam={this.addToTeam}
                    currentTeam={this.state.currentTeam}
                />
            </Container>
        )
    }
}

export default PlayerPage;
