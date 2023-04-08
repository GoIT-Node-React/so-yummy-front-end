import { useEffect, useState } from 'react';
import { RecipeIngredietItemPropTypes } from './RecipeIngredietItem.props';
import {
  RecipeIngredient,
  RecipeIngredientContainer,
  RecipeIngredientFavorite,
  RecipeIngredientFavoriteCheckbox,
  RecipeIngredientFavoriteCheckboxLoader,
  RecipeIngredientFavoriteInput,
  RecipeIngredientThumb,
  RecipeIngredientTitle,
  RecipeIngredietMeasure,
  RecipeIngredietMeasureText,
} from './RecipeIngredietItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/shoppingList/shoppingList.selectors';
import {
  addIngredientToShoppingListThunk,
  removeIngredientFromShoppingListThunk,
} from 'redux/shoppingList/shoppingList.thunk';
import Loader from 'components/common/Loader/Loader';
import { processingError } from 'helpers';

export default function RecipeIngredietItem({ recipeId, ingredient }) {
  const { ttl, measure, thb } = ingredient;

  const dispatch = useDispatch();
  const { data: shoppingList } = useSelector(selectShoppingList);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientInShoppingList, setIngredientInShoppingList] =
    useState(null);

  useEffect(() => {
    const findIngredient = shoppingList.find(
      ing => ing.ingredient._id === ingredient._id && ing.recipeId === recipeId
    );

    setIngredientInShoppingList(findIngredient);
    setIsChecked(!!findIngredient);
  }, [ingredient, recipeId, shoppingList]);

  const changeHandler = async () => {
    setIsLoading(true);
    try {
      if (ingredientInShoppingList) {
        await dispatch(
          removeIngredientFromShoppingListThunk(ingredientInShoppingList._id)
        );
      } else {
        await dispatch(
          addIngredientToShoppingListThunk({
            ingredientId: ingredient._id,
            value: ingredient.measure,
            recipeId: recipeId,
          })
        );
      }
    } catch (error) {
      processingError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RecipeIngredient>
      <RecipeIngredientContainer>
        <RecipeIngredientThumb src={thb} alt={ttl} />
        <RecipeIngredientTitle>{ttl}</RecipeIngredientTitle>
      </RecipeIngredientContainer>
      <RecipeIngredietMeasure>
        <RecipeIngredietMeasureText>{measure}</RecipeIngredietMeasureText>
      </RecipeIngredietMeasure>
      <RecipeIngredientFavorite>
        {isLoading ? (
          <RecipeIngredientFavoriteCheckboxLoader>
            <Loader />
          </RecipeIngredientFavoriteCheckboxLoader>
        ) : (
          <RecipeIngredientFavoriteCheckbox checked={isChecked}>
            <RecipeIngredientFavoriteInput
              type="checkbox"
              checked={isChecked}
              onChange={changeHandler}
            />
          </RecipeIngredientFavoriteCheckbox>
        )}
      </RecipeIngredientFavorite>
    </RecipeIngredient>
  );
}

RecipeIngredietItem.propTypes = RecipeIngredietItemPropTypes;
