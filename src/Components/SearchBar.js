import React, {Component, PropTypes} from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.props.onUserInput(event.target.value);
  }
  render() {
    return (
      <input type="search" placeholder="Search" value={this.props.filterText} onChange={this.handleChange}/>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  onUserInput: PropTypes.func.isRequired
};

export default SearchBar;
