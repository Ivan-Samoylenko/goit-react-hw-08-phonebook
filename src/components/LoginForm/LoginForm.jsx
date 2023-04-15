import { TiUserOutline } from 'react-icons/ti';
import { Form, FieldWrapper, Field, SubmitBtn } from './LoginForm.styled';
// import { toast } from 'react-toastify';

export default function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    return {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FieldWrapper>
        Email
        <Field type="text" name="email" />
      </FieldWrapper>
      <FieldWrapper>
        Password
        <Field type="text" name="password" />
      </FieldWrapper>
      <SubmitBtn type="submit">
        <TiUserOutline />
        Login
      </SubmitBtn>
    </Form>
  );
}
