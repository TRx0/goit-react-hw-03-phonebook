import PropTypes from 'prop-types';
import { useState } from 'react';

export const FormContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: '10px',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Name
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            Number
            <input
              style={{
                width: '200px',
                marginTop: '5px',
              }}
              type="tel"
              name="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginBottom: '10px' }}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

FormContact.propTypes = {
  lable: PropTypes.string,
};