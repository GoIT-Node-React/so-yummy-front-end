import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';
import { theme } from '../../theme/theme';
import { CustomInput, Input } from './MesureSelect.styled';
import { NumericFormat } from 'react-number-format';
import { PatternFormat } from 'react-number-format';

export const MesureSelect = React.forwardRef(
  ({ onChange, onBlur, name, label }, ref) => {
    const isTablet = useMediaQuery({
      query: `(min-width: 767px)`,
    });

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('tbs');

    const options = [
      { value: `tbs`, label: 'tbs' },
      { value: `tsp`, label: 'tsp' },
      { value: `kg`, label: 'kg' },
      { value: `g`, label: 'g' },
    ];
    const handleInputChange = event => {
      const newValue = event.target.value;
      setInputValue(newValue);
      onChange(`${newValue} ${selectValue}`);
    };
    const MAX_LIMIT = 999;
    return (
      <CustomInput>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="0"
          name={name}
          ref={ref}
        />
        {/* <NumericFormat
          displayType="input"
          customInput={Input}
          valueIsNumericString={true}
          allowNegative={false}
          decimalScale={1}
          format="###"
          isAllowed={values => {
            const { floatValue } = values;
            console.log(values);
            return floatValue < MAX_LIMIT;
          }}
        />
        <PatternFormat displayType="input" format="###" customInput={Input} /> */}
        <Select
          options={options}
          value={{ value: selectValue, label: selectValue }}
          onChange={selectedOption => {
            setSelectValue(selectedOption.value);
            onChange(`${inputValue} ${selectedOption.value}`);
          }}
          isSearchable={false}
          styles={{
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
              paddingLeft: isTablet ? '37px' : '28px',
              paddingTop: isTablet ? '20px' : '16px',

              marginLeft: '-16px',
            }),
            menuList: () => ({
              width: isTablet ? '117px' : '104px',
              height: isTablet ? '128px' : '112px',
            }),
          }}
        />
      </CustomInput>
    );
  }
);
