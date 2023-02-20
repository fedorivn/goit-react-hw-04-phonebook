import React from 'react';
import PropTypes from 'prop-types';

import { Container, Prompt, Input } from './Filter.styled';

export const Filter = ({ value, onChangeInput }) => {
  return (
    <Container>
      <Prompt>Find contats by name</Prompt>
      <Input type="text" name="search" value={value} onChange={onChangeInput} />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onDeleteContacts: PropTypes.func
};
