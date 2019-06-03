import Badge from '../utils/Badge';
import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return(
            <div className="bg-gray-200 container mx-auto px-4 py-6 mt-12 rounded-lg">
                <div className="flex p-4">
                        <h3 className="text-xl">
                            Projects In Progress
                        </h3>
                        <Badge counter={ 10 } />
                    </div>
            </div>
        );
    }
}

export default Projects;