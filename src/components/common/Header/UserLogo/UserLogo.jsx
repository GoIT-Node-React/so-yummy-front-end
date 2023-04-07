import {
    ContentWrapper,
    UserAvatarWrapper,
    UserName,
    Avatar,
} from './UserLogo.styled';
import avatar from '../../../../images/avatar.webp';

export default function UserLogo() {
    return (
        <ContentWrapper>
            <UserAvatarWrapper>
                <Avatar src={avatar} alt="user avatar" />
            </UserAvatarWrapper>
            <UserName>Denys</UserName>
        </ContentWrapper>
    );
}
