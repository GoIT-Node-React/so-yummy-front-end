import {
  CameraContainer,
  FileUploader,
  SelectContainer,
  StyledCamera,
  StyledLabel,
  TextInput,
  TextLabel,
} from './AddRecipeForm.styled';
import { categories, time } from './data';
import StyledSelect from './Select';
export default function AddRecipeForm() {
  return (
    <form>
      <StyledLabel>
        <FileUploader type="file" />
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
          <StyledSelect data={categories} />
        </SelectContainer>
        <TextInput type="text" />
      </TextLabel>
      <TextLabel>
        Cooking time
        <SelectContainer>
          <StyledSelect data={time} />
        </SelectContainer>
        <TextInput type="text" />
      </TextLabel>
    </form>
  );
}
