import React from 'react';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { cookingTime } from '../../data';
import { styles } from './Time.style';

export const Time = React.forwardRef(({ value, name, onChange }, ref) => {
  const isTablet = useMediaQuery({
    query: `(min-width: calc(${theme.breakpoints[1]} - 1px))`,
  });

  return (
    <Select
      placeholder="5 min"
      ref={ref}
      value={value.value}
      name={name}
      onChange={selectedOption => {
        onChange(selectedOption.value);
      }}
      options={cookingTime}
      isSearchable={false}
      styles={styles(isTablet)}
    />
  );
});
