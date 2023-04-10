import { forwardRef, useRef, useState } from 'react';
import {
  InputLeftIcon,
  InputRightIcon,
  StyledFormGroup,
  StyledInput,
  StyledInputError,
  StyledLabel,
} from './FormInput.styled';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';

const getLeftIcon = name => {
  switch (name) {
    case 'name':
      return <FiUser size="24px" />;
    case 'email':
      return <FiMail size="24px" />;
    case 'password':
      return <FiLock size="24px" />;
    default:
      return null;
  }
};

const getRigthIcon = (
  isError,
  isDirty,
  isSubmitted,
  isPassword,
  passwordType
) => {
  let icon = null;

  if (isSubmitted) {
    if (isError) {
      icon = <AiFillCloseCircle size="24px" />;
    } else if (isDirty) {
      icon = <AiFillCheckCircle size="24px" />;
    }
  } else if (isPassword) {
    icon =
      passwordType === 'text' ? (
        <AiFillEyeInvisible size="24px" />
      ) : (
        <AiFillEye size="24px" />
      );
  }

  return icon;
};

const FormInput = forwardRef(
  (
    {
      id,
      label,
      type,
      error,
      isTouched,
      isDirty,
      isSubmitted,
      setValue,
      ...otherProps
    },
    ref
  ) => {
    const [passwordType, setPasswordType] = useState('password');
    const isPassword = useRef(type === 'password');

    const clickInputButtonHandler = () => {
      if (!!error) {
        setValue(otherProps.name, '');
      }

      if (!isSubmitted && isPassword.current) {
        setPasswordType(prev => (prev === 'password' ? 'text' : 'password'));
      }
    };

    return (
      <StyledFormGroup
        isError={!!error}
        isTouched={isTouched}
        isDirty={isDirty}
        isSubmitted={isSubmitted}
        isPassword={isPassword.current}
      >
        <StyledLabel>
          <StyledInput
            {...otherProps}
            type={type === 'password' ? passwordType : type}
            ref={ref}
            isError={!!error}
            isTouched={isTouched}
          />
          <InputLeftIcon>{getLeftIcon(otherProps.name)}</InputLeftIcon>
          {(isSubmitted || isPassword.current) && (
            <InputRightIcon onClick={clickInputButtonHandler}>
              {getRigthIcon(
                !!error,
                isDirty,
                isSubmitted,
                isPassword.current,
                passwordType
              )}
            </InputRightIcon>
          )}
        </StyledLabel>

        {error && <StyledInputError>{error.message}</StyledInputError>}
      </StyledFormGroup>
    );
  }
);

export default FormInput;
