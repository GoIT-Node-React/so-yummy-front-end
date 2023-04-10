import notFoundFirstDesctop from '../../images/anySearch/anySearch-1xdesc.png';
import notFoundSecondtDesctop from '../../images/anySearch/anySearch-2xdesc.png';
import notFoundFirstTablet from '../../images/anySearch/anySearch-1xtab.png';
import notFoundSecondTablet from '../../images/anySearch/anySearch-2xtab.png';
import notFoundFirstMobile from '../../images/anySearch/anySearch-1xmob.png';
import notFoundSecondtMobile from '../../images/anySearch/anySearch-2xmob.png';

import {
  SearchRecipesMessageWrapper,
  SearchRecipesMessageImage,
  SearchRecipesMessageText,
} from './SearchRecipesMessage.styled';

export default function SearchRecipesMessage({ message }) {
  return (
    <SearchRecipesMessageWrapper>
      <SearchRecipesMessageImage>
        <source
          srcSet={`${notFoundFirstDesctop} 1x, ${notFoundSecondtDesctop} 2x`}
          media="(min-width:1440px)"
        />
        <source
          srcSet={`${notFoundFirstTablet} 1x, ${notFoundSecondTablet} 2x`}
          media="(min-width:768px)"
        />
        <source
          srcSet={`${notFoundFirstMobile} 1x, ${notFoundSecondtMobile} 2x`}
          media="(max-width:767.98px)"
        />
        <img
          src={`${notFoundFirstMobile} 1x`}
          loading="lazy"
          alt="Not found recipes"
        />
      </SearchRecipesMessageImage>
      <SearchRecipesMessageText>{message}</SearchRecipesMessageText>
    </SearchRecipesMessageWrapper>
  );
}
