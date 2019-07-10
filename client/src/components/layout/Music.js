import React from "react";
import "./Layout.css";

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            search: ""
        };
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.search) {
    //         this.getShows();
    //     }
    // };

    getShows() {
        fetch("https://rest.bandsintown.com/artists/japanesebreakfast/events?app_id=codingbootcamp")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }

    componentDidMount() {
        this.getShows();
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="music-container">
                    <h1>Upcoming Shows</h1>
                    <div className="music-item-wrapper">
                        <ul>
                            {items.map(item => (
                                <li className="list-item">
                                    <h3>{item.lineup}</h3>
                                    <h5>{item.datetime}</h5>
                                    <p><b>Venue: </b>{item.venue.name}</p>
                                    <p><b>Location: </b> {item.venue.city}, {item.venue.region} {item.venue.country}</p>
                                    <p>{item.offers[0].type} {item.offers[0].status}!</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default Music;