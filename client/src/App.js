import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import ArtistBox from './ArtistBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = { artistName: "" };
  }
  onSubmitSearchForm(data) {
    this.setState({ artistName: data });
  }
  render() {
    if (this.state.artistName) {
      return (
        <div className="App">
        <h1>Black Panther</h1>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
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
