import { useGetUserInfo } from '@api/users';
import { IconSquareLogo } from '@assets/icons';
import { env } from '@utils/env';
import { Navigate, Route, Routes } from 'react-router';

import ForgetPassword from './ForgetPassword';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import styles from './styles.module.css';

const Login: React.FC = () => {
  const token = localStorage.getItem('token');
  const { data, isLoading } = useGetUserInfo(token);

  if (isLoading) return <></>;

  if (data) return <Navigate to="/" replace />;

  window.location.href = `${env.VITE_GAIA_APP_URL}/login`;

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.logo}>
          <IconSquareLogo size="200" />
        </div>
        <video
          src="https://storage.googleapis.com/gaia-internal-assets/macha_gaia.mov"
          autoPlay
          loop
          muted
        />
      </div>
      <div className={styles.right_side}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="forget" element={<ForgetPassword />} />
          <Route path="reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default Login;
