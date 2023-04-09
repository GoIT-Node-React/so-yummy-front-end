import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from 'redux/auth/authOperation';

export default function SigninPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const objData = { email, password: pass };
    console.log('🚀 ~ objData:', objData);
    dispatch(loginUser(objData));
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <p>emai</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p>pass</p>
        <input
          type="password"
          name="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <Link to="/favorite">favorite</Link>
    </div>
  );
}
