import { Link } from 'react-router-dom';
import React, { Component } from 'react';

interface componentProps {
    title: string, // nav title
    navTo: string // nav path
}

class NavElement extends Component<componentProps, any> {
    render() {
        return(
            <div className="mr-4">
                <Link to={ this.props.navTo }>
                    <button className="tracking-wide">
                        { this.props.title } 
                    </button>
                </Link>
            </div>
        );
    }
}

export default NavElement;