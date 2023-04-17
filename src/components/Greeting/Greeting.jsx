import { Text, StyledLink } from './Greeting.styled';
import { useAuth } from 'hooks';

export default function Greeting() {
  const { user, isLoggedIn } = useAuth();

  return (
    <section>
      {isLoggedIn && (
        <Text>
          Welcome {user.name} go to{' '}
          <StyledLink to="contacts">contacts</StyledLink>
        </Text>
      )}
      {!isLoggedIn && (
        <Text>
          Welcome guest. You can <StyledLink to="register">register</StyledLink>{' '}
          or <StyledLink to="login">login</StyledLink>
        </Text>
      )}
    </section>
  );
}
