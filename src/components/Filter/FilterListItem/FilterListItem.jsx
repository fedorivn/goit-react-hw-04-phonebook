import React from 'react';

import { ListItem, Prompt, Button } from './FilterListItem.styled';
import PropTypes from 'prop-types'

export const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <ListItem>
      <Prompt>{name}</Prompt>
      <Prompt>{number}</Prompt>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired
};