import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        margin-right: ${props => props.mr || '187px'};
    }
`;
