import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { ListItem, Prompt, Button } from './FilterListItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, onDeleteContacts }) => {
  return (
    <ListItem>
      <Prompt>{name}</Prompt>
      <Prompt>{number}</Prompt>
      <Button type="button" onClick={onDeleteContacts}>
        Delete <DeleteIcon />
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
