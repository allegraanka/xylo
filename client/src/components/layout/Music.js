import React, { Component } from "react";

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: []
        }
    };

    componentDidMount() {
        fetch("https://rest.bandsintown.com/artists/hopalong/events?app_id=codingbootcamp")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    events: result.data
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
        }
    
    render() {
        const { error, isLoaded, events } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {events.map(event => (
                        <li key={event.name}>
                            {event.name} {event.price}
                        </li>
                    ))}
                </ul>
            );
        }

    }
}

export default Music;