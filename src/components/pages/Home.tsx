import Badge from '../utils/Badge';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container mx-auto bg-gray-200 px-8 py-6 mt-12 rounded-lg">
                    <h1 className="text-2xl">
                        Dashboard
                    </h1>
                </div>

                <div className="container mx-auto bg-gray-200 px-8 py-6 mt-2 rounded-lg">
                    <div className="flex flex-col">
                        <div className="flex justify-between bg-white px-4 py-6 mb-4 rounded-lg shadow">
                            <h3 className="ml-4 text-lg"> Projects </h3>
                            {/* <Badge counter={12} /> */}
                        </div>

                        {/* If logged in as admin */}
                        <div className="bg-white px-4 py-6 rounded-lg shadow">
                            <h3 className="ml-4 text-lg"> Clients </h3>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Home;