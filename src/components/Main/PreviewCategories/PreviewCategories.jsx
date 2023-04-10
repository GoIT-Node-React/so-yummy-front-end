import { OtherCatBtn } from './Buttons';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Category from './Category';
import { Box, Section } from './PreviewCategories.styled';
import { getMainPageRecipesService } from 'services/recipe.service';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMaitPageRecipes = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getMainPageRecipesService();

      setAllCategories(Object.entries(data.categories));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMaitPageRecipes();
  }, [getMaitPageRecipes]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMainPage()).then(result => {
  //
  //   });
  // }, [dispatch]);

  return (
    <Section>
      {/* {allCategories.map(item => (
        <Category key={item[0]} data={item} />
      ))} */}
      <Box>
        <OtherCatBtn>Other categories</OtherCatBtn>
      </Box>
    </Section>
  );
};

export default PreviewCategories;
