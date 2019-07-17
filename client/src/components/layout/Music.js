import React, { Component } from "react";
import Shows from "../Shows";
import "./Layout.css";

class Music extends Component {
    state = {
        shows: []
    }

    componentDidMount() {
        fetch("https://api.songkick.com/api/3.0/metro_areas/5202/calendar.json?apikey=bH8TAIOODciAe88J")
            .then(res => res.json())
            .then((data) => {
                console.log(data.resultsPage.results.event);
                this.setState({ shows: data.resultsPage.results.event })
            })
            .catch(console.log)
    }

    render() {
        return(
            <Shows shows={this.state.shows}/>
        );
    }
}

export default Music;