import { Wrapper, Name, LogOutBtn } from './UserMenu.styled';

export default function UserMenu() {
  function logOutHandler() {
    console.log('Log Out');
  }

  return (
    <Wrapper>
      <Name>mango@mail.com</Name>
      <LogOutBtn type="button" onClick={logOutHandler}>
        Logout
      </LogOutBtn>
    </Wrapper>
  );
}
