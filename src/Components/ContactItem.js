import React, {Component, PropTypes} from 'react';

class ContactItem extends Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.email}</li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
};

export default ContactItem;
