import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';

import {
  ShoppingListHeader,
  HeaderText,
  NumberRemoveWrap,
  ShoppingListItem,
  ProductNameAndImgWrap,
  NumberAndDelWrap,
  Img,
  ProductName,
  NumberWrap,
  Number,
  Btn,
  BtnWrap,
} from './styled';

import {
  getShoppingListThunk,
  removeIngredientFromShoppingListThunk,
} from '../../redux/shoppingList/shoppingList.thunk';
import NotFoundRecipe from 'components/NotFoundRecipe/NotFoundRecipe';
import { searchRecipesMessage } from 'constants/message';

const ShopingListSection = () => {
  const { list } = useSelector(state => state.shoppingList);

  const dispatch = useDispatch();

  const onDelete = ingredientId => {
    dispatch(removeIngredientFromShoppingListThunk(ingredientId));
  };

  useEffect(() => {
    dispatch(getShoppingListThunk());
  }, [dispatch]);

  return (
    <div>
      {list.length === 0 ? (
        <NotFoundRecipe message={searchRecipesMessage.shoppingListNotFound} />
      ) : (
        <>
          <ShoppingListHeader>
            <HeaderText>Product</HeaderText>
            <NumberRemoveWrap>
              <HeaderText>Number</HeaderText>
              <HeaderText>Remove</HeaderText>
            </NumberRemoveWrap>
          </ShoppingListHeader>
          <ul>
            {list.map(({ _id, value, ingredient }) => {
              return (
                <ShoppingListItem key={_id}>
                  <ProductNameAndImgWrap>
                    <Img src={ingredient.thb} alt="" />
                    <ProductName>{ingredient.ttl}</ProductName>
                  </ProductNameAndImgWrap>
                  <NumberAndDelWrap>
                    <NumberWrap>
                      <Number>{value}</Number>
                    </NumberWrap>
                    <BtnWrap>
                      <Btn type="button" onClick={() => onDelete(_id)}>
                        <GrClose />
                      </Btn>
                    </BtnWrap>
                  </NumberAndDelWrap>
                </ShoppingListItem>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ShopingListSection;
