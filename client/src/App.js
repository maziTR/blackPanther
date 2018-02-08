import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import ArtistBox from './ArtistBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = { artistId: "", artistName: "" };
  }
  onSubmitSearchForm(data) {
    this.setState(data);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.api();
  }
  render() {
    if (this.state.artistName) {
      return (
        <div className="App">
          <p className="App-title">WOODEN PANTHER</p>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
          <ArtistBox artistName={this.state.artistName} />
        </div>
      )
    } else return (
      <div className="App">
        <p className="App-title">WOODEN PANTHER</p>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
      </div>
    );
  }
}

export default App;
