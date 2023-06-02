import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

function ContactItem ({contact, deleteContact}) {
    return (
      <li className={css.listItem}>
        {contact.name} : {contact.number}
        <button className={css.listItemBtn} onClick={() => deleteContact(contact.id)}>Delete</button>
      </li>
    );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
