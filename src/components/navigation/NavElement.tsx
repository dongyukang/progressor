import { Link } from 'react-router-dom';
import React, { Component } from 'react';

interface componentProps {
    title: string,
    navTo: string
}

interface componentState {
    navTo: string
}

class NavElement extends Component<componentProps, componentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            navTo: '/'   
        }
    }

    render() {
        return(
            <div className="mr-4">
                <Link to={ this.state.navTo }>
                    <button className="tracking-wide">
                        { this.props.title } 
                    </button>
                </Link>
            </div>
        );
    }
}

export default NavElement;