import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import ArtistBox from './ArtistBox';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = { artistName: "" };
  }
  onSubmitSearchForm(data) {
    this.setState({ artistName: data });
  }

fetchArtist=()=>{

  // let artId = body.artist_id;
  // let artName = body.artist_name;
  // let artUrl = body.artist_share_url;
  // let mGenres = primary_genres.music_genre_list.music_genre.music_genre_name

  // //related artists
  // let artistList = body.artist_list;
  // let relArtistId = body.artist_list.artist_id;
  // let relArtistUrl= body.artist_list.artist_share_url;
  
  // artist = JSON.parse(json);
/*  get related 
{
    "message": {
      "header": {
        "available": 0,
        "status_code": 0,
        "execute_time": 0
      },
      "body": {
        "artist_list": [
          {
            "artist": {
              "artist_credits": {
                "artist_list": [
                  "string"
                ]
              },
              "artist_mbid": "string",
              "artist_name": "string",
              "secondary_genres": {
                "music_genre_list": [
                  "string"
                ]
              },
              "artist_alias_list": [
                {
                  "artist_alias": "string"
                }
              ],
              "artist_vanity_id": "string",
              "restricted": 0,
              "artist_country": "string",
              "artist_comment": "string",
              "artist_name_translation_list": [
                {
                  "artist_name_translation": {
                    "language": "string",
                    "translation": "string"
                  }
                }
              ],
              "artist_edit_url": "string",
              "artist_share_url": "string",
              "artist_id": 0,
              "updated_time": "string",
              "managed": 0,
              "primary_genres": {
                "music_genre_list": [
                  {
                    "music_genre": {
                      "music_genre_parent_id": 0,
                      "music_genre_name": "string",
                      "music_genre_vanity": "string",
                      "music_genre_id": 0,
                      "music_genre_name_extended": "string"
                    }
                  }
                ]
              },
              "artist_twitter_url": "string",
              "artist_rating": 0
            }
          }
        ]
      }
    }
  } */

  /* get artist
   {
    "message": {
      "header": {
        "status_code": 0,
        "execute_time": 0
      },
      "body": {
        "artist": {
          "artist_credits": {
            "artist_list": [
              "string"
            ]
          },
          "artist_mbid": "string",
          "artist_name": "string",
          "secondary_genres": {
            "music_genre_list": [
              "string"
            ]
          },
          "artist_alias_list": [
            {
              "artist_alias": "string"
            }
          ],
          "artist_vanity_id": "string",
          "restricted": 0,
          "artist_country": "string",
          "artist_comment": "string",
          "artist_name_translation_list": [
            {
              "artist_name_translation": {
                "language": "string",
                "translation": "string"
              }
            }
          ],
          "artist_edit_url": "string",
          "artist_share_url": "string",
          "artist_id": 0,
          "updated_time": "string",
          "managed": 0,
          "primary_genres": {
            "music_genre_list": [
              {
                "music_genre": {
                  "music_genre_parent_id": 0,
                  "music_genre_name": "string",
                  "music_genre_vanity": "string",
                  "music_genre_id": 0,
                  "music_genre_name_extended": "string"
                }
              }
            ]
          },
          "artist_twitter_url": "string",
          "artist_rating": 0
        }
      }
    }
  } */
}

api=()=>{
    const baseUrl =`http://api.musixmatch.com/ws/1.1/`;
    const apikey = `&apikey=9a1d5a8de6743ba0370a953a471dc3b9`;

    axios({
      type: "GET",
      method: "GET",
      url: 'http://api.musixmatch.com/ws/1.1/images/albums8/1/1/7/9/1/4/26419711.jpg&apikey=9a1d5a8de6743ba0370a953a471dc3b9',
      headers: {
          'apikey':"9a1d5a8de6743ba0370a953a471dc3b9",
          'format':"jsonp",
          'callback':"jsonp_callback",
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
    /*   contentType: 'application/json' */
    })
    .then(function(response) {
      console.log(response.data);
    })
   .catch(error => {
       console.log('Error fetching and parsing data', error);
   });  
   
}

handleSubmit=(event)=>{
    event.preventDefault();
    this.api();
  }

  render() {
    if (this.state.artistName) {
      return (
        <div className="App">
        <h1>Black Panther</h1>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
        <form onLoad={this.handleSubmit} action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
        <div className="input-group">
            <span className="input-group-btn">
                <button className="btn btn-default" type="submit">Go!</button>
                
            </span>
        </div>
        </form>
        <ArtistBox artistName={this.state.artistName}/>
      </div>
      )
    } else return (
      <div className="App">
        <h1>Black Panther</h1>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
      </div>
    );
  }
}

export default App;
