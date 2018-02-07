import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = {artist: ""};
  }
  onSubmitSearchForm(data) {
    this.setState({ artist: data });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
      </div>
    );
  }
}

export default App;
