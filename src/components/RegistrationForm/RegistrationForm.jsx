import { TiUserAddOutline } from 'react-icons/ti';
import {
  Form,
  FieldWrapper,
  Field,
  SubmitBtn,
} from './RegistrationForm.styled';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useInput();
  const email = useInput();
  const password = useInput();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    name.reset();
    email.reset();
    password.reset();
    navigate('/', { replace: true });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FieldWrapper>
          Name
          <Field
            type="text"
            name="name"
            value={name.value}
            onChange={name.onChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          Email
          <Field
            type="text"
            name="email"
            value={email.value}
            onChange={email.onChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          Password
          <Field
            type="password"
            name="password"
            value={password.value}
            onChange={password.onChange}
          />
        </FieldWrapper>
        <SubmitBtn type="submit">
          <TiUserAddOutline />
          Register
        </SubmitBtn>
      </Form>
    </>
  );
}
