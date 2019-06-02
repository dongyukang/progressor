import React, { Component } from 'react';

interface componentProps {
    title: string
}

class NavElement extends Component<componentProps, any> {
    render() {
        return(
            <div className="mr-4">
                <button className="tracking-wide">
                    { this.props.title } 
                </button>
            </div>
        );
    }
}

export default NavElement;