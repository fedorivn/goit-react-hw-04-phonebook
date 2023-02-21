import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';

import useLocalStorage from 'hooks/useLocalStorage';
import Form from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';
import { FilterList } from '../FilterList/FilterList';


const initialState = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
const STORAGE_KEY = 'contact';

export default function App() {
  const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, initialState);
  const [filterEl, setFilterEl] = useState('');

  console.log(contacts)
  const addNewContact = (name, number) => {
    const foundName = contacts.find(contact => contact.name === name);
    if (foundName) {
      toast.error(`${name} is already in your contact list`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => {
      return [newContact, ...prevState];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const changeInput = event => {
    setFilterEl(event.target.value);
  };

  const visibleContacts = () => {
    const normalizedContact = filterEl.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedContact);
    });
  };

  const filtredContacts = visibleContacts();


  return (
    <Container>
      <ToastContainer position="top-center" theme="colored" />
      <Title>PhoneBook</Title>
      <Form onSubmit={addNewContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filterEl} onChangeInput={changeInput} />
      <FilterList
        onDeleteContacts={deleteContact}
        contacts={filtredContacts}
      />
    </Container>
  );
}
