import styled from '@emotion/styled';
import {
    SearchFormButton as StyledSearchFormButton,
    FormWrapper as StyledFormWrapper,
} from '../../SearchForm/SearchForm.styled';

export const SearchFormButton = styled(StyledSearchFormButton)`
    background-color: ${props => props.theme.colors.black[400]};
    color: ${props => props.theme.colors.white[200]};

    &:hover {
        background-color: ${props => props.theme.colors.green[200]};
    }
`;

export const FormWrapper = styled(StyledFormWrapper)`
    margin: 0 auto;
    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        margin: 0;
    }
`;
