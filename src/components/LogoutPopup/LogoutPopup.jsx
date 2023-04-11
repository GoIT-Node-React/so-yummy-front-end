import { useDispatch } from 'react-redux';
import {
  Wrapper,
  CloseBtn,
  Text,
  ButtonsWrapper,
  LogoutButton,
  CancelButton,
} from './LogoutPopup.styled.js';
import { logoutThunk } from 'redux/auth/auth.thunk.js';

export default function LogOutPopUp({ onClose }) {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logoutThunk());
    onClose();
  };
  return (
    <Wrapper>
      <CloseBtn onClose={onClose} />
      <Text>Are you sure you want to log out?</Text>
      <ButtonsWrapper>
        <LogoutButton onClick={logoutHandler} />
        <CancelButton onClose={onClose} />
      </ButtonsWrapper>
    </Wrapper>
  );
}
