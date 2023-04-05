import styled from '@emotion/styled';
import { MdPhotoCamera } from 'react-icons/md';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
export const StyledLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.green[200]};
  position: relative;
  display: block;
  width: 279px;
  height: 268px;
  margin: 0 auto 32px auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.lg};
`;
export const ImageContainer = styled.div`
  width: 279px;
  height: 268px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: ${({ theme }) => theme.radii.lg};
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
  display: block;
  margin-bottom: 24px;
  width: 343px;
  height: 18px;
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.gray[600]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
`;
export const Border = styled.p`
  margin-bottom: 24px;
  width: 343px;
  height: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
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
export const FlexContainer = styled.div`
  width: 343px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 18px;
`;
export const TitleContainer = styled.div`
  width: 343px;
  display: flex;
  justify-content: space-between;
  margin-top: 66px;
  margin-bottom: 28px;
`;
export const CounterContainer = styled.div`
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92px;
  height: 28px;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
`;
export const Plus = styled(HiPlus)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.colors.green[200]};
  cursor: pointer;
`;
export const Minus = styled(HiMinus)`
  width: 14px;
  height: 14px;
  color: rgba(51, 51, 51, 0.3);
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green[200]};
  }
`;
export const Counter = styled.p`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
export const CounterButton = styled.button`
  display: flex;
  padding: 0;
  background-color: transparent;
  &:disabled {
    cursor: not-allowed;
  }
`;
export const UtilContainer = styled.div`
  margin-top: 44px;
`;
export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 1;
  letter-spacing: -2%;
`;
export const Close = styled(GrClose)`
  margin: auto 0;
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
`;
export const StyledTextarea = styled.textarea`
  width: 343px;
  height: 154px;
  border: none;
  padding: 10px 16px;
  margin-bottom: 18px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.white[400]};
  border-radius: ${({ theme }) => theme.radii.md};
  caret-color: ${({ theme }) => theme.colors.gray[600]};
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }
`;
