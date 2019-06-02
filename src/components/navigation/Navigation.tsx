import NavElement from './NavElement';
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <div className="bg-gray-800 px-4 py-6 text-white">
                {/* "Progressor" logo */}
                <div>
                    <button className="flex flex-start">
                        <h1 className="font-bold tracking-wide text-xl"> Progressor </h1>
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="flex justify-end -mt-6">
                    {/* If logged in as admin */}
                    <NavElement title="Projects" />
                    <NavElement title="Clients" />

                    {/* If logged in as user */}
                    <NavElement title="My Projects" />
                    
                    <NavElement title="Logout" />

                    {/* If not logged in */}
                    <NavElement title="Login" />
                </div>
            </div>
        );
    }
}

export default Navigation;