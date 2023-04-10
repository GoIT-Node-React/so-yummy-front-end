import {
  ContentWrapper,
  UserAvatarWrapper,
  UserName,
  Avatar,
} from './UserLogo.styled';
import PromptPopup from '../PromptPopup/PromptPopup.jsx';
import avatar from '../../../images/avatar.webp';
import { useState } from 'react';

export default function UserLogo({
  HandleEditPopupShow,
  HandleLogoutPopupShow,
}) {
  const [isPromptPopupShow, setIsPromptPopupShow] = useState(false);

  const handleUserLogoClick = event => {
    event.stopPropagation();
    setIsPromptPopupShow(!isPromptPopupShow);
  };

  return (
    <ContentWrapper>
      <UserAvatarWrapper tabIndex={0} onClick={handleUserLogoClick}>
        <Avatar src={avatar} alt="user avatar" />
      </UserAvatarWrapper>
      <UserName tabIndex={0} onClick={handleUserLogoClick}>
        Denys
      </UserName>
      {isPromptPopupShow && (
        <PromptPopup
          HandleEditPopupShow={HandleEditPopupShow}
          HandleLogoutPopupShow={HandleLogoutPopupShow}
          onClose={setIsPromptPopupShow}
        />
      )}
    </ContentWrapper>
  );
}
