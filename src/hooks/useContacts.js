import {
  selectContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return { contacts, visibleContacts, isLoading, error };
};
