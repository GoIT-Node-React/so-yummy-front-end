import { useState } from 'react';
import Select from 'react-select';
import { CustomInput, Input } from './MesureSelect.styled';
export default function MesureSelect({ setValue }) {
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
    setValue(`${newValue} ${selectValue}`);
  };
  return (
    <CustomInput>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="0"
      />
      <Select
        options={options}
        value={{ value: selectValue, label: selectValue }}
        onChange={selectedOption => {
          setSelectValue(selectedOption.value);
          setValue(`${inputValue} ${selectedOption.value}`);
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
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#23262A',
            letterSpacing: '-0.02em',
          }),
          valueContainer: () => ({
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0',
            margin: '0',
            height: '20px',
          }),
          option: (_, state) => ({
            fontSize: '12px',
            lineHeight: '1.5',
            color: state.isSelected ? '#8BAA36' : 'rgba(0, 0, 0, 0.5)',

            marginBottom: '4px',
            letterSpacing: '-2%',
            cursor: 'pointer',
          }),

          menu: baseStyles => ({
            ...baseStyles,
            width: '104px',
            height: '112px',
            borderRadius: '6px',
            boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
            paddingLeft: '28px',
            paddingTop: '16px',

            marginLeft: '-16px',
          }),
          menuList: () => ({
            width: '104px',
            height: '112px',
          }),
        }}
      />
    </CustomInput>
  );
}
