import styled from '@emotion/styled';
import { Container } from 'components/common/Container.styled';

export const Recipe = styled.section`
    margin-top: -64px;

    width: 100%;
    height: 100%;
`;

export const RecipeContainer = styled(Container)`
    --hero-height: 455px;
    --hero_margin-bottom: 32px;

    position: relative;

    padding-top: calc(var(--hero-height) + var(--hero_margin-bottom));
    padding-bottom: 100px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        --hero-height: 495px;
        --hero_margin-bottom: 50px;

        padding-bottom: 200px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
        --hero-height: 493px;
    }
`;
