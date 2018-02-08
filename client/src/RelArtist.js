import React from 'react';
import './RelArtist.js'
// import axios from 'axios'

class RelArtist extends React.Component {
    constructor(props) {
        super(props);
        this.onPlayClick = this.onPlayClick.bind();
        this.state = {
            relArtistName: "",
            pic: "",
            song: "",
            audio: ""
        }
    }
    onPlayClick =() =>{
        // this.toggleClass("paused");
        // return false;
    }
    render() {
        return (
            <div className="RelArtistBox">
            <img className="rel-artist-img" alt="this.state.relArtistName" src={this.state.pic || "http://www.slate.com/content/dam/slate/articles/arts/brow_beat/2016/11/161110_BB_Leonard-Cohen-FB.jpg.CROP.promo-xlarge2.jpg"}></img>
            <h3 className="rel-artist-title"> {this.state.relArtistName || "Leonard Cohen"} </h3>
            {/* <button className= "button" onClick={this.onPlayClick}></button> */}
            {/* <h4 className="rel-artist-song">{this.state.song || "Chelsea Hotel"}</h4> */}
        </div>
        )
    }
}

export default RelArtist;