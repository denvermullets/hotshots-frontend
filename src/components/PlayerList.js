import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import CardColumns from 'react-bootstrap/CardColumns';


class PlayerList extends Component {



    render() {
        return (
            <div className="row"> 
                <CardColumns> 
                    {this.props.players.map((player, index) => {
                        return <PlayerCard 
                                    key={player.id}
                                    index={index}
                                    player={player}
                                    addToTeam={this.props.addToTeam}
                                    currentTeam={this.props.currentTeam}
                                />     
                     })}
                </CardColumns>
                
            </div>

            
        );
    }
}

export default PlayerList;
