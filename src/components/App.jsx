import React from 'react';
import { FormContact } from './Form/Form';
import { ListContacts } from './List/List';
import { Filter } from 'components/Filter/Filter';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (checkContact(contact)) {
      return alert(`${contact.name} ${contact.number} alredy in contacts list`);
    }
    setContacts(prev => {
      return [...prev, { id: nanoid(), ...contact }];
    });
  };

  const removeContact = id => {
    const remove = contacts.filter(item => item.id !== id);
    setContacts(remove);
  };

  const checkContact = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  const filterContact = () => {
    if (!filter) {
      return contacts;
    }

    const tolowerCase = filter.toLocaleLowerCase();
    const filterUser = contacts.filter(({ name, number }) => {
      const normalizeName = name.toLocaleLowerCase();
      const normalizeNamber = number.toLocaleLowerCase();
      const result =
        normalizeName.includes(tolowerCase) ||
        normalizeNamber.includes(tolowerCase);
      return result;
    });
    return filterUser;
  };

  return (
    <div
      style={{
        marginLeft: '50px',
        marginTop: '50px',
      }}
    >
      <h1>Phonebook</h1>
      <FormContact addContact={addContact} />
      <Filter
        value={filter}
        onChange={evt => setFilter(evt.currentTarget.value)}
      />
      <h2>Contacts</h2>
      <ListContacts contacts={filterContact()} removeContact={removeContact} />
    </div>
  );
};
