import React, { Component } from 'react';
import DashboardViewProjects from '../utils/DashboardViewProjetcs';

/**
 * This dashboard component serves as a primary view when a user fisrt vists 
 * the Progressor. 
 */

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container mx-auto bg-gray-200 px-8 py-6 mt-12 rounded-lg">
                    <h1 className="text-2xl">
                        Dashboard
                    </h1>
                </div>

                <div className="flex">
                    <DashboardViewProjects projectsCount={ 10 } />
                </div>
            </div>
        ); 
    }
}

export default Home;