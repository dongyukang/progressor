import Badge from '../utils/Badge';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container mx-auto bg-gray-200 px-8 py-6 mt-12 rounded-lg">
                    <h1 className="text-2xl">
                        Dashboard
                    </h1>
                </div>

                <div className="container mx-auto border px-8 py-6 mt-2 rounded-lg">
                    <div className="flex">
                        <h3 className="text-xl">
                            Projects In Progress
                        </h3>
                        <Badge counter={ 10 } />
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Home;