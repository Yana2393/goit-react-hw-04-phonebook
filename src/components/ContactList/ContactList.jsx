import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';


function ContactList({ filteredContact, deleteContact }) {
    return (
      <ul>
            {filteredContact.map(contact => (
              <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
  filteredContact: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;