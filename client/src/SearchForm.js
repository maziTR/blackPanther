import React from 'react';
// import axios from 'axios'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { artistName: "" }
    }
    handleSubmit(event) {
        event.preventDefault();
        let artistName;
        if (this.state.artistName === "a") {
            artistName = "Woodkid"
        } else {
            artistName = "Radiohead"
        }
        this.props.onSubmitSearchForm(artistName);
        this.setState({ artist: '' }); // end of dummy data
        
        // var url = `&q=${this.state.artist}`
        // axios.get(url)
        //     .then(response => {
        //         console.log(response);
        //         
        //         this.props.onSubmitSearchForm(artistName);
        //         this.setState({ artistName: '' });
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);
        //     });
    }
    render() {
        return (
            <form action="#" id="getArtist" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="artistName"
                        placeholder="Enter artist"
                        required
                        value={this.state.artistName}
                        onChange={(event) => this.setState({artistName: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        )
    }
}

export default SearchForm;