import { Outlet } from 'react-router-dom';
import { AuthContainer, AuthContent, AuthPage } from './AuthLayout.styled';

export default function AuthLayout() {
  return (
    <AuthPage>
      <AuthContainer>
        <AuthContent>
          <Outlet />
        </AuthContent>
      </AuthContainer>
    </AuthPage>
  );
}
