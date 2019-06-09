import React, { Component } from 'react';
import ListProjects from './ListProjects';

/**
 * This component can manage clients.
 * There are going to be several actions that user can take.
 */

class ManageClients extends Component<any, any> {
    render() {

        // if 'showComponent' === 'true'
        if (this.props.showComponent) {
            return(
                <div className="container mx-auto bg-white px-4 py-6">
                    <ListProjects />

                    Managing Clients
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default ManageClients;