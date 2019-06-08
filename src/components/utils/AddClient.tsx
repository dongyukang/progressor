import React, { Component } from 'react';

/**
 * -----------------------------------------------------
 * Information to be filled out to add a new client: 
 *  1. Name: string (required)
 *  2. Location: string (required)
 *  3. Cellphone: string  (required)
 *  4. Kakaotalk: string (optional)
 *  5. Email: string (requires)
 * -----------------------------------------------------
 */

interface Client {
    name: string, // required
    location: string, // required
    cellphone: string, // required
    kakaotalk: string, // optional
    email: string // required
}

class AddClient extends Component<any, Client> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            location: '',
            cellphone: '',
            kakaotalk: '',
            email: ''
        }
    }

    render() {
        return(
            <div>
                Add Client
            </div>
        );
    }
}

export default AddClient;