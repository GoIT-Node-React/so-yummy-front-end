export const styles = isTablet => ({
  control: () => ({
    width: isTablet ? '398px' : '194px',
    height: isTablet ? '59px' : '53px',
    borderRadius: '6px',
    backgroundColor: '#F5F5F5',
    padding: isTablet ? '16px 18px' : '16px',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: '0',
    margin: '0',
    height: isTablet ? '27px' : '20px',
  }),
  input: baseStyles => ({
    ...baseStyles,
    caretColor: '#BDBDBD',
    padding: '0',
    margin: '0',
    height: isTablet ? '27px' : '20px',
    fontSize: isTablet ? '18px' : '14px',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    color: '#23262A',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    fontSize: isTablet ? '18px' : '14px',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    color: 'rgba(0, 0, 0, 0.5)',
  }),
  option: () => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: '-2%',
    marginBottom: '6px',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    width: isTablet ? '398px' : '194px',
    height: isTablet ? '172px' : '154px',
    borderRadius: '6px',
    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    width: isTablet ? '398px' : '194px',
    height: isTablet ? '172px' : '154px',
    padding: '8px 4px 8px 18px',
    fontSize: isTablet ? '14px' : '12px',
    overflowY: 'scroll',
    cursor: 'pointer',
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#E7E5E5',
      height: '93px',
      width: isTablet ? '6px' : '4px',
      borderRadius: '12px',
    },
    '::-webkit-scrollbar-track': {
      background: '#FFFFFF',

      borderRadius: '12px',
      width: isTablet ? '6px' : '4px',
    },
    '::-webkit-scrollbar': {
      borderRadius: '12px',
      width: isTablet ? '6px' : '4px',
    },
  }),
});
