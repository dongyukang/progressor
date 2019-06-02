import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Navigation />
                </Router>
            </div>
        );  
    }
}

export default App;