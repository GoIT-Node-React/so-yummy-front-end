import notFoundDesktop1x from 'images/anySearch/anySearch-1xdesc.png';
import notFoundDesktop2x from 'images/anySearch/anySearch-2xdesc.png';
import notFoundTablet1x from 'images/anySearch/anySearch-1xtab.png';
import notFoundTablet2x from 'images/anySearch/anySearch-2xtab.png';
import notFoundMobile1x from 'images/anySearch/anySearch-1xmob.png';
import notFoundMobile2x from 'images/anySearch/anySearch-2xmob.png';

import { NotFoundRecipePropTypes } from './NotFoundRecipe.props';
import {
  NotFoundRecipeImage,
  NotFoundRecipeText,
  NotFoundRecipeWrapper,
} from './NotFoundRecipe.styled';

export default function NotFoundRecipe({ message }) {
  return (
    <NotFoundRecipeWrapper>
      <NotFoundRecipeImage>
        <source
          srcSet={`${notFoundDesktop1x} 1x, ${notFoundDesktop2x} 2x`}
          media="(min-width:1440px)"
        />
        <source
          srcSet={`${notFoundTablet1x} 1x, ${notFoundTablet2x} 2x`}
          media="(min-width:768px)"
        />
        <source
          srcSet={`${notFoundMobile1x} 1x, ${notFoundMobile2x} 2x`}
          media="(max-width:767.98px)"
        />
        <img
          src={`${notFoundMobile1x} 1x`}
          loading="lazy"
          alt="Not found recipes"
        />
      </NotFoundRecipeImage>
      <NotFoundRecipeText>{message}</NotFoundRecipeText>
    </NotFoundRecipeWrapper>
  );
}

NotFoundRecipe.propTypes = NotFoundRecipePropTypes;
