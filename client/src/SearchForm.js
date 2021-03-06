import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { artistName: "" }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.searchArtist(this.state.artistName);
        this.setState({ artistName: "" });
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
                        autoComplete="off"
                        onChange={(event) => this.setState({ artistName: event.target.value })} />
                    <span className="focus-border"></span>
                </div>
                <div className="button__holder">
                    <button className="btn btn-default plus" type="submit">GO</button>
                </div>
            </form>
        )
    }
}

export default SearchForm;