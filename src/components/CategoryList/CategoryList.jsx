import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../../redux/recipes/recipes.thunk';
import { selectFullCategoryList } from '../../redux/recipes/recipes.selectors';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';

export const CategoryList = () => {
  const { categoryName } = useParams();

  const dispatcher = useDispatch();
  const [value, setValue] = useState(0);
  const [mapArray, setMapArray] = useState([]);
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const fullCategoryList = useSelector(selectFullCategoryList);

  useEffect(() => {
    dispatcher(getCategoryList());
  }, [dispatcher]);

  useEffect(() => {
    if (fullCategoryList.length === 0) return;

    const newArray = fullCategoryList.map((e, index) => {
      if (index === 0) {
        return 'beef';
      }
      return e;
    });

    setMapArray([...newArray]);

    const idx = newArray.findIndex(e => {
      return e.toLowerCase() === categoryName;
    });

    if (idx !== -1) {
      setValue(idx);
    }
  }, [fullCategoryList, categoryName]);

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    // navigate(`/categories/${event.target.textContent}`);
  };

  const items = mapArray.map((e, index) => {
    console.log(e, index);
    return (
      <Tab
        label={e.toLowerCase()}
        key={index}
        sx={{
          padding: '0',
          paddingBottom: '28px',
          color: '#BDBDBD',
          '&.Mui-selected': {
            color: '#8BAA36',
          },
        }}
      />
    );
  });
  const onMouseEnter = () => {
    setFlag(true);
  };
  const onMouseLeave = () => {
    setFlag(false);
  };

  return (
    <Box
      sx={{
        maxWidth: '100%',
        bgcolor: 'transparent',
        borderBottom: '1px solid #E0E0E0',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* <Tabs
        onChange={handleChange}
        value={value}
        variant="scrollable"
        scrollButtons={true}
        aria-label="scrollable auto tabs example"
        sx={{
          '& .MuiTabs-scroller': {
            '& .css-1aquho2-MuiTabs-indicator': { backgroundColor: '#8BAA36' },
            '& .css-ttwr4n': { backgroundColor: '#8BAA36' },
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '& .MuiTabs-flexContainer': {
            gap: '55px',
            '& :hover': {
              color: '#8BAA36',
            },
          },

          '& .MuiTab-root': {
            textTransform: 'capitalize',
            minWidth: 'unset',
            fontSize: '18px',
            fontFamily: 'Poppins',
            fontWeight: '400',
            lineHeight: '18px',
            borderColor: '#8BAA36',
          },

          '& svg': {
            opacity: `${flag ? 1 : 0}`,
            stroke: '#8BAA36',
            strokeWidth: '3px',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        {items}
      </Tabs> */}
    </Box>
  );
};
