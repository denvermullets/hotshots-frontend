import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import CardColumns from 'react-bootstrap/CardColumns';


class PlayerList extends Component {

    state = {
        currentTeam: [],
    }

    addToTeam = () => {
        // want to check if player is on team
        // if no - add to team,
        // if yes - remove from team


    }


    render() {
        console.log(this.props.players)
        return (
            <div className="row"> 
                <CardColumns> 
                    {this.props.players.map((player, index) => {
                   return <PlayerCard key={player.id} player={player}/>     
                     })}
                </CardColumns>
                
            </div>

            
        );
    }
}

export default PlayerList;
