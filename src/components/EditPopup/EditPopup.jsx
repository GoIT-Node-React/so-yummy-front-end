import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { selectUser } from 'redux/user/user.selectors';
import { useSelector } from 'react-redux';

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
} from './EditPopup.styled';
import { ReactComponent as AddAvatarSvg } from '../../images/add-avatar.svg';

export const schema = yup
  .object({
    avatar: yup
      .mixed()
      .test('fileSize', 'File Size is too large', value => {
        return value.length && value[0].size <= 5242880;
      })
      .test('fileType', 'unsupported file format', value => {
        return (
          value.length &&
          ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type)
        );
      }),
    name: yup.string().min(3).max(30),
  })
  .required();

export default function EditPopup({ onClose }) {
  const { avatarURL, name } = useSelector(selectUser);
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
    console.log(data);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmitHandler)}>
      <CloseBtn onClose={onClose} />
      <ChangeAvatarButton>
        <FileInput
          type="file"
          accept="image/*,.png,.jpg,.web"
          {...register('avatar')}
        />
        <Avatar src={avatarURL} />
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
        <NameInput {...register('name')} />
      </NameInputWrapper>
      <SaveChangesButton />
    </Wrapper>
  );
}
