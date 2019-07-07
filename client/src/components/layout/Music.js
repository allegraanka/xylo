import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://rest.bandsintown.com/artists/japanesebreakfast/events?app_id=codingbootcamp")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li>
                            <h2>{item.lineup}</h2>
                            <h4>{item.datetime}</h4>
                            <p>{item.venue.name}</p>
                            <p>{item.venue.city}, {item.venue.region} {item.venue.country}</p>
                            <p>{item.offers[0].type} {item.offers[0].status}!</p>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default MyComponent;