import { ContactForm } from 'components';
import { Filter } from 'components';
import { ContactList } from 'components';

export default function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
