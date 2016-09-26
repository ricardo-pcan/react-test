import React, {Component, PropTypes} from 'react';
import ContactItem from './ContactItem';

class ContactsList extends Component {
  render() {
    const filterContacts = this.props.contacts.filter(contact => {
      return contact.name.indexOf(this.props.filterText) !== -1;
    });
    return (
      <ul>
      {filterContacts.map((contact, idx) => {
        return (
          <ContactItem
            key={idx}
            name={contact.name}
            email={contact.email}
            />
        );
      })};
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string
};

export default ContactsList;
