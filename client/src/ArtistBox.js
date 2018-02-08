import React, { Component } from 'react';
// import axios from 'axios'
import './ArtistBox.css';
import RelArtistsList from './RelArtistsList';
import RecentSearch from './RecentSearch.js';


class ArtistBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistName: "",
            pic: "",
            song: "",
            audio: "",
            relatedArtists: ["1", "2"]
        }
    }
    render() {
        return(
            <div className="ArtistBox">
                <RecentSearch />
                <div className="grid-item">
                <img className="main-artist-img" alt={this.state.artistName} src={this.state.pic || "http://www.slate.com/content/dam/slate/articles/arts/brow_beat/2016/11/161110_BB_Leonard-Cohen-FB.jpg.CROP.promo-xlarge2.jpg"}></img> 
                <h1 className="main-artist-title"> {this.state.artistName || "Leonard Cohen"} </h1>
                <button className="play-button"><img alt="play-button" src={"data:image/png;base64,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"}></img></button>
                <h3 className="main-artist-song">{this.state.song || "Chelsea Hotel"}</h3>
                </div>
                <RelArtistsList relArtists={this.state.relatedArtists}/>
            </div>
        );
    }
}

export default ArtistBox;