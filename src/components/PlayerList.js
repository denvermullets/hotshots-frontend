import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import CardColumns from 'react-bootstrap/CardColumns';


class PlayerList extends Component {
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
