import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <nav>
        <div>
          Movie-TV-Hub
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </nav>
    );
  }
}

export default NavBar;