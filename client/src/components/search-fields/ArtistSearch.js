import React, { Component } from "react";
import API from "../../utils/API";

class ArtistSearch extends Component {
    // using hooks to establish current state (artist) and to update state (setArtist)
    // all hooks begin with "use" as in 'useState'
    // const [artist, setArtist] = useState("Japanese Breakfast"); 
    state = {
        artists: [],
        artistSearch: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        // When the form is submitted, prevent its default behavior, get artists, update artists state
        e.preventDefault();
        API.getRecipes(this.state.recipeSearch)
            .then(res => this.setState({ recipes: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="artist-search-params">
                <form>
                    <label htmlFor="artist">
                        Search Artists
                        <input
                            id="artist-search"
                            value={this.state.artistSearch}
                            placeholder="Artist"
                            onChange={this.handleInputChange}
                        >
                        </input>
                    </label>
                    <button
                        style={{
                            width: "125px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        // onClick={this.searchArtists}
                        className="btn waves-effect waves-light hoverable black white-text accent-3"
                    >
                        Search
                </button>
                </form>
            </div>
        );
    }
}


export default ArtistSearch;