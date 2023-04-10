import React, { useState } from 'react';
import axios from 'axios';

import {
    FooterForm,
    Form,
    InputWrapper,
    Input,
    SubscribeButton,
    IconLetterStyle,
    IconLetter,
    SubscribeTitle,
    SubscribeText,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await axios.post('https://localhost:8001/api/subscribe/', {
                email,
            });
            console.log('Great! You signed up!');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('A user with this email is already signed');
            } else {
                console.log('There was an error, try again later');
            }
        }
    };

    const handleChange = event => {
        setEmail(event.target.value);
        setIsDisabled(event.target.value === '');
    };

    return (
        <FooterForm>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
            </SubscribeText>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <InputWrapper>
                    <IconLetter />

                    <Input
                        required
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        autoComplete="off"
                    />
                </InputWrapper>
                <SubscribeButton type="submit" disabled={isDisabled}>
                    Subscribe
                </SubscribeButton>
            </Form>
        </FooterForm>
    );
};
