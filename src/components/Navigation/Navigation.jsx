import { List, ListLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <List>
        <li>
          <ListLink to="contacts">Contacts</ListLink>
        </li>
        <li>
          <ListLink to="register">Register</ListLink>
        </li>
        <li>
          <ListLink to="login">Login</ListLink>
        </li>
      </List>
    </nav>
  );
}
