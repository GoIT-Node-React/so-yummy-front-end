import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

import { addToken } from 'redux/auth/auth.slice';
import { loginThunk } from 'redux/auth/auth.thunk';

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

const schema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string().min(1).max(30).required(),
});

export default function SigninPage() {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    const googleAuth = useMemo(() => Object.fromEntries(params), [params]);
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
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (googleAuth.accessToken && googleAuth.refreshToken) {
            dispatch(
                addToken({
                    accessToken: googleAuth.accessToken,
                    refreshToken: googleAuth.refreshToken,
                })
            );
        }
    }, [dispatch, googleAuth]);

    const signinHandler = async data => {
        await dispatch(loginThunk(data));
        //reset();
    };

    return (
        <>
            <AuthForm
                onSubmit={handleSubmit(signinHandler)}
                noValidate
                autoComplete="off"
            >
                <AuthTitle>Sign In</AuthTitle>
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
                    {isSubmitting ? (
                        <Loader />
                    ) : (
                        <>
                            <FormSubmitButton
                                type="submit"
                                variant="green"
                                w="100%"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Loading...' : 'Sign in'}
                            </FormSubmitButton>
                            <Devider />
                            <FormGoogleButton
                                href={`${process.env.REACT_APP_API_URL}/auth/google`}
                                variant="dark"
                                w="100%"
                                h="45px"
                            >
                                Sign in with Google
                            </FormGoogleButton>
                        </>
                    )}
                </FormButtonGroup>
            </AuthForm>
            {!isSubmitting && (
                <FormNavLinkButton to={routes.REGISTER_PAGE}>
                    Registration
                </FormNavLinkButton>
            )}
        </>
    );
}
