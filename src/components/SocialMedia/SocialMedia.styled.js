import styled from '@emotion/styled';

import { SlSocialInstagram } from 'react-icons/sl';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';

export const SocMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Instagram = styled(SlSocialInstagram)`
  width: 24px;
  height: 24px;

  color: ${props =>
    props.whiteToBlack || props.whiteToGreen
      ? props.theme.colors.white[100]
      : props.theme.colors.green[200]};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &:hover {
    color: ${props => {
      switch (props.variant) {
        case 'whiteToBlack':
          return props.theme.colors.black[500];
        case 'whiteToGreen':
          return props.theme.colors.green[200];
        case 'greenToBlack':
          return props.theme.colors.black[500];
        case 'greenToWhite':
          return props.theme.colors.white[100];
        default:
          return props.theme.colors.green[200];
      }
    }};
  }
`;

export const Twitter = styled(FaTwitter)`
  width: 25px;
  height: 22px;
  margin-right: 20px;

  color: ${props =>
    props.whiteToBlack || props.whiteToGreen
      ? props.theme.colors.white[100]
      : props.theme.colors.green[200]};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &:hover {
    color: ${props => {
      switch (props.variant) {
        case 'whiteToBlack':
          return props.theme.colors.black[500];
        case 'whiteToGreen':
          return props.theme.colors.green[200];
        case 'greenToBlack':
          return props.theme.colors.black[500];
        case 'greenToWhite':
          return props.theme.colors.white[100];
        default:
          return props.theme.colors.green[200];
      }
    }};
  }
`;

export const YouTube = styled(IoLogoYoutube)`
  width: 28px;
  height: 22px;
  margin-right: 20px;

  color: ${props =>
    props.whiteToBlack || props.whiteToGreen
      ? props.theme.colors.white[100]
      : props.theme.colors.green[200]};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &:hover {
    color: ${props => {
      switch (props.variant) {
        case 'whiteToBlack':
          return props.theme.colors.black[500];
        case 'whiteToGreen':
          return props.theme.colors.green[200];
        case 'greenToBlack':
          return props.theme.colors.black[500];
        case 'greenToWhite':
          return props.theme.colors.white[100];
        default:
          return props.theme.colors.green[200];
      }
    }};
  }
`;

export const Facebook = styled(SiFacebook)`
  width: 26px;
  height: 26px;
  margin-right: 20px;

  color: ${props =>
    props.whiteToBlack || props.whiteToGreen
      ? props.theme.colors.white[100]
      : props.theme.colors.green[200]};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &:hover {
    color: ${props => {
      switch (props.variant) {
        case 'whiteToBlack':
          return props.theme.colors.black[500];
        case 'whiteToGreen':
          return props.theme.colors.green[200];
        case 'greenToBlack':
          return props.theme.colors.black[500];
        case 'greenToWhite':
          return props.theme.colors.white[100];
        default:
          return props.theme.colors.green[200];
      }
    }};
  }
`;
