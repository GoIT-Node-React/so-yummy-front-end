export const styles = isTablet => ({
  container: () => ({
    marginLeft: 'auto',
    paddingRight: '8px',
    height: '53px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    color: '#8BAA36',
    width: '9px',
    height: '4.5px',
    cursor: 'pointer',
    marginBottom: '14px',
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    fontSize: isTablet ? '18px' : '14px',
    lineHeight: '1.5',
    color: '#23262A',
    letterSpacing: '-0.02em',
  }),
  valueContainer: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0',
    margin: '0',
    height: isTablet ? '27px' : '20px',
  }),
  option: (_, state) => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    color: state.isSelected ? '#8BAA36' : 'rgba(0, 0, 0, 0.5)',

    marginBottom: '4px',
    letterSpacing: '-2%',
    cursor: 'pointer',
  }),

  menu: baseStyles => ({
    ...baseStyles,
    width: isTablet ? '117px' : '104px',
    height: isTablet ? '128px' : '112px',
    borderRadius: '6px',
    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',

    marginLeft: '-16px',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    width: isTablet ? '117px' : '104px',
    height: isTablet ? '128px' : '112px',
    paddingLeft: isTablet ? '37px' : '28px',
    paddingTop: '8px',
    overflowY: 'scroll',
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#E7E5E5',
      height: '93px',
      width: '4px',
      borderRadius: '12px',
    },
    '::-webkit-scrollbar-track': {
      background: '#FFFFFF',

      borderRadius: '12px',
      width: '4px',
    },
    '::-webkit-scrollbar': {
      borderRadius: '12px',
      width: '4px',
    },
  }),
});
