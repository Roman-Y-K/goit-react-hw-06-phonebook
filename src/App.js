import React from 'react';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactsList from './Components/ContactsList';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
