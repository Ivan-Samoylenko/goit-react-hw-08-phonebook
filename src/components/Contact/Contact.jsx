import { Name, Phone, DeleteBtn } from './Contact.styled';
import { TiDocumentDelete } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  return (
    <>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
      <DeleteBtn
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <TiDocumentDelete size="30" />
        delete
      </DeleteBtn>
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
