import React, { Component } from 'react';
import ManageClients from '../utils/ManageClients';

/**
 * This component contains a navigation for managing clients.
 */

interface componentState {
    admin: boolean
}

class Clients extends Component<any, componentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            admin: true // default: false
        }
    }

    render() {
        if (this.state.admin) {
            return (
                <div>
                    <div className="container mx-auto bg-gray-200 px-4 py-6 mt-12 rounded-lg">
                        {/* Header */}
                        <div className="flex flex-col ml-4">
                            <div className="flex flex-row">
                                <h2 className="text-2xl"> My Clients </h2>

                                {/* Client Navigation */}
                                <div className="ml-10 flex flex-row mt-1">
                                    <div className="mr-2 bg-gray-700 hover:bg-gray-500 text-white px-4 py-1">
                                        <button> Manage Clients </button>
                                    </div>
                                    <div className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-1">
                                        <button> Add Clients </button> 
                                    </div>
                                </div>
                                {/* End of Client Navigation */}
                            </div>
                            <div className="">
                                <ManageClients />
                            </div>
                        </div>
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