import React from 'react';
import PropTypes from 'prop-types';

import { ContactItem } from '../FilterListItem/FilterListItem';
import { ContactsList } from './FilterList.styled';

export const FilterList = ({ contacts, onDeleteContacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContacts={onDeleteContacts}
        />
      ))}
    </ContactsList>
  );
};
FilterList.propTypes = {
contacts: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
})),
  onDeleteContacts: PropTypes.func.isRequired,
};
