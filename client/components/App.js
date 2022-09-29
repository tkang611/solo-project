import React, {Component} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <img id="car-gif"src="https://media0.giphy.com/media/Vekj1LWiEIxE3AqzDU/giphy.gif?cid=6c09b952l1ewyts0svhjvqc9h6ofjacp1x4seefeuh3bx6d7&rid=giphy.gif&ct=s"/>
        <div id="form-container">
          <h1>Find Your Road Companion</h1>
          <SearchForm />
        </div>
        <SearchResults />
      </div>
    );
  }
}

export default App;