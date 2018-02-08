import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './SearchForm';
import ArtistBox from './ArtistBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchArtist = this.searchArtist.bind(this);
    this.searchRelated = this.searchRelated.bind(this);
    this.state = { artistId: "", artistName: "", artistImg: "", song: "", relArtists: [] };
  }

  searchArtist(artistName) {
    const baseUrl = `http://api.musixmatch.com/ws/1.1/`;
    const apikey = `&apikey=9a1d5a8de6743ba0370a953a471dc3b9`;
    const artistSearch = `artist.search?q_artist=${artistName}&page_size=1`;
    // const relatedSearch = `artist.related.get?artist_id=${this.state.artistId}&page_size=3&page=1`;
    let that = this;
    axios({
      type: "GET",
      method: "GET",
      url: `${baseUrl}${artistSearch}${apikey}`, // 
      headers: {
        'apikey': "9a1d5a8de6743ba0370a953a471dc3b9",
        'format': "jsonp",
        'callback': "jsonp_callback",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
    })
      .then(function (response) {
        console.log(response.data);
        that.setState(
          {
            artistId: response.data.message.body.artist_list[0].artist.artist_id,
            artistName: response.data.message.body.artist_list[0].artist.artist_name
          }
        );
      })
      .then(function () {
        that.getImage();
        that.searchTrack();
        that.searchRelated();
      })
      .catch(error => {
        alert('Ooops, try again');
        console.log('Error fetching and parsing data', error);
      });
  }
  searchRelated() {
    let that = this;
    axios({
      type: "GET",
      method: "GET",
      url: `http://api.musixmatch.com/ws/1.1/artist.related.get?artist_id=${this.state.artistId}&page_size=3&page=1&apikey=9a1d5a8de6743ba0370a953a471dc3b9`,
      headers: {
        'apikey': "9a1d5a8de6743ba0370a953a471dc3b9",
        'format': "jsonp",
        'callback': "jsonp_callback",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
    })
      .then(function (response) {
        console.log(response.data);
        let relatedArray = response.data.message.body.artist_list;
        let relArtists = [];
        for (let obj of relatedArray) {
          let singleRelArtist = {
            relArtistId: obj.artist.artist_id,
            relArtistName: obj.artist.artist_name
          };
          relArtists.push(singleRelArtist);
        }
        that.setState({ relArtists: relArtists });
      })
  }

  getImage() {
    let that = this;
    axios({
      type: "GET",
      method: "GET",
      url: `http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${this.state.artistId}&s_release_date=desc&g_album_name=1&apikey=9a1d5a8de6743ba0370a953a471dc3b9`,
      headers: {
        'apikey': "9a1d5a8de6743ba0370a953a471dc3b9",
        'format': "jsonp",
        'callback': "jsonp_callback",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
    })
      .then(function (response) {
        console.log(response.data.message.body.album_list);

        /*         that.setState(
                  {
                    artistImg: response.data.message.body.album_list[0].album.album_coverart_100x100
                  }); */

      }).catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  searchTrack() {
    let that = this;
    const query = `http://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.state.artistName}&page_size=1&page=1&s_track_rating=desc`
    axios({
      type: "GET",
      method: "GET",
      url: `${query}&apikey=9a1d5a8de6743ba0370a953a471dc3b9`,
      headers: {
        'apikey': "9a1d5a8de6743ba0370a953a471dc3b9",
        'format': "jsonp",
        'callback': "jsonp_callback",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
    })
      .then(function (response) {
        console.log(response.data.message.body.track_list[0].track.track_name);
        that.setState(
          {song: response.data.message.body.track_list[0].track.track_name});

      }).catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    let artistBox = this.state.artistName ? <ArtistBox artistInfo={this.state} searchArtist={this.searchArtist} /> : null;
    return (
      <div className="App">
        <p className="App-title">WOODEN PANTHER</p>
        <SearchForm searchArtist={this.searchArtist} />
        {artistBox}
      </div>);
  }
}

export default App;
