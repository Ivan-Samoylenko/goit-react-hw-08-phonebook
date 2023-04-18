import { List, ListLink } from './Navigation.styled';
import { useAuth } from 'hooks';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <List>
        <li>
          <ListLink to="/">Home</ListLink>
        </li>
        {isLoggedIn ? (
          <li>
            <ListLink to="contacts">Contacts</ListLink>
          </li>
        ) : (
          <>
            <li>
              <ListLink to="register">Register</ListLink>
            </li>
            <li>
              <ListLink to="login">Login</ListLink>
            </li>
          </>
        )}
      </List>
    </nav>
  );
}
