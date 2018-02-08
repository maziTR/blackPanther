import React, { Component } from 'react';
import './ArtistBox.css';
import RelArtistsList from './RelArtistsList';
import RecentSearch from './RecentSearch.js';


class ArtistBox extends Component {
    render() {
        return(
            <div className="ArtistBox">
                <RecentSearch />
                <div className="grid-item">
                <img className="main-artist-img" alt={this.props.artistInfo.artistName} src={this.props.artistInfo.artistImg || "https://placebear.com/300/300"}></img> 
                <p className="main-artist-title"> {this.props.artistInfo.artistName || "Leonard Cohen"} </p>
                <button className="play-button"><img alt="play-button" src={"http://www.pngmart.com/files/3/Play-Button-Transparent-PNG.png"}></img></button>
                <h3 className="main-artist-song">{this.props.artistInfo.song || "Chelsea Hotel"}</h3>
                </div>
                <RelArtistsList relArtists={this.props.artistInfo.relArtists} searchArtist={this.props.searchArtist}/>
            </div>
        );
    }
}

export default ArtistBox;