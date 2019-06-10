import * as firebase from 'firebase';
import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import { Home, Clients, Login, Projects, NotFound } from './pages'; // page components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props: any) {
        super(props);

        var firebaseConfig = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID 
        }

        // var firebaseConfig = {
        //     apiKey: "AIzaSyBDTkpTRBDdvzTOtGCgAF6OlFzx8Tx1jZI",
        //     authDomain: "progressor-52592.firebaseapp.com",
        //     databaseURL: "https://progressor-52592.firebaseio.com",
        //     projectId: "progressor-52592",
        //     storageBucket: "progressor-52592.appspot.com",
        //     messagingSenderId: "426105494215",
        //     appId: "1:426105494215:web:997f523dc8c465b6"
        //   };

        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return(
            <div>
                <div className="text-2xl text-center">
                    { process.env.REACT_APP_API_KEY }
                </div>
                <Router>
                    <Navigation />

                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/clients" component={ Clients } />
                        <Route path="/projects-in-progress" component={ Projects } />
                        <Route path="/login" component={ Login } />

                        <Route component={ NotFound } />
                    </Switch>
                </Router>
            </div>
        );  
    }
}

export default App;