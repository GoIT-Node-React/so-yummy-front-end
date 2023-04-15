import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { PatternFormat } from 'react-number-format';
import Select from 'react-select';
import { options } from '../../data';
import { theme } from '../../../../theme/theme';
import { CustomInput, Input } from './Mesure.styled';
import { styles } from './Measure.style';

export const Measure = React.forwardRef(({ onChange, name }, ref) => {
  const isTablet = useMediaQuery({
    query: `(min-width: calc(${theme.breakpoints[1]} - 1px))`,
  });

  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('tbs');

  const handleInputChange = values => {
    const newValue = values.value;
    setInputValue(newValue);
    onChange(`${newValue} ${selectValue}`);
  };

  return (
    <CustomInput>
      <PatternFormat
        placeholder="0"
        name={name}
        ref={ref}
        displayType="input"
        format="###"
        customInput={Input}
        valueIsNumericString={true}
        value={inputValue}
        onValueChange={handleInputChange}
      />
      <Select
        options={options}
        value={{ value: selectValue, label: selectValue }}
        onChange={selectedOption => {
          setSelectValue(selectedOption.value);
          onChange(`${inputValue} ${selectedOption.value}`);
        }}
        isSearchable={false}
        styles={styles(isTablet)}
      />
    </CustomInput>
  );
});
