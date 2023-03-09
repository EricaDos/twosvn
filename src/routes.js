import { useRoutes } from 'react-router-dom';
import { AuthTabs, ForgotPassword, ResetPassword } from './pages/auth';
const ADMIN_BASE_URL = 'vvners';
export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: `/${ADMIN_BASE_URL}`,
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    }
  ]);

  return elements;
};
