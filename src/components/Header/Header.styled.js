import styled from '@emotion/styled';
import { Container as StyledContainer } from '../common/Container.styled';

export const Container = styled(StyledContainer)`
    margin-top: 18px;
    height: 46px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        justify-content: start;
    }
`;
export const StyledHeader = styled.header``;
