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
          control: baseStyles => ({
            ...baseStyles,
          }),
        }}
      >
        <SelectControl
          classNamePrefix="Select"
          value={selectValue}
          onChange={onChangeFunc}
          options={options}
          placeholder="Title"
          styles={{
            control: baseStyles => ({
              ...baseStyles,
            }),
            singleValue: baseStyles => ({
              ...baseStyles,
              paddingTop: '4px',
              paddingBottom: '4px',
              color: 'grey',
            }),
            menu: baseStyles => ({
              ...baseStyles,
            }),
            option: baseStyles => ({
              ...baseStyles,
            }),
            dropdownIndicator: () => ({
              color: '#8BAA36',
            }),
            indicatorSeparator: baseStyles => ({
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
