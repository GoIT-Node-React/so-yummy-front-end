export const styles = isTablet => ({
  dropdownIndicator: () => ({
    color: '#8BAA36',
    width: '10px',
    height: '5px',
    cursor: 'pointer',
    marginLeft: '12px',
    marginBottom: '12px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: () => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    color: '#000000',
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    border: 'none',
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1',
    marginBottom: '6px',
  }),
  valueContainer: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }),
  option: () => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: '4px',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    width: isTablet ? '132px' : '123px',
    height: isTablet ? '162px' : '144px',
    borderRadius: '6px',

    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
  }),
  menuList: baseStyles => ({
    ...baseStyles,

    width: isTablet ? '132px' : '123px',
    height: isTablet ? '162px' : '144px',
    padding: isTablet ? '8px 18px' : '8px 14px',
    borderColor: 'transparent',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    marginLeft: isTablet ? '-3px' : '3px',
    overflowY: 'scroll',
    cursor: 'pointer',
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
