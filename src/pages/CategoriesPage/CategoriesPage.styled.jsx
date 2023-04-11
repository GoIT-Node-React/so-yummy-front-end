import { Tab, Tabs, styled as mstyled } from '@mui/material';
import styled from '@emotion/styled';

export const CategoriesPageSection = styled.section`
  height: 100%;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 100px;
  }
`;

export const CategoriesPageTitle = styled.h2`
  margin-bottom: 50px;

  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #001833;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 100px;

    font-size: 44px;
  }
`;

export const StyledTabs = mstyled(Tabs)(({ theme }) => ({
  '& .MuiTabs-root': {},

  '& .MuiTabs-scroller': {
    '& .MuiTabs-indicator': {
      backgroundColor: '#8BAA36',
    },
  },
  '& .MuiTabs-flexContainer': {
    // gap: '28px',

    '& :hover': {
      color: '#8BAA36',
    },

    [theme.breakpoints.up('md')]: {
      // gap: '55px',
    },
    [theme.breakpoints.up('lg')]: {},
  },

  '& .MuiTab-root': {
    textTransform: 'capitalize',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: 1,
    color: '#E0E0E0',

    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },

  '& .MuiTabScrollButton-root': {
    display: 'none',
    width: '20px',

    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  '& svg': {
    stroke: '#8BAA36',
    strokeWidth: '2px',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}));

export const StyledTab = mstyled(Tab)(({ theme }) => ({
  padding: '0 14px',
  paddingBottom: '28px',

  fontSize: '14px',
  lineHeight: 1,
  color: '#E0E0E0',

  '&.Mui-selected': {
    color: '#8BAA36',
  },

  [theme.breakpoints.up('md')]: {
    padding: '0 27px',
    paddingBottom: '28px',

    fontSize: '18px',
  },
}));
