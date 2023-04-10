import {StyledOtherCatBtn, StyledSeeAllBtn} from './Buttons.styled'
import { Link } from 'react-router-dom';

export const OtherCatBtn = ({ children }) => {
    return (
      <StyledOtherCatBtn>
        <Link role="button" to="/categories">
          {children}
        </Link>
      </StyledOtherCatBtn>
    );
  };

  export const SeeAllBtn = ({ children, href }) => {
    return (
      <StyledSeeAllBtn>
        <Link role="button" to={href}>
          {children}
        </Link>
      </StyledSeeAllBtn>
    );
  };