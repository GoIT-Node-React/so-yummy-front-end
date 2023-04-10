import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { FiMail } from 'react-icons/fi';

export const FooterForm = styled.div`
    margin: 0 auto;
    height: 84px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 44px;
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        width: 442px;
        flex-direction: row;
        margin-bottom: 0;
        /* gap: 12px; */
        /* margin-bottom: 38px; */
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        width: 339px;
        flex-direction: column;
        gap: 0;
        /* margin-bottom: 38px; */
    }
`;

export const Form = styled.form`
    margin: 0 auto 44px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        flex-direction: row;
        height: 50px;
        margin: 0 auto;
        /* height: auto; */
        /* width: 442px; */
        justify-content: center;
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        flex-direction: column;
        margin: 0;
        height: auto;
        width: 339px;
    }
`;

export const InputWrapper = styled.label`
    position: relative;
    margin-bottom: 8px;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        height: 50px;
        /* width: 259px;
    
        /* padding-left: 15px; */
        /* margin-right: 12px; */
        /* margin-bottom: 0px; */
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        height: 59px;
        /* width: 338px;
       
        /* padding-left: 16px; */
        /* margin-right: 0px; */
        margin-bottom: 16px;
    }
`;

export const Input = styled.input`
    width: 204px;
    height: 38px;
    background-color: transparent;
    padding: 11.5px 42px;

    color: ${({ theme }) => theme.colors.white[200]};

    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: 1.5;
    letter-spacing: -0.02em;
    border: 1px solid rgba(250, 250, 250, 0.16);
    border-radius: 6px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.white[200]};

        font-size: ${({ theme }) => theme.fontSizes[0]};
        line-height: 1.5;
    }

    &:focus,
    &:hover {
        border: 1px solid ${theme.colors.white[100]};
        outline: none;
    }

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        width: 259px;
        height: 50px;
        padding: 15px 30px 15px 50px;
        margin-right: 12px;

        &::placeholder {
            font-size: ${({ theme }) => theme.fontSizes[2]};
            line-height: 1.5;
        }
    }

    @media screen and (min-width: ${theme.breakpoints[2]}) {
        width: 338px;
        height: 59px;
        padding: 18px 40px 18px 51px;
        margin-right: 0;
        margin-bottom: 16px;
        &::placeholder {
            font-size: ${({ theme }) => theme.fontSizes[4]};
            line-height: 1.5;
        }
    }
`;

export const IconLetter = styled(FiMail)`
    position: absolute;
    left: 14px;
    top: 11px;
    width: 20px;
    height: 16px;

    color: ${({ theme }) => theme.colors.white[200]};

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        left: 15px;
        top: 13px;
        height: 22px;
        width: 26px;
    }

    @media screen and (min-width: ${theme.breakpoints[2]}) {
        left: 15.5px;
        top: 17px;
    }

    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white[100]};
    }
`;

export const SubscribeButton = styled.button`
    width: 204px;
    height: 38px;
    margin: 0 auto;
    padding-top: 11px;
    padding-bottom: 11px;

    color: ${({ theme }) => theme.colors.white[200]};
    background-color: ${({ theme }) => theme.colors.green[200]};

    border-radius: 6px;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus,
    &:hover {
        color: ${({ theme }) => theme.colors.black[400]};
        cursor: pointer;
    }

    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.14;

    @media screen and (min-width: ${theme.breakpoints[1]}) {
        width: 171px;
        height: 50px;
        padding-top: 16px;
        padding-bottom: 16px;
        font-size: ${({ theme }) => theme.fontSizes[3]};
        line-height: ${({ theme }) => theme.fontSizes[4]};
        margin: 0;
    }
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        width: 100%;
        height: 60px;
        padding-top: 21px;
        padding-bottom: 21px;
    }
`;

export const SubscribeTitle = styled.h3`
    display: none;

    @media screen and (min-width: ${theme.breakpoints[2]}) {
        display: block;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        font-size: ${({ theme }) => theme.fontSizes[4]};
        line-height: 27px;
        color: ${({ theme }) => theme.colors.white[200]};

        margin-bottom: 14px;
    }
`;

export const SubscribeText = styled.p`
    display: none;
    @media screen and (min-width: ${theme.breakpoints[2]}) {
        display: block;
        font-style: normal;
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        font-size: ${({ theme }) => theme.fontSizes[2]};
        line-height: ${({ theme }) => theme.fontSizes[4]};
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.colors.white[200]};
        margin: 0px;
        margin-bottom: 28px;
    }
`;
