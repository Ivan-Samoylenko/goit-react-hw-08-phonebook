import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation, UserMenu } from 'components';
import { Wrapper } from './SharedLayout.styled';
import { useAuth } from 'hooks';

export default function SharedLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Wrapper>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </Wrapper>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
