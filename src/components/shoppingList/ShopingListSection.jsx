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

const ShopingListSection = () => {
  const { list } = useSelector(
    // (state) => console.log(state)
    state => state.shoppingList
  );

  const dispatch = useDispatch();

  const onDelete = ingredientId => {
    dispatch(removeIngredientFromShoppingListThunk(ingredientId));
  };

  useEffect(() => {
    dispatch(getShoppingListThunk());
    // eslint-disable-next-line
  }, []);

  console.log(list);

  return (
    <div>
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
    </div>
  );
};

export default ShopingListSection;
