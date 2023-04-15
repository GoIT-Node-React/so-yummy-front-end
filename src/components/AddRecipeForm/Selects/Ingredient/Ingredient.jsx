import React from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import { getIngredientsByTitleService } from 'services/ingredients.service';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { styles } from './Ingredient.style';

export const Ingredient = React.forwardRef(({ value, name, onChange }, ref) => {
  const isTablet = useMediaQuery({
    query: `(min-width: calc(${theme.breakpoints[1]} - 1px))`,
  });

  const convertData = async value => {
    const { data } = await getIngredientsByTitleService(value);

    return data.ingredients.map(ingredient => {
      return {
        value: ingredient._id,
        label: ingredient.ttl,
      };
    });
  };

  const promiseOptions = (inputValue, callback) => {
    convertData(inputValue).then(results => callback(results));
    return;
  };
  return (
    <AsyncSelect
      loadOptions={debounce(promiseOptions, 500)}
      placeholder="Ingredient"
      onChange={selectedOption => {
        onChange(selectedOption.value);
      }}
      ref={ref}
      value={value?.value}
      name={name}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? 'Start typing...' : 'Ingredients not found'
      }
      styles={styles(isTablet)}
    />
  );
});
