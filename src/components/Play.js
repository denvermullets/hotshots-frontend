
// import React, { Component } from 'react';
import React, { Component } from 'react';
// import PlayerList from './components/PlayerList';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap'
import PlayerCardvs from './PlayerCardvs';

class Play extends Component {

    state = {
        teamOne: [],
        teamTwo: [],
        players: [],
    }

    componentDidMount() {
        this.loadTeamOne()
        this.loadTeamTwo()
    }

    getPlayerOne = (playerId) => {
        fetch(`http://localhost:3000/players/${playerId}`)
            .then(resp => resp.json())
            .then(player => this.setState({ teamOne: [...this.state.teamOne, player]}))
    }
    getPlayerTwo = (playerId) => {
        fetch(`http://localhost:3000/players/${playerId}`)
            .then(resp => resp.json())
            .then(player => this.setState({ teamTwo: [...this.state.teamTwo, player]}))
    }

    loadTeamOne = () => {
        this.getPlayerOne(13)
        this.getPlayerOne(14)
        this.getPlayerOne(25)
        this.getPlayerOne(26)
        this.getPlayerOne(86)
    }
    loadTeamTwo = () => {
        this.getPlayerTwo(1)
        this.getPlayerTwo(2)
        this.getPlayerTwo(102)
        this.getPlayerTwo(104)
        this.getPlayerTwo(58)
    }
    
    handleSimulation = () => {
        let userName = localStorage.name
        let parsed = JSON.parse(userName)
        alert(`${parsed.name} wins! This team is STACKED!`)
    }

    render() {
        // var retrievedObject = localStorage.getItem('testObject');
        // console.log('retrievedObject: ', JSON.parse(retrievedObject));

        let userName = localStorage.name
        let parsed = JSON.parse(userName)
        return (
            <div>
                <Row> 
                    <h3> 
                        {parsed.name}: 
                    </h3>
                </Row>
                <Row>
                        {this.state.teamOne.map((player, index) => {
                            return <Col><PlayerCardvs 
                                    key={player.id}
                                    index={index}
                                    player={player}
                                /> 
                                </Col>
                     })}
                    

                </Row>
                <br />
                <br />
                <Row>
                    <Col className="mx-auto" xs={2}>
                        <Button onClick={this.handleSimulation}> SIMULATE GAME</Button>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row> 
                    <h3> 
                        Computer: 
                    </h3>
                </Row>
                <Row>
                        {this.state.teamTwo.map((player, index) => {
                            return <Col><PlayerCardvs 
                                    key={player.id}
                                    index={index}
                                    player={player}
                                /> 
                                </Col>
                     })}
                    



                </Row>
            </div>
        )
    }
}



export default Play