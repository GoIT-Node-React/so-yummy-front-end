import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addRecipeService } from 'services/recipe.service';
import useLocalStorage from 'hooks/useLocalStorage';
import { storage } from 'constants/storageKeys';
import { theme } from 'theme';
import { routes } from '../../constants/routes';
import { schema } from './schema';

import { Measure } from './Selects/Measure/Mesure';
import { Category } from './Selects/Category/Category';
import { Time } from './Selects/Time/Time';
import { Ingredient } from './Selects/Ingredient/Ingredient';
import File from './Inputs/File';
import Text from './Inputs/Text';
import Textarea from './Textarea/Textarea';
import Counter from './Counter/Counter';
import { MainButton } from 'components/common/FigureButton.styled';
import Loader from 'components/common/Loader';
import {
  Border,
  Close,
  CloseButton,
  ErrorMessage,
  FlexContainer,
  IngredientsError,
  LoaderContainer,
  MediaContainer,
  SelectContainer,
  Subtitle,
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
      category: 'Breakfast',
      time: '5',
      ingredients: [{ id: '', measure: '' }],
      instructions,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

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
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <MediaContainer>
        <File
          register={register}
          setFile={setFile}
          errors={errors}
          thumb={thumb}
        />

        <div>
          <Text
            errors={errors}
            register={register}
            setValue={setTitle}
            field="title"
            placeholder="Enter item title"
          />
          <Text
            errors={errors}
            register={register}
            setValue={setDescription}
            field="description"
            placeholder="Enter about recipe"
          />
          <TextLabel>
            Category
            <SelectContainer>
              <Controller
                name="category"
                control={control}
                render={({ field: { onChange, value, name } }, ref) => (
                  <Category
                    onChange={onChange}
                    value={value}
                    name={name}
                    ref={ref}
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
                  <Time
                    ref={ref}
                    onChange={onChange}
                    name={name}
                    value={value}
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
        <Counter fields={fields} remove={remove} append={append} />
      </TitleContainer>

      {fields.map((field, index) => (
        <FlexContainer key={field.id}>
          <Controller
            name={`ingredients.${index}.id`}
            control={control}
            render={({ field: { onChange, value, name } }, ref) => (
              <Ingredient
                ref={ref}
                onChange={onChange}
                value={value}
                name={name}
              />
            )}
          />
          <Controller
            name={`ingredients.${index}.measure`}
            control={control}
            render={({ field: { onChange, value, name } }, ref) => (
              <Measure
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
      <Textarea
        errors={errors}
        register={register}
        setInstructions={setInstructions}
      />
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <>
          {isTablet ? (
            <MainButton variant="dark" w="161px" p="14px 64px">
              Add
            </MainButton>
          ) : (
            <MainButton variant="dark" w="129px" p="12px 48px">
              Add
            </MainButton>
          )}
        </>
      )}
    </form>
  );
}
