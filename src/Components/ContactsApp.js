import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import ContactsList from './ContactsList';
class ContactsApp extends Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };

    this.handleUserInput = this._handleUserInput.bind(this);
  }

  _handleUserInput(searchTerm) {
    this.setState({
      filterText: searchTerm
    });
  }
  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
        <ContactsList filterText={this.state.filterText} contacts={this.props.contacts}/>
      </div>
    );
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default ContactsApp;
