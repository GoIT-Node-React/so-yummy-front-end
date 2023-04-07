// import React, { useEffect, useState } from 'react'
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
const ingredients = [
  {
    _id: {
      $oid: '640c2dd963a319ea671e3665',
    },
    number: '5',
    ttl: 'Baking Powder',
    desc: 'Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods. It works by releasing carbon dioxide gas into a batter or dough through an acid-base reaction, causing bubbles in the wet mixture to expand and thus leavening the mixture. The first single-acting baking powder was developed by Birmingham based food manufacturer Alfred Bird in England in 1843. The first double-acting baking powder was developed by Eben Norton Horsford in America in the 1860s.',
    t: '',
    thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564216/c6pfcmnzzmra22yqgyjq.png',
  },
  {
    _id: {
      $oid: '640c2dd963a319ea671e365e',
    },
    number: '400g',
    ttl: 'Pork',
    desc: 'Pork is the culinary name for the flesh of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC.\r\n\r\nPork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPig is the most popular meat in the Eastern and non-Muslim parts of Southeastern Asia (Indochina, Philippines, Singapore, East Timor) and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish, Muslim and Rastafarian dietary law, for religious reasons, with several suggested possible causes.',
    t: '',
    thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/lxxzs0c6xjnnwgznkilw.png',
  },
  {
    _id: {
      $oid: '640c2dd963a319ea671e368b',
    },
    number: '1',
    ttl: 'Celery Salt',
    desc: 'A seasoning made from ground celery seeds and salt, often used as a flavoring for snacks, seasonings, and condiments, such as Bloody Mary cocktails, pickles, and potato chips.',
    t: '',
    thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564674/bcgredpmdd787z5k7tpy.png',
  },
];
const ShopingListSection = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {

  // },[])
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
        {ingredients.map(({ _id, number, ttl, thb }) => {
          return (
            <ShoppingListItem key={_id}>
              <ProductNameAndImgWrap>
                <Img src={thb} alt="" />
                <ProductName>{ttl}</ProductName>
              </ProductNameAndImgWrap>
              <NumberAndDelWrap>
                <NumberWrap>
                  <Number>{number}</Number>
                </NumberWrap>
                <BtnWrap>
                  <Btn type="button">x</Btn>
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
