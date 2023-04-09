import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledSeeAllBtn,
  } from 'components/Buttons/Buttons.styled';

export const SeeAllBtn = ({ children, href }) => {
    return (
      <StyledSeeAllBtn>
        <Link role="button" to={href}>
          {children}
        </Link>
      </StyledSeeAllBtn>
    );
  };