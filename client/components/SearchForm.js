import React, {Component} from "react"

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="search-form-container">
        <form onSubmit={this.handleSubmit} id='search-form'>
          <label>
            <input id='text-field' type='text' 
            value={this.state.value} 
            onChange={this.handleChange} 
            placeholder="What characteristics are you looking for?"
            autoComplete="off"/>
          </label>
          <input id='submit-btn' type='submit' value='submit'/>
        </form>
      </div>
    );
  }
}

export default SearchForm