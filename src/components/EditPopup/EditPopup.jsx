import {
    Wrapper,
    ChangeAvatarButton,
    NameInputWrapper,
    PersonIcoWrapper,
    PenIcoWrapper,
    NameInput,
    CloseBtn,
    UserInputIco,
    PenInputIco,
    AddAvatarIcon,
    Avatar,
    SaveChangesButton,
} from './EditPopup.styled';
import { ReactComponent as AddAvatarSvg } from '../../images/add-avatar.svg';

//TODO ниже временний импорт
import avatar from '../../images/avatar.webp';

export default function EditPopup({ onClose }) {
    return (
        <Wrapper>
            <CloseBtn onClose={onClose} />
            <ChangeAvatarButton>
                <Avatar src={avatar} />
                <AddAvatarIcon>
                    <AddAvatarSvg />
                </AddAvatarIcon>
            </ChangeAvatarButton>
            <NameInputWrapper>
                <PersonIcoWrapper>
                    <UserInputIco />
                </PersonIcoWrapper>
                <PenIcoWrapper>
                    <PenInputIco />
                </PenIcoWrapper>
                <NameInput></NameInput>
            </NameInputWrapper>
            <SaveChangesButton />
        </Wrapper>
    );
}
