import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginThunk, registrationThunk } from 'redux/auth/auth.thunk';
import {
  AuthForm,
  AuthTitle,
  Devider,
  FormButtonGroup,
  FormGoogleButton,
  FormNavLinkButton,
  FormSubmitButton,
  FormInput,
} from 'components/form';
import { routes } from 'constants/routes';
import Loader from 'components/common/Loader/Loader';
import { useState } from 'react';

const schema = Joi.object({
  name: Joi.string().min(1).max(16).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(6)
    .max(16)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
    .messages({
      'string.min': 'Must have at least 6 characters',
      'string.max': 'Must be less then or equal 16 characters',
      'string.pattern.base':
        'At least one uppercase letter, one lowercase letter and one number',
    })
    .required(),
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      isSubmitting,
      touchedFields,
      errors,
      dirtyFields,
      isSubmitted,
    },
  } = useForm({
    mode: 'onSubmit',
    resolver: joiResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const signinHandler = async data => {
    try {
      await dispatch(registrationThunk(data)).unwrap();
      await dispatch(
        loginThunk({ email: data.email, password: data.password })
      );
    } catch (error) {}
    //reset();
  };

  const googleButtonClickHandler = () => {
    setIsLoading(true);
  };

  return (
    <>
      <AuthForm
        onSubmit={handleSubmit(signinHandler)}
        noValidate
        autoComplete="off"
      >
        <AuthTitle>Registration</AuthTitle>
        <FormInput
          type="name"
          placeholder="Name"
          {...register('name')}
          setValue={setValue}
          error={errors['name']}
          isDirty={dirtyFields['name']}
          isTouched={touchedFields['name']}
          isSubmitted={isSubmitted}
        />
        <FormInput
          type="email"
          autoComplete="username"
          placeholder="Email"
          {...register('email')}
          setValue={setValue}
          error={errors['email']}
          isDirty={dirtyFields['email']}
          isTouched={touchedFields['email']}
          isSubmitted={isSubmitted}
        />
        <FormInput
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          {...register('password')}
          setValue={setValue}
          error={errors['password']}
          isDirty={dirtyFields['password']}
          isTouched={touchedFields['password']}
          isSubmitted={isSubmitted}
        />

        <FormButtonGroup>
          {isSubmitting || isLoading ? (
            <Loader />
          ) : (
            <>
              <FormSubmitButton
                type="submit"
                variant="green"
                w="100%"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Loading...' : 'Sign up'}
              </FormSubmitButton>
              <Devider />
              <FormGoogleButton
                href={`${process.env.REACT_APP_API_URL}/auth/google`}
                variant="dark"
                w="100%"
                h="45px"
                onClick={googleButtonClickHandler}
              >
                Sign up with Google
              </FormGoogleButton>
            </>
          )}
        </FormButtonGroup>
      </AuthForm>
      {!isSubmitting && !isLoading && (
        <FormNavLinkButton to={routes.SIGNIN_PAGE}>Sign in</FormNavLinkButton>
      )}
    </>
  );
}
