import {
  SearchedRecipes,
  SearchedRecipesListItem,
  SearchedRecipesItemImage,
  SearchedRecipesItemTitle,
} from './SearchedRecipesList.styled';

const recipes = {
  recipes: [
    {
      _id: '640cd5ac2d9fecf12e8897ef',
      title: 'Chicken Enchilada Casserole',
      description:
        'A Mexican-inspired casserole made with shredded chicken, enchilada sauce, tortillas, and cheese.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e8897f8',
      title: 'Irish stew',
      description:
        'A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.',
      thumb:
        'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e8897f7',
      title: 'Potato Gratin with Chicken',
      description:
        'A French-inspired dish made with sliced potatoes, chicken, cream, garlic, and cheese, baked until golden and bubbly.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e88980b',
      title: 'Tandoori chicken',
      description:
        'A popular Indian dish of chicken marinated in yogurt and spices, then roasted in a tandoor oven.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e889817',
      title: 'Chicken Fajita Mac and Cheese',
      description:
        'A fusion dish that combines the flavors of chicken fajitas with creamy mac and cheese.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e889819',
      title: 'Katsu Chicken curry',
      description: 'Japanese-style curry with breaded chicken',
      thumb:
        'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e889824',
      title: 'Coq au vin',
      description: 'French chicken stew with wine',
      thumb:
        'https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e889828',
      title: 'Venetian Duck Ragu',
      description: 'Slow-cooked duck ragu from Venice',
      thumb:
        'https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e889822',
      title: 'Crock Pot Chicken Baked Tacos',
      description: 'Tacos made with slow-cooked chicken',
      thumb:
        'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',
    },
    {
      _id: '640cd5ac2d9fecf12e889832',
      title: 'Chicken & mushroom Hotpot',
      description:
        'A savory casserole made with chicken, mushrooms, and other vegetables. Great for a chilly evening.',
      thumb:
        'https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg',
    },
  ],
  total: 38,
  limit: 10,
  page: 1,
};

export function SearchedRecipesList() {
  return (
    <SearchedRecipes>
      {recipes.recipes.map(({ _id, title, description, thumb }) => {
        return (
          <SearchedRecipesListItem key={_id}>
            <SearchedRecipesItemImage src={thumb}></SearchedRecipesItemImage>
            <SearchedRecipesItemTitle>{title}</SearchedRecipesItemTitle>
          </SearchedRecipesListItem>
        );
      })}
    </SearchedRecipes>
  );
}
