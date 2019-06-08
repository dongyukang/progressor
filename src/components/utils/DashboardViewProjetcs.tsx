import Badge from './Badge';
import React, { Component } from 'react';

/**
 * This component filters out whether the visitor has access to admin.
 * When the user logged in as admin, then he can view the Clients counter. 
 * 
 */

interface componentState {
    admin: boolean,
}

interface componentProps {
    projectsCount: number
}

class DashboardViewProjects extends Component<componentProps, componentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            admin: false
        }
    }

    render() { 
        return(
                <div className="container  mx-auto border px-8 py-6 mt-2 rounded-lg">
                    <div className="flex">
                        <h3 className="text-xl">
                            Projects In Progress
                        </h3>
                        <Badge counter={ this.props.projectsCount } />
                    </div>
                </div>
            )
    }
}

export default DashboardViewProjects;