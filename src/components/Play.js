
// import React, { Component } from 'react';
import React, { Component } from 'react';
// import PlayerList from './components/PlayerList';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap'
import PlayerCard from './PlayerCard.js';

class Play extends Component {

    state = {
        teamOne: [],
        teamTwo: [],
        players: [],
    }

    componentDidMount() {
        fetch("http://localhost:3000/players")
            .then(resp => resp.json())
            .then(data => this.setState({
                teamOne: data.slice(0, 5),
                teamTwo: data.slice(6, 11)
            }))
    }


    render() {
        return (
            <div>
                <Row> 
                    <h1> 
                        PLAYER 1: 
                    </h1>
                </Row>
                <Row>
                    <Col>
                        <PlayerCard player={this.state.teamOne[0]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamOne[1]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamOne[2]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamOne[3]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamOne[4]}>

                        </PlayerCard>
                    </Col>

                </Row>
                <br />
                <br />
                <Row>
                    <Col className="mx-auto" xs={2}>
                        <Button> SIMULATE GAME</Button>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row> 
                    <h1> 
                        COMPUTER: 
                    </h1>
                </Row>
                <Row>
                    <Col>
                        <PlayerCard player={this.state.teamTwo[0]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamTwo[1]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamTwo[2]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamTwo[3]}>

                        </PlayerCard>
                    </Col>
                    <Col>
                        <PlayerCard player={this.state.teamTwo[4]}>

                        </PlayerCard>
                    </Col>

                </Row>
            </div>
        )
    }
}



export default Play