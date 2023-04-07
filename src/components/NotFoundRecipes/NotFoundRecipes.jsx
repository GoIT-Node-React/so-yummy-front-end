import {
  NotFoundRecipesWrapper,
  NotFoundRecipesImage,
  NotFoundRecipesText,
} from './NotFoundRecipes.styled';

import notFound from '../../images/anySearch/anySearch-1xdesc.png';

export default function NotFoundRecipes() {
  return (
    <NotFoundRecipesWrapper>
      <NotFoundRecipesImage src={notFound} alt="Not found recipes">
        {/* <source
          srcset="
          ../../images/anySearch/anySearch-1xdesc.png 1x,
          ../../images/anySearch/anySearch-2xdesc.png 2x,
        "
          media="(min-width:1440px)"
        />
        <source
          srcset="
          ../../images/anySearch/anySearch-1xtab.png 1x,
          ../../images/anySearch/anySearch-2xtab.png 2x,
        "
          media="(min-width:768px)"
        />
        <source
          srcset="
          ../../images/anySearch/anySearch-1xmob.png 1x,
          ../../images/anySearch/anySearch-2xmob.png 2x,
        "
          media="(max-width:375px)"
        />
        <img
          src="../../images/anySearch/anySearch-1xmob.png 1x,"
          loading="lazy"
          alt="Not found recipes"
        /> */}
      </NotFoundRecipesImage>
      <NotFoundRecipesText>
        Try looking for something else..
      </NotFoundRecipesText>
    </NotFoundRecipesWrapper>
  );
}
