import { Tab, Tabs, styled } from '@mui/material';

export const CategoriesPageSection = styled('section')(({ theme }) => ({
  height: '100%',
  paddingTop: '50px',
  paddingBottom: '100px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '72px',
    paddingBottom: '200px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '100px',
  },
}));

export const CategoriesPageTitle = styled('h2')(({ theme }) => ({
  fontSeight: 600,
  fontSize: '28px',
  lineHeight: 1,

  letterSpacing: '-0.02em',
  fontFeatureSettings: "'liga' off",

  color: '#001833',

  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '44px',
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  position: 'relative',

  '& ::before': {
    content: '""',

    position: 'absolute',
    left: 0,
    bottom: 0,

    display: 'block',
    width: '100vw',
    height: '2px',

    backgroundColor: '#E0E0E0',
  },

  '& .MuiTabs-root': {},

  '& .MuiTabs-scroller': {
    '& .MuiTabs-indicator': {
      backgroundColor: '#8BAA36',
    },
  },
  '& .MuiTabs-flexContainer': {
    gap: '28px',

    '& :hover': {
      color: '#8BAA36',
    },

    [theme.breakpoints.up('md')]: {
      gap: '55px',
    },
    [theme.breakpoints.up('lg')]: {},
  },

  '& .MuiTab-root': {
    textTransform: 'capitalize',
    // minWidth: 'unset',
    fontSize: '18px',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: '18px',
    // borderColor: '#8BAA36',
  },

  '& .MuiTabScrollButton-root': {
    width: '20px',
  },

  '& svg': {
    stroke: '#8BAA36',
    strokeWidth: '2px',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  padding: '0',
  paddingBottom: '28px',
  color: '#BDBDBD',
  '&.Mui-selected': {
    color: '#8BAA36',
  },
}));
