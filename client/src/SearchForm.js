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

        let artistName; // dummy data
        if (this.state.artistName === "a") {
            artistName = "Woodkid"
        } else {
            artistName = "Radiohead"
        }
        this.props.onSubmitSearchForm(artistName);
        this.setState({ artistName: '' }); // end of dummy data

        // var url = `&q=${this.state.artistName}`
        // axios.get(url)
        //     .then(response => {
        //         console.log(response);
        //         if (response) {
        //             this.props.onSubmitSearchForm(artistName);
        //             this.setState({ artistName: '' });
        //         } else {
        //             alert('Ooops, try again')
        //         }
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);
        //     });
    }
    render() {
        return (
            <form action="#" id="getArtist" onSubmit={this.handleSubmit}>
                <div className="input-group-wrap">
                    <input
                        type="text"
                        className="input-field effect-1"
                        id="artistName"
                        placeholder="Enter artist"
                        required
                        value={this.state.artistName}
                        onChange={(event) => this.setState({ artistName: event.target.value })} />
                        <span class="focus-border"></span>
                        <button className="btn btn-default" type="submit">Go!</button>
                        <span class="round"></span>
                </div>
            </form>
        )
    }
}

export default SearchForm;