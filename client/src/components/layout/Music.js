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

    getArtistId() {
        const api_key = "bH8TAIOODciAe88J";
        let artist = "Japanese Breakfast";
        fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${api_key}&query=${artist}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.resultsPage.results.artist[0].displayName);
                this.setState({
                    isLoaded: true,
                    items: result.resultsPage.results.artist
                });
                // console.log(`items: ${this.items}`);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
        }
    
    getShows() {
        const api_key = "bH8TAIOODciAe88J";
        let artist = "Japanese Breakfast";
        fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${api_key}&query=${artist}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.resultsPage.results.artist[0].displayName);
                    this.setState({
                        isLoaded: true,
                        items: result.resultsPage.results.artist
                    });
                    // console.log(`items: ${this.items}`);
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
                            <h3>{items[0].displayName}</h3>
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default Music;