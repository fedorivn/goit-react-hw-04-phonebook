import React from 'react';
import PropTypes from 'prop-types';

import { ContactItem } from '../FilterListItem/FilterListItem';
import { ContactsList } from './FilterList.styled';

export const FilterList = ({ contacts, onDeleteContacts }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number })=> (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContacts={() => onDeleteContacts(id)}
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
