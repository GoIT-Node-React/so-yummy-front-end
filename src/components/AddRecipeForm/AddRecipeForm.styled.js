import styled from '@emotion/styled';
import { MdPhotoCamera } from 'react-icons/md';

export const StyledLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.green[200]};
  position: relative;
  display: block;
  width: 279px;
  height: 268px;
  margin-bottom: 32px;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;
`;
export const FileUploader = styled.input`
  width: 279px;
  height: 268px;
  visibility: hidden;
`;
export const TextLabel = styled.label`
  display: block;
  width: 343px;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
`;
export const SelectContainer = styled.div`
  position: absolute;
  width: 120px;

  top: 0;
  right: 5px;
`;
export const TextInput = styled.input`
  position: relative;
  display: block;
  margin-bottom: 24px;
  width: 343px;
  height: 18px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
  z-index: -10;
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
`;
export const StyledCamera = styled(MdPhotoCamera)`
  width: 20px;
  height: 18px;
  color: ${({ theme }) => theme.colors.white[200]};
`;
