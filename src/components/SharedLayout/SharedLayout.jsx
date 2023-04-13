import { Outlet } from 'react-router-dom';
import { Navigation, UserMenu } from 'components';
import { Wrapper } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <Wrapper>
        <Navigation />
        <UserMenu />
      </Wrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
}
