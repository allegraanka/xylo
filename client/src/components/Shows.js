import React from "react";

const Shows = ({ shows }) => {
    return(
        <div>
            <h1>Upcoming Shows</h1>
            {shows.map((show) => (
                <div className="show-card">
                    <h5>{show.displayName}</h5>
                    <p>{show.venue.displayName}</p>
                    <p>{show.location.city}</p>
                    <p>{show.start.date} | {show.start.time}</p>
                </div>
            ))};
        </div>
    );
}

export default Shows;