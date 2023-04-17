import { Wrapper, Name, LogOutBtn } from './UserMenu.styled';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();

  function logOutHandler() {
    dispatch(logOut());
    navigate('/', { replace: true });
  }

  return (
    <Wrapper>
      <Name>{user.name}</Name>
      <LogOutBtn type="button" onClick={logOutHandler}>
        Logout
      </LogOutBtn>
    </Wrapper>
  );
}
