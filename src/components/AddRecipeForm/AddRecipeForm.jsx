import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addRecipeService } from 'services/recipe.service';
import useLocalStorage from 'hooks/localStorageHook';
import { storage } from 'constants/storageKeys';
import { theme } from 'theme';
import { routes } from '../../constants/routes';
import { schema } from './schema';
import { MesureSelect } from './MesureSelect';
import { MainButton } from 'components/common/FigureButton.styled';
import Loader from 'components/common/Loader';
import FileInput from './FileUploader';
import TextInputs from './TextInput';
import CategorySelect from './CategorySelect';
import TimeSelect from './TimeSelect';
import { IngredientSelect } from './IngredientSelect';
import {
  Border,
  Close,
  CloseButton,
  Counter,
  CounterButton,
  CounterContainer,
  ErrorMessage,
  FlexContainer,
  IngredientsError,
  LoaderContainer,
  MediaContainer,
  Minus,
  Plus,
  RelativeContainer,
  SelectContainer,
  StyledTextarea,
  Subtitle,
  TextAreaError,
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
      thumb: '',
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
      toast.error('Something went wrong... Please, try again in few minutes');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <MediaContainer>
        <FileInput register={register} errors={errors} />

        <div>
          <TextInputs
            register={register}
            errors={errors}
            setTitle={setTitle}
            setDescription={setDescription}
          />

          <TextLabel>
            Category
            <SelectContainer>
              <Controller
                name="category"
                control={control}
                render={({ field: { onChange, value, name } }, ref) => (
                  <CategorySelect
                    onChange={selectedOption => {
                      onChange(selectedOption.value);
                    }}
                    value={value.value}
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
                  <TimeSelect
                    value={value.value}
                    name={name}
                    ref={ref}
                    onChange={selectedOption => {
                      onChange(selectedOption.value);
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
              <IngredientSelect
                ref={ref}
                name={name}
                value={value}
                onChange={selectedOption => {
                  onChange(selectedOption.value);
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

      <RelativeContainer>
        <StyledTextarea
          placeholder="Enter recipe"
          {...register('instructions', {
            onChange: event => setInstructions(event.target.value),
          })}
        />
        {errors.instructions && (
          <TextAreaError>{errors.instructions?.message}</TextAreaError>
        )}
      </RelativeContainer>

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
