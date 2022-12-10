import { Component } from "react";
import "./searching.css";

class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onSearch = (e) => {
    this.setState({
      term: e.target.value,
    });
    this.props.onSearching(e.target.value);
  };
  render() {
    const { term } = this.state;
    return (
      <div className="searching">
        <input
          type="text"
          className="form-control search-input"
          placeholder="find an employee"
          onChange={this.onSearch}
          value={term}
        />
      </div>
    );
  }
}

export default Searching;
