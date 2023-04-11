import {
  ContentWrapper,
  UserAvatarWrapper,
  UserName,
  Avatar,
} from './UserLogo.styled';
import PromptPopup from '../PromptPopup/PromptPopup.jsx';

import { useState } from 'react';
import { selectUser } from 'redux/user/user.selectors';
import { useSelector } from 'react-redux';

export default function UserLogo({
  HandleEditPopupShow,
  HandleLogoutPopupShow,
}) {
  const { avatarURL, name } = useSelector(selectUser);
  const [isPromptPopupShow, setIsPromptPopupShow] = useState(false);

  const handleUserLogoClick = event => {
    event.stopPropagation();
    setIsPromptPopupShow(!isPromptPopupShow);
  };

  return (
    <ContentWrapper>
      <UserAvatarWrapper tabIndex={0} onClick={handleUserLogoClick}>
        <Avatar src={avatarURL} alt="user avatar" />
      </UserAvatarWrapper>
      <UserName tabIndex={0} onClick={handleUserLogoClick}>
        {name}
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
