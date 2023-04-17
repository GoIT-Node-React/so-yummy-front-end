import styled from '@emotion/styled';

import { MdPhotoCamera } from 'react-icons/md';

export const FileUploader = styled.input`
  width: 279px;
  height: 268px;
  visibility: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 279px;
  height: 268px;

  border-radius: ${({ theme }) => theme.radii.lg};

  transition: ${({ theme }) => theme.transitions.create(['opacity'])};

  &:hover {
    opacity: 0.3;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 357px;
    height: 344px;
  }
`;

export const CameraContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.colors.white[200]};
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.white[200]};
`;

export const StyledCamera = styled(MdPhotoCamera)`
  width: 20px;
  height: 18px;

  color: currentColor;
`;
