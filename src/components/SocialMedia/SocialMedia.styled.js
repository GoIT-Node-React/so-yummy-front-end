import styled from '@emotion/styled';

import { FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';

export const SocMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.mt};
`;

export const Instagram = styled(FaInstagram)`
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

export const Facebook = styled(MdFacebook)`
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
