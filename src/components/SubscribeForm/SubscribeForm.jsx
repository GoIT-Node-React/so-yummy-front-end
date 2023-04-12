import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import Loader from 'components/common/Loader';

import {
  FooterForm,
  Form,
  InputWrapper,
  Input,
  SubscribeButton,
  IconLetter,
  SubscribeTitle,
  SubscribeText,
  ErrorMessage,
} from './SubscribeForm.styled';
import { subscribeThunk } from 'redux/user/user.thunk';
import { selectSubscription } from 'redux/user/user.selectors';

const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

export const SubscribeForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectSubscription);
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: joiResolver(emailSchema),
    defaultValues: {
      email,
    },
  });

  const onSubmitHandler = async data => {
    try {
      await dispatch(subscribeThunk(data)).unwrap();
      reset();
    } catch (error) {}
  };

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <FooterForm>
      <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
      <SubscribeText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscribeText>

      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWrapper htmlFor="email">
          <IconLetter />

          <Input
            id="email"
            placeholder="Enter your email address"
            autoComplete="off"
            {...register('email', {
              value: email,
              onChange: e => handleChange(e),
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>

        {isLoading ? <Loader /> : <SubscribeButton>Subscribe</SubscribeButton>}
      </Form>
    </FooterForm>
  );
};
