import React from 'react';
import './App.css';
import PlayerPage from './components/PlayerPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import NavBar from './components/NavBar';
import Login from './components/Login';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import SignUp from './components/SignUp.js';
import Play from './components/Play.js';


const history = createBrowserHistory()

{/* <Route path ="/login" render {() => <login props={5}/>}/> */ }

function App() {

  return (
    <Router history={history}>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">HotShots🏀</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/play">Play</Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/signup"> <SignUp /> </Route>
            <Route path="/login"> <Login /> </Route>
            <Route path="/play"> <Play /> </Route>

            <Route exact path="/"> <PlayerPage /> </Route>
          </Switch>
        </Container>

      </Container>
    </Router>
  );
}

export default App;
