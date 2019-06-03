import React, { Component } from 'react';

interface componentProps {
    counter: number
}

class Badge extends Component<componentProps, any> {
    render() {
        return(
            <div className="ml-2 text-md bg-indigo-400 px-4 py-1 text-white rounded-full shadow">
                { this.props.counter }
            </div>
        );
    }
}

export default Badge;