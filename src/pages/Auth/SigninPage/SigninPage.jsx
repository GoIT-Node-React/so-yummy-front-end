import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToken } from 'redux/auth/auth.slice';

export default function SigninPage() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const googleAuth = useMemo(() => Object.fromEntries(params), [params]);

  useEffect(() => {
    if (googleAuth.accessToken && googleAuth.refreshToken) {
      dispatch(
        addToken({
          accessToken: googleAuth.accessToken,
          refreshToken: googleAuth.refreshToken,
        })
      );
    }
  }, [dispatch, googleAuth]);
  return <div></div>;
}
