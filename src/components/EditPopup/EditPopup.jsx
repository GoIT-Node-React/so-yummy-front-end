import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { selectUser, selectUserChanging } from 'redux/user/user.selectors';
import { changeInfoThunk } from 'redux/user/user.thunk';

import Loader from 'components/common/Loader';
import { ReactComponent as AddAvatarSvg } from '../../images/add-avatar.svg';
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
  FileInput,
  ErrorMessage,
} from './EditPopup.styled';
import { useState } from 'react';

const schema = yup.object({
  name: yup.string().min(3).max(16),
});

export default function EditPopup({ onClose }) {
  const dispatch = useDispatch();
  const { avatarURL, name } = useSelector(selectUser);
  const [avatar, setAvatar] = useState(avatarURL);

  const { isLoading } = useSelector(selectUserChanging);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      avatar: '',
      name,
    },
  });

  const onSubmitHandler = async data => {
    try {
      const formData = new FormData();
      if (data.avatar) {
        formData.append('avatar', data.avatar[0]);
      }
      formData.append('name', data.name);
      await dispatch(changeInfoThunk(formData));
      onClose();
    } catch (error) {
      return;
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmitHandler)}>
      <CloseBtn onClose={onClose} />
      <ChangeAvatarButton>
        <FileInput
          type="file"
          accept="image/*,.png,.jpg,.web"
          {...register('avatar', {
            onChange: e => setAvatar(URL.createObjectURL(e.target.files[0])),
          })}
        />
        <Avatar src={avatar} />
        <AddAvatarIcon>
          <AddAvatarSvg />
        </AddAvatarIcon>
      </ChangeAvatarButton>
      <NameInputWrapper>
        <PenIcoWrapper>
          <PenInputIco />
        </PenIcoWrapper>
        <PersonIcoWrapper>
          <UserInputIco />
        </PersonIcoWrapper>
        <NameInput {...register('name')} type="text" />
        {errors.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
      </NameInputWrapper>
      {isLoading ? <Loader /> : <SaveChangesButton />}
    </Wrapper>
  );
}
