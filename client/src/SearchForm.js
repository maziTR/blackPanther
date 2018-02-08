import React from 'react';
import axios from 'axios';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { artistName: "" }
    }
    handleSubmit(event) {
        event.preventDefault();

        // let artistName; // dummy data
        // if (this.state.artistName === "a") {
        //     artistName = "Woodkid"
        // } else {
        //     artistName = "Radiohead"
        // }
        // this.props.onSubmitSearchForm(artistName);
        // this.setState({ artistName: '' }); // end of dummy data

        let artistName = this.state.artistName;
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
                'Accept': 'application/json',
                'Access-Control-Request-Method': 'GET'
            },
            dataType: "jsonp",
            jsonpCallback: 'jsonp_callback',
        })
            .then(function (response) {
                console.log(response.data);
                that.props.onSubmitSearchForm(

                    {
                        artistId: response.data.message.body.artist_list[0].artist.artist_id,
                        artistName: response.data.message.body.artist_list[0].artist.artist_name
                    }
                );
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <form action="#" id="getArtist" onSubmit={this.handleSubmit} >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="artistName"
                        placeholder="Enter artist"
                        required
                        value={this.state.artistName}
                        onChange={(event) => this.setState({ artistName: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        )
    }
}

export default SearchForm;