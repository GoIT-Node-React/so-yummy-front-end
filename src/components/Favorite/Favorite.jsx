import React from 'react';
import { useEffect, useState } from 'react';
import { getAllFavorites, deleteFavoriteById } from 'services/api/recipesApi';
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

const Favorite = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        await getAllFavorites(page, 4).then(data => {
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

  const handleDelete = async (id, event) => {
    console.log(id);
    if (event.target.disabled) {
      return;
    }
    event.target.disable = true;

    const result = await deleteFavoriteById(id);
    console.log(result);
    const newRecipes = allRecipes.filter(({ _id }) => _id !== id);
    setAllRecipes(newRecipes);

    await getAllFavorites(page, 4)
      .then(data => {
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
        console.log(error.message);
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
              allRecipes.map(({ _id, title, description, time, preview }) => {
                return (
                  <FavoriteItem>
                    <RecipeCard
                      key={_id}
                      id={_id}
                      trashClass={'lightBcg'}
                      title={title}
                      time={time}
                      text={description}
                      onDeleteRecipe={e => {
                        handleDelete(_id, e);
                      }}
                      to={`/recipe/${_id}`}
                      src={preview}
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
