import { TiDocumentAdd } from 'react-icons/ti';
import { Form, FieldWrapper, Field, SubmitBtn } from './ContactForm.styled';
import { toast } from 'react-toastify';
import { contactsFormValidate } from 'constants';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { addContact } from 'redux/contacts/operations';

async function createNewContact(name, number) {
  try {
    return await contactsFormValidate.validate({ name, number });
  } catch (error) {
    toast.error(error.message);
    return null;
  }
}

export default function ContactForm() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const lowerCaseName = name.toLowerCase();

    if (
      contacts.length > 0 &&
      contacts.some(contact => contact.name.toLowerCase() === lowerCaseName)
    ) {
      toast.warn(`"${name}" is already in contacts`);
      return;
    }

    const number = form.elements.number.value;

    const newContact = await createNewContact(name, number);

    if (newContact) {
      dispatch(addContact(newContact));
      form.reset();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FieldWrapper>
        Name
        <Field type="text" name="name" />
      </FieldWrapper>
      <FieldWrapper>
        number
        <Field type="tel" name="number" />
      </FieldWrapper>
      <SubmitBtn type="submit">
        <TiDocumentAdd size="30" />
        Add contact
      </SubmitBtn>
    </Form>
  );
}
