import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <div className="mt-2">
                <Link to="/login">
                    <Button> Login: </Button>
                </Link>
            </div>
            <div className="mt-2">
                <Link to="/">
                    <Button> Home: </Button>
                </Link>
            </div>
        </div>

    )
}



export default NavBar;

