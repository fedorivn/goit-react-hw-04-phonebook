import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import { FilterList } from '../FilterList/FilterList';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';

import 'react-toastify/dist/ReactToastify.css';
import { Container, Title, Subtitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = ({ name, number }) => {
    const foundName = this.state.contacts.find(
      contact => contact.name === name
    );
    if (foundName) {
      toast.error(`${name} is already in your contact list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeInput = event => {
    this.setState({ filter: event.target.value });
  };

  visibleContacts = () => {
    const normalizedContact = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedContact);
    });
  };

  render() {
    return (
      <Container>
        <ToastContainer position="top-center" theme="colored" />
        <Title>PhoneBook</Title>
        <Form onSubmit={this.addNewContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter onChangeInput={this.changeInput} />
        <FilterList
          onDeleteContacts={this.deleteContact}
          contacts={this.visibleContacts()}
        />
      </Container>
    );
  }
}
export default App;
