import { TiUserAddOutline } from 'react-icons/ti';
import {
  Form,
  FieldWrapper,
  Field,
  SubmitBtn,
} from './RegistrationForm.styled';
// import { toast } from 'react-toastify';

export default function RegistrationForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    return {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FieldWrapper>
          Name
          <Field type="text" name="name" />
        </FieldWrapper>
        <FieldWrapper>
          Email
          <Field type="text" name="email" />
        </FieldWrapper>
        <FieldWrapper>
          Password
          <Field type="text" name="password" />
        </FieldWrapper>
        <SubmitBtn type="submit">
          <TiUserAddOutline />
          Register
        </SubmitBtn>
      </Form>
    </>
  );
}
