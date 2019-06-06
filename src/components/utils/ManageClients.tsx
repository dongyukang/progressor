import React, { Component } from 'react';

class ManageClients extends Component {
    render() {
        return(
            <div>
                {/* Search Fields */}
                <div className="flex justify-center py-2">
                    <input type="text" className="w-1/3 px-2 rounded-lg shadow mr-4 text-xl "/>
                    <button className="bg-gray-600 px-4 py-4 rounded-lg shadow text-white">Search</button>
                </div>
            </div>
        );
    }
}

export default ManageClients;