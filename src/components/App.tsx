import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import { Home, Clients, Login, MyProjects } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Navigation />

                    <Route exact path="/" component={ Home } />
                    <Route path="/clients" component={ Clients } />
                    {/* <Route path="/projects" component={ Projects } /> */}
                    <Route path="/projects-in-progress" component={ MyProjects } />
                    <Route path="/login" component={ Login } />
                </Router>
            </div>
        );  
    }
}

export default App;