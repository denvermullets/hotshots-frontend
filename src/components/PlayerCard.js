import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import SinglePlayer from './SinglePlayer';


class PlayerCard extends Component {
    state = {
        show: false
    }

    handleClick (e) {
        e.preventDefault()
        if(this.state.show) {
            this.setState({show: false})
        }
        else {
            this.setState({show:true})
        }
    }

    render(){
        let info = <div> </div>
        if(this.state.show){
            info = <SinglePlayer player={this.props.player}/>
        }

     return(
         
        <Card className="player-card" onClick={this.handleClick.bind(this)}>
             {info}
             <Card.Title>
                {this.props.player.name}
             </Card.Title>

             <Card.Text>
                {this.props.player.team}
             </Card.Text>
         </Card>
     )}
}



export default PlayerCard;
