import React from 'react';
import { useEffect, useState } from 'react';

import RecipeCard from '../common/RecipeCard/RecipeCard';
import NothingAdd from './NothingAdd/NothingAdd';
import {
  FavoriteTitle,
  FavoriteContainer,
  FavoriteList,
  FavoriteItem,
} from './Favorite.styled';
import Loader from '../common/Loader/Loader';
import { Container } from 'components/common/Container.styled';
import {
  deleteRecipeFromFavoriteService,
  getFavoritesService,
} from 'services/favorite.service';

const Favorite = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        await getFavoritesService(page, 4).then(({ data }) => {
          if (!data) {
            return;
          }
          const pageCounts = Math.ceil(data.total / 4);
          if (pageCounts > 1) {
            setTotalPage(pageCounts);
          }
          setAllRecipes(data.recipes);
        });
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  }, [page]);

  const handleDelete = async id => {
    const result = await deleteRecipeFromFavoriteService(id);
    console.log(result);
    const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
    setAllRecipes(newRecipes);

    await getFavoritesService(page, 4)
      .then(({ data }) => {
        if (data.total === 4) {
          setPage(1);
          setTotalPage(null);
          return;
        }

        const pageCounts = Math.ceil(data.total / 4);
        if (pageCounts > 1) {
          setTotalPage(pageCounts);

          if (pageCounts < page) {
            setPage(pageCounts);
            return;
          }
        } else {
          setTotalPage(null);
        }
        setAllRecipes(data.recipes ?? []);
      })
      .catch(error => {
        console.log(error.message, totalPage);
      });
  };
  return (
    <>
      <Container>
        <FavoriteContainer>
          <FavoriteTitle>Favorites</FavoriteTitle>
          <FavoriteList>
            {isLoading ? (
              <Loader />
            ) : allRecipes.length !== 0 && !isLoading ? (
              allRecipes.map(recipe => {
                return (
                  <FavoriteItem key={recipe._id}>
                    <RecipeCard
                      recipe={recipe}
                      onDelete={() => {
                        handleDelete(recipe._id);
                      }}
                      to={`/recipe/${recipe._id}`}
                    />
                  </FavoriteItem>
                );
              })
            ) : (
              <NothingAdd />
            )}
          </FavoriteList>
        </FavoriteContainer>
      </Container>
    </>
  );
};

export default Favorite;
