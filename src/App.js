import React from 'react';
import './App.css';
import PlayerPage from './components/PlayerPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
import Login from './components/Login';
import {Container, Col, Row} from 'react-bootstrap';



const history = createBrowserHistory()


{/* <Route path ="/login" render {() => <login props={5}/>}/> */ }



function App() {


  return (
    <Router history={history}>
      <Container fluid>
        <Row>
          <Col md="2">
            <NavBar />
          </Col>
          <Col> 
            <Switch>
              <Route path="/login"> <Login /> </Route>
              <Route exact path="/"> <PlayerPage /> </Route>
            </Switch>
            </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
