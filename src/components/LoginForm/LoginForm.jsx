import { TiUserOutline } from 'react-icons/ti';
import { Form, FieldWrapper, Field, SubmitBtn } from './LoginForm.styled';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useInput();
  const password = useInput();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );

    email.reset();
    password.reset();

    navigate('/', { replace: true });
  }

  return (
    <Form onSubmit={handleSubmit}>
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
        <TiUserOutline />
        Login
      </SubmitBtn>
    </Form>
  );
}
