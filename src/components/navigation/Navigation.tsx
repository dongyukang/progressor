import NavElement from './NavElement';
import { Link } from 'react-router-dom'; // For 'Home' component
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <div className="bg-gray-800 px-4 py-6 text-white">
                {/* "Progressor" logo */}
                <div className="ml-8 mb-2">
                    <Link to="/">
                        <button className="flex flex-start">
                            <h1 className="font-bold tracking-wide text-3xl"> Progressor </h1>
                        </button>
                    </Link>
                </div>

                {/* Navigation Items */}
                <div className="mr-8 mb-2">
                    <div className="flex justify-end -mt-10">
                        {/* If logged in as admin */}

                        <NavElement navTo="/clients" title="My Clients" />

                        {/* If logged in as client || admin */}
                        <NavElement navTo="/projects-in-progress" title="Projects In Progress" />

                        {/* If not logged in */}
                        <NavElement navTo="/login" title="Login" />

                        <NavElement navTo="/logout" title="Logout" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;