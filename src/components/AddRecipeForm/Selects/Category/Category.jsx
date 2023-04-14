import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';
import { theme } from 'theme';
import { categories } from '../../data';
import { styles } from './Category.style';

export const Category = React.forwardRef(({ value, name, onChange }, ref) => {
  const isTablet = useMediaQuery({
    query: `(min-width: calc(${theme.breakpoints[1]} - 1px))`,
  });

  return (
    <Select
      placeholder="Breakfast"
      ref={ref}
      value={value.value}
      name={name}
      options={categories}
      isSearchable={false}
      onChange={selectedOption => {
        onChange(selectedOption.value);
      }}
      styles={styles(isTablet)}
    />
  );
});
