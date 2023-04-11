import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 130%;
  right: 0;
  z-index: 2;

  padding: 18px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.green[200]};

  background-color: ${props => props.theme.colors.white[100]};
  min-width: 161px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    row-gap: 32px;
    min-width: 177px;
    border: none;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  column-gap: 37px;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    column-gap: 53px;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.6;

  color: ${props => props.theme.colors.black[200]};
`;

export const FigureButtonText = styled.p`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.5;
  color: ${props => props.theme.colors.white[200]};
`;

const EditBtnWrapper = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  text-transform: none;
`;

export const FigureButtonInnerWrapper = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const ArrowIcon = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.75 9.5H12.75"
          stroke="#FAFAFA"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4.25L14.25 9.5L9 14.75"
          stroke="#FAFAFA"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const EditButton = ({ HandleEditPopupShow, onClose }) => {
  const handleOnClick = () => {
    onClose();
    HandleEditPopupShow();
  };
  return (
    <EditBtnWrapper onClick={handleOnClick}>
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.62571 11.5323C1.67166 11.1188 1.69463 10.9121 1.75719 10.7188C1.81269 10.5474 1.89111 10.3842 1.99031 10.2338C2.10213 10.0642 2.24922 9.91713 2.5434 9.62295L9.91636 2.25001C10.5607 1.60568 11.6054 1.60568 12.2497 2.25001V2.25001C12.894 2.89434 12.894 3.93901 12.2497 4.58334L4.87673 11.9563C4.58255 12.2505 4.43546 12.3976 4.26589 12.5094C4.11546 12.6086 3.9523 12.687 3.78085 12.7425C3.58761 12.8051 3.38087 12.828 2.96738 12.874L1.45801 13.0417L1.62571 11.5323Z"
          stroke="#23262A"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </EditBtnWrapper>
  );
};
