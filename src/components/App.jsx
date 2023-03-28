import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contact-selectors';
import { TextApp, WrapperApp } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);

  return (
    <WrapperApp>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isContacts && <ContactsList />}
      {!isContacts && <TextApp>No contacts in list</TextApp>}
    </WrapperApp>
  )
};

export default App;