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
        if (this.props.showComponent) {
            return(
                <div className="container mx-auto bg-white px-10 py-12">
                    <div className="px-4">
                        <div>
                            Name:
                            <input type="text" id="name" className="ml-2 px-2 py-2 w-3/12 bg-gray-200" placeholder="Client's name..."/>
                        </div>
                        <div className="mt-4">
                            Location:
                            <input type="text" id="location" className="ml-2 px-2 py-2 w-3/12 bg-gray-200" placeholder="Client's location..." />
                        </div>
                        <div className="mt-4">
                            Cellphone:
                            <input type="text" id="cellphone" className="ml-2 px-2 py-2 w-3/12 bg-gray-200" placeholder="Client's phone number..."/>
                        </div>
                        <div className="mt-4">
                            Email:
                            <input type="text" id="email" className="ml-2 px-2 py-2 w-3/12 bg-gray-200" placeholder="Client's email..." />
                        </div>
                        <div className="mt-4">
                            Kakaotalk:
                            <input type="text" id="kakaotalk" className="ml-2 px-2 py-2 w-3/12 bg-gray-200" placeholder="Client's Kakaotalk ID..." />
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button className="mr-2 bg-green-600 px-4 py-2 rounded-lg shadow text-white"> Save </button>
                        <button className="bg-red-600 px-4 py-2 rounded-lg shadow text-white"> Reset </button>
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default AddClient;