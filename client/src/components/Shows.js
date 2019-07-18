import React from "react";
import "./layout/Layout.css";

const Shows = ({ shows }) => {
    return(
        <div className="container">
            <h1 className="upcoming-shows-title">Upcoming <br /> Shows</h1>
            {shows.map((show) => (
                <div className="show-card">
                    <h5 className="show-display-name">{show.displayName}</h5>
                    <p>{show.venue.displayName}</p>
                    <p>{show.location.city}</p>
                    <p>{show.start.date} | {show.start.time}</p>
                </div>
            ))}
        </div>
    );
}

export default Shows;