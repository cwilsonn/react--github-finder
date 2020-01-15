import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter a search query.", "warning");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <form onSubmit={this.onSubmit} className="form d-block my-3">
        <div className="form-group shadow-sm rounded-lg p-4">
          <label htmlFor="siteSearch">Search Github Users</label>
          <input
            id="siteSearch"
            className="form-control"
            type="text"
            name="text"
            placeholder="Search Github Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button type="submit" className="d-block w-100 mt-3 btn btn-primary">
            Submit
          </button>
          {showClear && (
            <button
              onClick={clearUsers}
              className="d-block w-100 mt-3 btn btn-outline-danger"
            >
              Clear
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default Search;
