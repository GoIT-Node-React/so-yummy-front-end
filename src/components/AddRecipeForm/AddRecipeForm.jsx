import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useLocalStorage from 'hooks/localStorageHook';
import { storage } from 'constants/storageKeys';
import {
  Border,
  CameraContainer,
  Close,
  Counter,
  CounterButton,
  CounterContainer,
  ErrorMessage,
  FileUploader,
  FlexContainer,
  Image,
  ImageContainer,
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
// import AsyncSelectComponent from './AsyncSelect';
import { categories, cookingTime } from './data';
import { MesureSelect } from './MesureSelect';

import { FigureButton } from 'components/common/FigureButton.styled';
import { asyncSelect } from './SelectStyles/asyncSelect';

const schema = yup
  .object({
    file: yup
      .mixed()
      .test('required', 'photo is required', value => value.length > 0)
      .test('fileSize', 'File Size is too large', value => {
        return value.length && value[0].size <= 5242880;
      })
      .test('fileType', 'Unsupported File Format', value => {
        return (
          value.length &&
          ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type)
        );
      }),
    title: yup.string().min(3).max(30).required(),
    description: yup.string().min(8).max(30).required(),
    category: yup.string().required(),
    time: yup.string().required(),
    // ingredients: yup.array().of(
    //   yup.object().shape({
    //     ingredient: yup.string().required(),
    //     measure: yup.string().required(),
    //   })
    // ),
    instructions: yup.string().min(10).required(),
    // title: yup.number().positive().integer().required(),
  })
  .required();

export default function AddRecipeForm() {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const [file, setFile] = useLocalStorage(storage.FILE, '');
  const [title, setTitle] = useLocalStorage(storage.TITLE, '');
  const [description, setDescription] = useLocalStorage(
    storage.DESCRIPTION,
    ''
  );
  const [category, setCategory] = useLocalStorage(storage.CATEGORY, '');
  const [time, setTime] = useLocalStorage(storage.TIME, '');
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
      file,
      title,
      description,
      category,
      time,
      ingredients: [{ ingredient: '', measure: '' }],
      instructions,
    },
  });
  console.log(errors.file?.message);
  console.log(errors.title?.message);
  console.log(errors.description?.message);
  console.log(errors.category?.message);
  console.log(errors.time?.message);
  console.log(errors.ingredients?.message);
  console.log(errors.instructions?.message);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const onSubmitHandler = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <MediaContainer>
        <StyledLabel>
          <FileUploader
            type="file"
            accept="image/*"
            {...register('file', {
              onChange: e => setFile(URL.createObjectURL(e.target.files[0])),
            })}
          />
          {errors.file && <ErrorMessage>{errors.file?.message}</ErrorMessage>}
          {file && (
            <ImageContainer>
              <Image src={file} alt="Recipe" />
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
                      setCategory(selectedOption.value);
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
                      setTime(selectedOption.value);
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
            disabled={fields <= 1}
          >
            <Minus />
          </CounterButton>

          <Counter>{fields.length}</Counter>
          <CounterButton
            type="button"
            onClick={() => append({ ingredient: '', measure: '' })}
            disabled={fields >= 50}
          >
            <Plus />
          </CounterButton>
        </CounterContainer>
      </TitleContainer>
      {fields.map((field, index) => (
        <FlexContainer key={field.id}>
          <Controller
            name={`ingredients.${index}.ingredient`}
            control={control}
            render={({ field: { onChange, value, name } }, ref) => (
              <AsyncSelect
                // loadOptions

                placeholder="Ingredient"
                onChange={onChange}
                ref={ref}
                value={value}
                name={name}
                styles={{
                  control: () => ({
                    width: isTablet ? '398px' : '194px',
                    height: isTablet ? '59px' : '53px',
                    borderRadius: '6px',
                    backgroundColor: '#F5F5F5',
                    padding: isTablet ? '16px 18px' : '16px',
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
                    height: '20px',
                    fontSize: isTablet ? '18px' : '14px',
                    lineHeight: '1.5',
                    letterSpacing: '-2%',
                    color: 'rgba(0, 0, 0, 0.5)',
                  }),
                  placeholder: baseStyles => ({
                    ...baseStyles,
                    fontSize: '14px',
                    lineHeight: '1.5',
                    letterSpacing: '-2%',
                    color: 'rgba(0, 0, 0, 0.5)',
                  }),
                  menu: baseStyles => ({
                    ...baseStyles,
                    width: isTablet ? '398px' : '194px',
                    height: isTablet ? '172px' : '154px',
                    borderRadius: '6px',
                    boxShadow:
                      '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
                    padding: '8px 4px 8px 18px',
                    fontSize: isTablet ? '14px' : '12px',
                    lineHeight: '1.5',
                    letterSpacing: '-2%',
                    color: 'rgba(0, 0, 0, 0.5)',
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
                // onBlur={console.log(onBlur)}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Close onClick={() => remove(index)} />
        </FlexContainer>
      ))}
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

      {isTablet ? (
        <FigureButton variant="dark" w="161px" h="52px" p="52px 42px">
          Add
        </FigureButton>
      ) : (
        <FigureButton variant="dark" w="129px" h="46px" p="48px 42px">
          Add
        </FigureButton>
      )}
    </form>
  );
}
