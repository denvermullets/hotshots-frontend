// RYAN: when i click on each card, its displaying the stats, but its not getting rid of the 
// name and team that is originally displaying 
// I didnt keep adding the stats cause i didnt know if you wanted to fix something, if not ill add them
// Just an FYI i guess

import React, { useState } from 'react';


const SinglePlayer = (props) => {
    const [player,setPlayer] = useState (props.player) 
    return(
        <div>
            Age: {props.player.age}
            <br/>
            Games Played: {props.player.games_played}
            <br/>
            Games Started: {props.player.games_started}
            <br/>
            Field Goals: {props.player.fg}
            <br/>
            Field Goals Attempted: {props.player.fga}
            <br/>
            Field Goal Percentage: {props.player.fgp}
            <br/>
            Three Pointers Per Game: {props.player.three_point_gpg}

        </div>


    )
 }



// IGNORE THIS************************************
// t.integer "age"
//     t.integer "games_played"
//     t.integer "games_started"
//     t.integer "minutes"
//     t.integer "fg"
//     t.integer "fga"
//     t.float "fgp"
//     t.integer "three_point_gpg"
//     t.integer "three_point_attempts"
//     t.float "three_point_percentage"
//     t.integer "two_point_gpg"
//     t.integer "two_point_attempts"
//     t.float "two_point_percentage"
//     t.float "efg"
//     t.integer "ft"
//     t.integer "fta"
//     t.float "ft_percentage"
//     t.integer "orb"
//     t.integer "drb"
//     t.integer "trb"
//     t.integer "ast"
//     t.integer "steals"
//     t.integer "blocks"
//     t.integer "turnovers"
//     t.integer "fouls"
//     t.integer "ppg"
//     t.string "team"
//     t.string "img_url"
     





export default SinglePlayer