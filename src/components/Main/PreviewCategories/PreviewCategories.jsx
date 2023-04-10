import { OtherCatBtn } from './Buttons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPage } from '../../../redux/commonRecipes/commonOperations';
import Category from './Category';
import {
  Box,
  Section,
} from './PreviewCategories.styled';

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
        <Category key={index} data={item} />
      ))}
      <Box>
        <OtherCatBtn>Other categories</OtherCatBtn>
      </Box>
    </Section>
  );
};

export default PreviewCategories;