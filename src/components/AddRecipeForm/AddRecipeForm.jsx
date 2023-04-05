import { useState } from 'react';
import createArrayFromNumber from 'helpers/createInputs';
import {
  Border,
  CameraContainer,
  Close,
  Counter,
  CounterButton,
  CounterContainer,
  FileUploader,
  FlexContainer,
  Image,
  ImageContainer,
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
import AsyncSelectComponent from './AsyncSelect';
import { categories, cookingTime } from './data';
import MesureSelect from './MesureSelect';
import StyledSelect from './Select';
import { FigureButton } from 'components/common/FigureButton.styled';
export default function AddRecipeForm() {
  const [inputs, setInputs] = useState(1);
  const [file, setFile] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [time, setTime] = useState('5 min');
  const [measure, setMeasure] = useState('');
  console.log(file);
  const onMinusInputs = () => {
    setInputs(prevValue => prevValue - 1);
  };
  const onPlusInputs = () => {
    setInputs(prevValue => prevValue + 1);
  };
  const onDeleteInput = () => {
    setInputs(prevValue => prevValue - 1);
  };
  return (
    <form>
      <StyledLabel>
        <FileUploader
          type="file"
          name="file"
          onChange={e => setFile(URL.createObjectURL(e.target.files[0]))}
        />
        {file && (
          <ImageContainer>
            <Image src={file} alt="Recipe" />
          </ImageContainer>
        )}
        <CameraContainer>
          <StyledCamera />
        </CameraContainer>
      </StyledLabel>
      <TextLabel>
        Enter item title
        <TextInput type="text" />
      </TextLabel>
      <TextLabel>
        Enter about recipe
        <TextInput type="text" />
      </TextLabel>
      <TextLabel>
        Category
        <SelectContainer>
          <StyledSelect
            data={categories}
            value={category}
            setValue={setCategory}
          />
        </SelectContainer>
        <Border />
      </TextLabel>
      <TextLabel>
        Cooking time
        <SelectContainer>
          <StyledSelect data={cookingTime} value={time} setValue={setTime} />
        </SelectContainer>
        <Border />
      </TextLabel>
      <TitleContainer>
        <Subtitle>Ingredients</Subtitle>
        <CounterContainer>
          <CounterButton
            type="button"
            onClick={onMinusInputs}
            disabled={inputs <= 1}
          >
            <Minus />
          </CounterButton>

          <Counter>{inputs}</Counter>
          <CounterButton
            type="button"
            onClick={onPlusInputs}
            disabled={inputs >= 572}
          >
            <Plus />
          </CounterButton>
        </CounterContainer>
      </TitleContainer>
      {createArrayFromNumber(inputs).map(value => (
        <FlexContainer key={value}>
          <AsyncSelectComponent />
          <MesureSelect setValue={setMeasure} />
          <Close onClick={onDeleteInput} />
        </FlexContainer>
      ))}
      <UtilContainer>
        <Subtitle>Recipe preparation</Subtitle>
      </UtilContainer>
      <StyledTextarea placeholder="Enter recipe" />
      <div style={{ height: '46px' }}>
        <FigureButton variant="dark" w="129px" h="46px" p="48px 42px">
          Add
        </FigureButton>
      </div>
    </form>
  );
}
