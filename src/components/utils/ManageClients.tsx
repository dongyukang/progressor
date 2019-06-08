import AddClient from './AddClient';
import React, { Component } from 'react';
import ListProjects from './ListProjects';


/**
 * This component can manage clients.
 * There are going to be several actions that user can take.
 */

class ManageClients extends Component {
    render() {
        return(
            <div className="container mx-auto bg-white px-4 py-6 mt-4">
                <ListProjects />
            </div>
        );
    }
}

export default ManageClients;