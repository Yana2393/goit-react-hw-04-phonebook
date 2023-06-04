import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContact = () =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const addNewContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    }
    setContacts(oldState => {
      return [...oldState, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(oldState => oldState.filter(contact => contact.id !== contactId));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        filterChange={handleFilterChange}
      />
      <ContactList
        filteredContact={filteredContact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;
