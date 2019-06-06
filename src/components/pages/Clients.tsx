import React, { Component } from 'react';
import ManageClients from '../utils/ManageClients';

interface componentState {
    admin: boolean
}

class Clients extends Component<any, componentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            admin: false // default: false
        }
    }

    render() {
        if (this.state.admin) {
            return (
                <div>
                    <div className="container mx-auto bg-gray-200 px-4 py-6 mt-12 rounded-lg">
                        <ManageClients />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="text-center bg-gray-200 container mx-auto px-4 py-8 mt-12 rounded-lg shadow text-lg">
                    <h3> You must be admin to access this page. </h3>
                </div>
            )
        }

    }
}

export default Clients;