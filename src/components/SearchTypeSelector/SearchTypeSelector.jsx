import { useMediaQuery } from 'react-responsive';
import {
  SearchTypeSelectorWrapper,
  SearchTypeSelectorText,
  SelectControl,
} from './SearchTypeSelector.styled';
import React, { useState } from 'react';
import { useSearchContext } from 'contexts/Search.context';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

const searchOptionByType = type => options.find(o => o.value === type);

export default function SearchTypeSelector() {
  const { type, updateType } = useSearchContext();
  const [selectValue, setSelectValue] = useState(() =>
    searchOptionByType(type)
  );

  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });

  const onChangeFunc = value => {
    updateType(value.value);
    setSelectValue(value);
  };

  return (
    <SearchTypeSelectorWrapper>
      <SearchTypeSelectorText>Search by:</SearchTypeSelectorText>
      <div
        className="search-type-selector"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: 'red',
          }),
          dropdownIndicator: () => ({
            color: '#8BAA36',
          }),
        }}
      >
        <SelectControl
          className="selected"
          value={selectValue}
          onChange={onChangeFunc}
          options={options}
          placeholder="Title"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: '146px',
              height: '38px',
              paddingLeft: '8px',
              paddingRight: '8px',
              borderColor: 'black',
              backgroundColor: 'rgba(250, 250, 250, 1)',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: isMobile ? '12px' : '14px',
              lineHeight: '0.7',
              letterSpacing: '0.02em',
              color: 'rgba(0, 0, 0, 1)',
              borderRadius: '6px 6px 6px 6px ',
              border: 'none',
              boxShadow: 'none',
              cursor: 'pointer',
            }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              paddingTop: '4px',
              paddingBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              color: 'grey',
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              marginTop: '0',
              marginBottom: '0',
              height: '76px',
              borderRadius: '6px 6px  6px 6px',
              borderColor: 'transparent',
              backgroundColor: 'rgba(250, 250, 250, 1)',
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '4px',
              paddingBottom: '4px',
              boxShadow: 'none',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '6px',
              borderColor: 'transparent',
              backgroundColor: state.isFocused
                ? 'rgba(245, 245, 245, 1)'
                : 'rgba(250, 250, 250, 1)',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: isMobile ? '12px' : '14px',
              lineHeight: '0.7',
              letterSpacing: '0.02em',
              color: 'grey',
              height: '28px',
              cursor: 'pointer',

              borderRadius: '6px 6px 6px 6px ',
            }),
            dropdownIndicator: () => ({
              color: '#8BAA36',
            }),
            indicatorSeparator: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'transparent',
              color: 'red',
            }),
          }}
        />
      </div>
    </SearchTypeSelectorWrapper>
  );
}
