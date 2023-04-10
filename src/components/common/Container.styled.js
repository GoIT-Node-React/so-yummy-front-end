import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: 100%;
    padding-left: 16px;
    padding-right: 16px;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        width: ${props => props.theme.breakpoints[0]};
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        width: ${props => props.theme.breakpoints[1]};
        padding-left: 32px;
        padding-right: 32px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        width: ${props => props.theme.breakpoints[2]};
        padding-left: 100px;
        padding-right: 100px;
    }
`;
