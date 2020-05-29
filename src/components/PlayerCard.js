import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap'
import SinglePlayer from './SinglePlayer';


class PlayerCard extends Component {
    state = {
        cardToggle: false,
    }

    handleClick = () => {
        // set the state of cardToggle to opposite of whatever it is currently
        this.setState({ cardToggle: !this.state.cardToggle})
    }

    
    render(){
      const {name, team, id} = this.props.player
      let currentTeam = this.props.currentTeam.includes(id)
     return(  
        <Card border={currentTeam ? "success" : null }>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
                <Card.Text>
                    {/* if cardToggle = TRUE then display SinglePlayer, if FALSE do nothing */}
                    {this.state.cardToggle ? <SinglePlayer player={this.props.player}/> : null }
                </Card.Text>
                <Button variant="outline-success" onClick={() => this.props.addToTeam(id)}>
                    Add to Team
                </Button>{'  '}
                <Button variant="outline-info" onClick={this.handleClick}>
                    {this.state.cardToggle ? "Hide Stats" : "View Stats"}    
                </Button>
            </Card.Body>
        </Card>
     )}
}



export default PlayerCard;
