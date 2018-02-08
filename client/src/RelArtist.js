import React from 'react';
import './RelArtist.js'
import './ArtistBox.css'

class RelArtist extends React.Component {

    moveToMain = () => this.props.searchArtist(this.props.relArtistName); // onClick for the pic
    render() {
        return (
            <div className="RelArtistBox">
            <img className="rel-artist-img" alt="this.props.relArtistName" src={this.props.pic || "http://www.slate.com/content/dam/slate/articles/arts/brow_beat/2016/11/161110_BB_Leonard-Cohen-FB.jpg.CROP.promo-xlarge2.jpg"}></img>
            <p className="rel-artist-title"> {this.props.relArtistName || "Leonard Cohen"} </p>
            {/* <button className="button" onClick={this.onPlayClick}></button>
            <h4 className="rel-artist-song">{this.props.song || "Chelsea Hotel"}</h4> */}
        </div>
        )
    }
}

export default RelArtist;