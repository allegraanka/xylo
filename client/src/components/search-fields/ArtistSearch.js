import React, { useState } from "react";

const ArtistSearch = () => {
    // using hooks to establish current state (artist) and to update state (setArtist)
    // all hooks begin with "use" as in 'useState'
    const [artist, setArtist] = useState("Japanese Breakfast"); 

    return (
        <div className="artist-search-params">
            <form>
                <label htmlFor="artist">
                    Search Artists
                <input 
                    id="artist-search" 
                    value={artist} 
                    placeholder="Artist" 
                    onChange={e => setArtist(e.target.value)}
                >
                </input>
                </label>
                <button>Search</button>
            </form>
        </div>
    );
}


export default ArtistSearch;