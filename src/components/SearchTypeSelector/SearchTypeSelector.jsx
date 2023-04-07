import { useMediaQuery } from 'react-responsive';

import {
  SearchTypeSelectorWrapper,
  SearchTypeSelectorText,
  SelectControl,
} from './SearchTypeSelector.styled';

import React from 'react';

import { RecipesContext } from '../../contexts/searchedRecipes/Provider';
import { useContext } from 'react';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

export default function SearchTypeSelector() {
  const { searchType, updatesearchType } = useContext(RecipesContext);

  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  // const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  // const isDesctop = useMediaQuery({ query: '(min-width: 1439px)' });

  console.log('searchType', searchType);

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
          defaultValue={searchType}
          onChange={updatesearchType}
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
              backgroundColor:
                state.isFocused || state.isSelected
                  ? 'rgba(245, 245, 245, 1)'
                  : 'rgba(250, 250, 250, 1)',
              // webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
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

// export function SearchTypeSelector() {
//   return (
//     <SearchTypeSelectorWrapper>
//       <SearchTypeSelectorText>Search by:</SearchTypeSelectorText>
//       <SearchTypeSelectorList>
//         <SearchTypeSelectorItem value="title">Title</SearchTypeSelectorItem>
//         <SearchTypeSelectorItem value="ingredients">
//           Ingredients
//         </SearchTypeSelectorItem>
//       </SearchTypeSelectorList>
//     </SearchTypeSelectorWrapper>
//   );
// }
