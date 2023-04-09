import { OtherCatBtn } from 'components/Buttons/Buttons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPage } from 'redux/commonRecipes/commonOperations';
import Categories from './Categories';
import {
  Box,
  Section,
} from 'components/Main/PreviewCategories/PreviewCategories.styled';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainPage()).then(result => {
      const dishArray = Object.entries(result.payload);
      setAllCategories(dishArray);
    });
  }, [dispatch]);

  return (
    <Section>
      {allCategories.map((item, index) => (
        <Categories key={index} data={item} />
      ))}
      <Box>
        <OtherCatBtn>Other categories</OtherCatBtn>
      </Box>
    </Section>
  );
};

export default PreviewCategories;