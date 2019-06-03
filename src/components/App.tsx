import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import { Home, Clients, Login, Projects, NotFound } from './pages'; // page components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Navigation />

                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/clients" component={ Clients } />
                        <Route path="/projects-in-progress" component={ Projects } />
                        <Route path="/login" component={ Login } />

                        <Route component={ NotFound }/>
                    </Switch>
                </Router>
            </div>
        );  
    }
}

export default App;