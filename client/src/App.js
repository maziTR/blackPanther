import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './SearchForm';
import ArtistBox from './ArtistBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchArtist = this.searchArtist.bind(this);
    this.state = { artistId: "", artistName: "" };
  }

  searchArtist(artistName) {
        const baseUrl = `http://api.musixmatch.com/ws/1.1/`;
        const apikey = `&apikey=9a1d5a8de6743ba0370a953a471dc3b9`;
        const artistSearch = `artist.search?q_artist=${artistName}&page_size=1`;
        const relatedSearch = `artist.related.get?artist_id=56&page_size=3&page=1`;
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
                that.setState (
                    {
                        artistId: response.data.message.body.artist_list[0].artist.artist_id,
                        artistName: response.data.message.body.artist_list[0].artist.artist_name
                    }
                );
            })
            .catch(error => {
                alert('Ooops, try again');
                console.log('Error fetching and parsing data', error);
            });
  }
  render() {
    if (this.state.artistName) {
      return (
        <div className="App">
          <p className="App-title">BLACK PANTHER</p>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
          <ArtistBox artistName={this.state.artistName} />
        </div>
      )
    } else return (
      <div className="App">
        <p className="App-title">BLACK PANTHER</p>
        <SearchForm searchArtist={this.searchArtist} />
      </div>
    );
  }
}

export default App;
