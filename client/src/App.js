import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';
import ArtistBox from './ArtistBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = {artistName: ""};
  }
  onSubmitSearchForm(data) {
    this.setState({ artistName: data });
  }
  render() {
    return (
      <div className="App">
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        {/* will be a browser router */}
        <ArtistBox artistName={this.state.artistName}/> 
      </div>
    );
  }
}

export default App;
