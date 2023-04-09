import styled from 'styled-components';

export const StyledSeeAllBtn = styled.div`
  background: var(--primary-green);
  border-radius: 6px;
  border: none;
  min-width: 94px;
  padding: 10px 24px;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-white);
  text-align: center;
  cursor: pointer;
  &:hover {
    background: var(--secondary-black);
  }
`;