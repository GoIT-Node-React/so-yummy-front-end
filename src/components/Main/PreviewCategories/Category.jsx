import React from 'react';
import { RecipeCard } from './RecipeCard';
import { useMediaQuery } from 'react-responsive';
import { SeeAllBtn } from './Buttons';
import { Box, Container, ListRecipe, Title } from './Category.styled';

const Category = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTab = useMediaQuery({ minWidth: 768 });
  const isDesc = useMediaQuery({ minWidth: 1440 });
  return (
    <Container>
      <Title>{data[0].charAt(0).toUpperCase() + data[0].slice(1)}</Title>
      {isDesc ? (
        <ListRecipe>
          {data[1].map(({ category, description, preview, title, _id }) => (
            <li key={_id}>
              <RecipeCard
                id={_id}
                image={preview}
                altText={description}
                text={title}
              />
            </li>
          ))}
        </ListRecipe>
      ) : (
        (isTab && (
          <ListRecipe>
            {data[1]
              .slice(0, -2)
              .map(({ category, description, preview, title, _id }) => (
                <li key={_id}>
                  <RecipeCard
                    id={_id}
                    image={preview}
                    altText={description}
                    text={title}
                  />
                </li>
              ))}
          </ListRecipe>
        )) ||
        (isMobile && (
          <ListRecipe>
            {data[1]
              .slice(0, -3)
              .map(({ category, description, preview, title, _id }) => (
                <li key={_id}>
                  <RecipeCard
                    id={_id}
                    image={preview}
                    altText={description}
                    text={title}
                  />
                </li>
              ))}
          </ListRecipe>
        ))
      )}

      <Box>
        <SeeAllBtn
          href={`/categories/${
            data[0].charAt(0).toUpperCase() + data[0].slice(1)
          }`}
        >
          See all
        </SeeAllBtn>
      </Box>
    </Container>
  );
};
export default Category;