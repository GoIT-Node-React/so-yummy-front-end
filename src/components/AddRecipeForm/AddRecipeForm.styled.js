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
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin: 0 32px 0 0;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    width: 357px;
    height: 344px;
    margin: 0 50px 0 0;
  }
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
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 393px;

    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
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
  height: 39px;
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.gray[600]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 18px;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 393px;
    height: 42px;
    margin-bottom: 32px;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      bottom: 18px;
      letter-spacing: -2%;
    }
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    margin-bottom: 40px;
  }
`;
export const Border = styled.p`
  margin-bottom: 24px;
  width: 343px;
  height: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 393px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[2]} - 1px)) {
    margin-bottom: 40px;
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
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 704px;
    margin-bottom: 24px;
  }
`;
export const MediaContainer = styled.div`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    display: flex;
  }
`;
export const TitleContainer = styled.div`
  width: 343px;
  display: flex;
  justify-content: space-between;
  margin-top: 66px;
  margin-bottom: 28px;
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-top: 68px;
    margin-bottom: 32px;
    width: 704px;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-top: 72px;
    width: 609px;
  }
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
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 110px;
    height: 32px;
    padding: 6px 17px;
  }
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
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-top: 100px;
  }
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
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    width: 20px;
    height: 20px;
    margin-left: 127px;
  }
`;
export const StyledTextarea = styled.textarea`
  width: 343px;
  height: 154px;
  border: none;
  padding: 10px 16px;

  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.white[400]};
  border-radius: ${({ theme }) => theme.radii.md};
  caret-color: ${({ theme }) => theme.colors.gray[600]};
  resize: none;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints[1]} - 1px)) {
    margin-top: 32px;
    margin-bottom: 2px;
    width: 505px;
    height: 224px;
    padding: 16px 22px;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }
`;
export const ErrorMessage = styled.span`
  position: absolute;
  display: block;
  bottom: -20px;
  color: #e74a3b;
  font-size: ${({ theme }) => theme.fontSizes[1]};
`;
