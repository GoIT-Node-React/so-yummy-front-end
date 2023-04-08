import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import debounce from 'lodash.debounce';

import { getIngredientsByTitleService } from './../../services/ingredients.service';
import { addRecipeService } from 'services/addRecipe.service';
import useLocalStorage from 'hooks/localStorageHook';
import { storage } from 'constants/storageKeys';
import { theme } from 'theme';
import { routes } from '../../constants/routes';
import { schema } from './schema';
import { categories, cookingTime } from './data';
import { MesureSelect } from './MesureSelect';
import { FigureButton } from 'components/common/FigureButton.styled';
import Loader from 'components/common/Loader';
import {
  Border,
  CameraContainer,
  Close,
  CloseButton,
  Counter,
  CounterButton,
  CounterContainer,
  ErrorMessage,
  FileUploader,
  FlexContainer,
  Image,
  ImageContainer,
  IngredientsError,
  LoaderContainer,
  MediaContainer,
  Minus,
  Plus,
  SelectContainer,
  StyledCamera,
  StyledLabel,
  StyledTextarea,
  Subtitle,
  TextInput,
  TextLabel,
  TitleContainer,
  UtilContainer,
} from './AddRecipeForm.styled';

export default function AddRecipeForm() {
  const isTablet = useMediaQuery({
    query: `(min-width: calc(${theme.breakpoints[1]} - 1px))`,
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [thumb, setFile] = useState('');
  const [title, setTitle] = useLocalStorage(storage.TITLE, '');
  const [description, setDescription] = useLocalStorage(
    storage.DESCRIPTION,
    ''
  );
  const [instructions, setInstructions] = useLocalStorage(
    storage.INSTRUCTIONS,
    ''
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      thumb,
      title,
      description,
      category: '',
      time: '',
      ingredients: [{ id: '', measure: '' }],
      instructions,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const convertData = async value => {
    const { data } = await getIngredientsByTitleService(value);

    return data.ingredients.map(ingredient => {
      return {
        value: ingredient._id,
        label: ingredient.ttl,
      };
    });
  };

  const promiseOptions = (inputValue, callback) => {
    convertData(inputValue).then(results => callback(results));
    return;
  };

  const onSubmitHandler = async data => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('thumb', data.thumb[0]);
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('time', data.time);
      formData.append('ingredients', JSON.stringify(data.ingredients));
      formData.append('instructions', data.instructions);

      await addRecipeService(formData);

      toast.success('Recipe added to your collection');

      localStorage.removeItem(storage.TITLE);
      localStorage.removeItem(storage.DESCRIPTION);
      localStorage.removeItem(storage.INSTRUCTIONS);

      navigate(routes.MY_RECIPES_PAGE);
    } catch (error) {
      toast.error('Something went wrong... Please, try again in few minutes');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <MediaContainer>
        <StyledLabel>
          <FileUploader
            type="file"
            accept="image/*,.png,.jpg,.web"
            {...register('thumb', {
              onChange: e => setFile(URL.createObjectURL(e.target.files[0])),
            })}
          />
          {errors.thumb && <ErrorMessage>{errors.thumb?.message}</ErrorMessage>}
          {thumb && !errors.thumb && (
            <ImageContainer>
              <Image src={thumb} alt="Recipe" />
            </ImageContainer>
          )}
          <CameraContainer>
            <StyledCamera />
          </CameraContainer>
        </StyledLabel>

        <div>
          <TextLabel>
            <TextInput
              placeholder="Enter item title"
              type="text"
              {...register('title', {
                onChange: e => setTitle(e.target.value),
              })}
            />
            {errors.title && (
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            )}
          </TextLabel>

          <TextLabel>
            <TextInput
              placeholder="Enter about recipe"
              type="text"
              {...register('description', {
                onChange: e => setDescription(e.target.value),
              })}
            />
            {errors.description && (
              <ErrorMessage>{errors.description?.message}</ErrorMessage>
            )}
          </TextLabel>

          <TextLabel>
            Category
            <SelectContainer>
              <Controller
                name="category"
                control={control}
                render={({ field: { onChange, value, name } }, ref) => (
                  <Select
                    placeholder="Breakfast"
                    ref={ref}
                    value={value.value}
                    name={name}
                    options={categories}
                    isSearchable={false}
                    onChange={selectedOption => {
                      onChange(selectedOption.value);
                    }}
                    styles={{
                      dropdownIndicator: () => ({
                        color: '#8BAA36',
                        width: '10px',
                        height: '5px',
                        cursor: 'pointer',
                        marginLeft: '12px',
                        marginBottom: '12px',
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      control: () => ({
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginLeft: 'auto',
                        border: 'none',
                        fontSize: isTablet ? '14px' : '12px',
                        lineHeight: '1',
                        marginBottom: '6px',
                      }),
                      valueContainer: () => ({
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                      }),
                      option: () => ({
                        fontSize: isTablet ? '14px' : '12px',
                        lineHeight: '1.5',
                        color: 'rgba(0, 0, 0, 0.5)',
                        marginBottom: '4px',
                      }),
                      menu: baseStyles => ({
                        ...baseStyles,
                        width: isTablet ? '132px' : '123px',
                        height: isTablet ? '162px' : '144px',
                        borderRadius: '6px',

                        boxShadow:
                          '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
                      }),
                      menuList: baseStyles => ({
                        ...baseStyles,

                        width: isTablet ? '132px' : '123px',
                        height: isTablet ? '162px' : '144px',
                        padding: isTablet ? '8px 18px' : '8px 14px',
                        borderColor: 'transparent',
                        backgroundColor: '#ffffff',
                        borderRadius: '6px',
                        marginLeft: isTablet ? '-3px' : '3px',
                        overflowY: 'scroll',
                        cursor: 'pointer',
                        '::-webkit-scrollbar-thumb': {
                          backgroundColor: '#E7E5E5',
                          height: '93px',
                          width: '4px',
                          borderRadius: '12px',
                        },
                        '::-webkit-scrollbar-track': {
                          background: '#FFFFFF',

                          borderRadius: '12px',
                          width: '4px',
                        },
                        '::-webkit-scrollbar': {
                          borderRadius: '12px',
                          width: '4px',
                        },
                      }),
                    }}
                  />
                )}
              />
            </SelectContainer>
            <Border />
            {errors.category && (
              <ErrorMessage>{errors.category?.message}</ErrorMessage>
            )}
          </TextLabel>

          <TextLabel>
            Cooking time
            <SelectContainer>
              <Controller
                name="time"
                control={control}
                render={({ field: { onChange, value, name } }, ref) => (
                  <Select
                    placeholder="5 min"
                    ref={ref}
                    value={value.value}
                    name={name}
                    onChange={selectedOption => {
                      onChange(selectedOption.value);
                    }}
                    options={cookingTime}
                    isSearchable={false}
                    styles={{
                      dropdownIndicator: () => ({
                        color: '#8BAA36',
                        width: '10px',
                        height: '5px',
                        cursor: 'pointer',
                        marginLeft: '12px',
                        marginBottom: '12px',
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      control: () => ({
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginLeft: 'auto',
                        border: 'none',
                        fontSize: isTablet ? '14px' : '12px',
                        lineHeight: '1',
                        marginBottom: '6px',
                      }),
                      valueContainer: () => ({
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                      }),
                      option: () => ({
                        fontSize: isTablet ? '14px' : '12px',
                        lineHeight: '1.5',
                        color: 'rgba(0, 0, 0, 0.5)',
                        marginBottom: '4px',
                      }),
                      menu: baseStyles => ({
                        ...baseStyles,
                        width: isTablet ? '132px' : '123px',
                        height: isTablet ? '162px' : '144px',
                        borderRadius: '6px',

                        boxShadow:
                          '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
                      }),
                      menuList: baseStyles => ({
                        ...baseStyles,

                        width: isTablet ? '132px' : '123px',
                        height: isTablet ? '162px' : '144px',
                        padding: isTablet ? '8px 18px' : '8px 14px',
                        borderColor: 'transparent',
                        backgroundColor: '#ffffff',
                        borderRadius: '6px',
                        marginLeft: isTablet ? '-3px' : '3px',
                        overflowY: 'scroll',
                        cursor: 'pointer',
                        '::-webkit-scrollbar-thumb': {
                          backgroundColor: '#E7E5E5',
                          height: '93px',
                          width: '4px',
                          borderRadius: '12px',
                        },
                        '::-webkit-scrollbar-track': {
                          background: '#FFFFFF',

                          borderRadius: '12px',
                          width: '4px',
                        },
                        '::-webkit-scrollbar': {
                          borderRadius: '12px',
                          width: '4px',
                        },
                      }),
                    }}
                  />
                )}
              />
            </SelectContainer>
            <Border />
            {errors.time && <ErrorMessage>{errors.time?.message}</ErrorMessage>}
          </TextLabel>
        </div>
      </MediaContainer>

      <TitleContainer>
        <Subtitle>Ingredients</Subtitle>
        <CounterContainer>
          <CounterButton
            type="button"
            onClick={() => remove(-1)}
            disabled={fields.length <= 1}
          >
            <Minus />
          </CounterButton>
          <Counter>{fields.length}</Counter>
          <CounterButton
            type="button"
            onClick={() => append({ id: '', measure: '' })}
            disabled={fields.length >= 30}
          >
            <Plus />
          </CounterButton>
        </CounterContainer>
      </TitleContainer>

      {fields.map((field, index) => (
        <FlexContainer key={field.id}>
          <Controller
            name={`ingredients.${index}.id`}
            control={control}
            render={({ field: { onChange, value, name } }, ref) => (
              <AsyncSelect
                loadOptions={debounce(promiseOptions, 500)}
                placeholder="Ingredient"
                onChange={selectedOption => {
                  onChange(selectedOption.value);
                }}
                ref={ref}
                value={value?.value}
                name={name}
                noOptionsMessage={({ inputValue }) =>
                  !inputValue ? 'No results found' : 'Ingredients not found'
                }
                styles={{
                  control: () => ({
                    width: isTablet ? '398px' : '194px',
                    height: isTablet ? '59px' : '53px',
                    borderRadius: '6px',
                    backgroundColor: '#F5F5F5',
                    padding: isTablet ? '16px 18px' : '16px',
                    cursor: 'pointer',
                  }),
                  indicatorSeparator: () => ({
                    display: 'none',
                  }),
                  dropdownIndicator: () => ({
                    display: 'none',
                  }),
                  valueContainer: baseStyles => ({
                    ...baseStyles,
                    padding: '0',
                    margin: '0',
                    height: isTablet ? '27px' : '20px',
                  }),
                  input: baseStyles => ({
                    ...baseStyles,
                    caretColor: '#BDBDBD',
                    padding: '0',
                    margin: '0',
                    height: isTablet ? '27px' : '20px',
                    fontSize: isTablet ? '18px' : '14px',
                    lineHeight: '1.5',
                    letterSpacing: '-2%',
                    color: '#23262A',
                  }),
                  placeholder: baseStyles => ({
                    ...baseStyles,
                    fontSize: isTablet ? '18px' : '14px',
                    lineHeight: '1.5',
                    letterSpacing: '-2%',
                    color: 'rgba(0, 0, 0, 0.5)',
                  }),
                  option: () => ({
                    fontSize: isTablet ? '14px' : '12px',
                    lineHeight: '1.5',
                    color: 'rgba(0, 0, 0, 0.5)',
                    letterSpacing: '-2%',
                    marginBottom: '6px',
                  }),
                  menu: baseStyles => ({
                    ...baseStyles,
                    width: isTablet ? '398px' : '194px',
                    height: isTablet ? '172px' : '154px',
                    borderRadius: '6px',
                    boxShadow:
                      '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
                  }),
                  menuList: baseStyles => ({
                    ...baseStyles,
                    width: isTablet ? '398px' : '194px',
                    height: isTablet ? '172px' : '154px',
                    padding: '8px 4px 8px 18px',
                    fontSize: isTablet ? '14px' : '12px',
                    overflowY: 'scroll',
                    cursor: 'pointer',
                    '::-webkit-scrollbar-thumb': {
                      backgroundColor: '#E7E5E5',
                      height: '93px',
                      width: isTablet ? '6px' : '4px',
                      borderRadius: '12px',
                    },
                    '::-webkit-scrollbar-track': {
                      background: '#FFFFFF',

                      borderRadius: '12px',
                      width: isTablet ? '6px' : '4px',
                    },
                    '::-webkit-scrollbar': {
                      borderRadius: '12px',
                      width: isTablet ? '6px' : '4px',
                    },
                  }),
                }}
              />
            )}
          />
          <Controller
            name={`ingredients.${index}.measure`}
            control={control}
            render={({ field: { onChange, value, name } }, ref) => (
              <MesureSelect
                name={name}
                ref={ref}
                onChange={selectedOption => {
                  onChange(selectedOption);
                }}
                value={value}
              />
            )}
          />
          <CloseButton
            disabled={fields.length <= 1}
            onClick={() => remove(index)}
          >
            <Close />
          </CloseButton>
        </FlexContainer>
      ))}
      {errors.ingredients && (
        <IngredientsError>
          {fields.length === 1
            ? 'add at least one ingredient and measure to your recipe'
            : 'choose ingredients and measure or remove extra fields'}
        </IngredientsError>
      )}
      <UtilContainer>
        <Subtitle>Recipe preparation</Subtitle>
      </UtilContainer>

      <div style={{ position: 'relative' }}>
        <StyledTextarea
          placeholder="Enter recipe"
          {...register('instructions', {
            onChange: event => setInstructions(event.target.value),
          })}
        />
        {errors.instructions && (
          <ErrorMessage>{errors.instructions?.message}</ErrorMessage>
        )}
      </div>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <>
          {isTablet ? (
            <FigureButton variant="dark" w="161px" h="52px" p="52px 42px">
              Add
            </FigureButton>
          ) : (
            <FigureButton variant="dark" w="129px" h="46px" p="48px 42px">
              Add
            </FigureButton>
          )}
        </>
      )}
    </form>
  );
}
