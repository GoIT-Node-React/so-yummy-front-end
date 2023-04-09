import {
    Wrapper,
    CloseBtn,
    Text,
    ButtonsWrapper,
    LogoutButton,
    CancelButton,
} from './LogoutPopup.styled.js';

export default function LogOutPopUp({ onClose }) {
    return (
        <Wrapper>
            <CloseBtn onClose={onClose} />
            <Text>Are you sure you want to log out?</Text>
            <ButtonsWrapper>
                <LogoutButton />
                <CancelButton />
            </ButtonsWrapper>
        </Wrapper>
    );
}
