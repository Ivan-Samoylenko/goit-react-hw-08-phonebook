import { useEffect } from 'react';
import { Contact } from 'components';
import { Contacts, ContactsItem, Text } from './ContactList.styled';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { selectFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { contacts, visibleContacts, isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && !isLoading && (
        <>
          <p>{error}</p>
          <p>Reload App please</p>
        </>
      )}
      {!isLoading && !error && contacts.length === 0 && (
        <Text>There are no contacts here yet. add your first contact.</Text>
      )}
      {!isLoading &&
        !error &&
        contacts.length !== 0 &&
        visibleContacts.length === 0 && (
          <Text> there are no matches with the "{filter}"</Text>
        )}
      {!error && visibleContacts.length !== 0 && (
        <Contacts>
          {visibleContacts.map(contact => {
            return (
              <ContactsItem key={contact.id}>
                <Contact contact={contact} />
              </ContactsItem>
            );
          })}
        </Contacts>
      )}
      {isLoading && <p>Loading ...</p>}
    </>
  );
}
