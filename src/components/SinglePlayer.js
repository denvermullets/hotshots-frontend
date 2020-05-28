// RYAN: when i click on each card, its displaying the stats, but its not getting rid of the 
// name and team that is originally displaying 
// I didnt keep adding the stats cause i didnt know if you wanted to fix something, if not ill add them
// Just an FYI i guess



import React from 'react';
// if you just want to use 1 element from bootstrap, import like this
import { ListGroup } from "react-bootstrap";


const SinglePlayer = (props) => {
    // const [player,setPlayer] = useState (props.player) 
    const { age, games_played, games_started, fg, fga, fgp, three_point_gpg} = props.player
    return(

        // <ListGroup variant="flush">
        //     <ListGroup.Item><span>Age: {age}</span></ListGroup.Item>
        //     <ListGroup.Item>Games Played: {games_played}</ListGroup.Item>
        //     <ListGroup.Item>Games Started: {games_started}</ListGroup.Item>
        //     <ListGroup.Item>Field Goals: {fg}</ListGroup.Item>
        //     <ListGroup.Item>Field Goal Attempts: {fga}</ListGroup.Item>
        //     <ListGroup.Item>Field Goal Percentage: {fgp}</ListGroup.Item>
        //     <ListGroup.Item>Three Pointers Per Game: {three_point_gpg}</ListGroup.Item>
        // </ListGroup>
            <span>
                Age: {age}
                <br/>
                Games Played: {games_played}
                <br/>
                Games Started: {games_started}
                <br/>
                Field Goals: {fg}
                <br/>
                Field Goals Attempted: {fga}
                <br/>
                Field Goal Percentage: {fgp}
                <br/>
                Three Pointers Per Game: {three_point_gpg}
            </span>        


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