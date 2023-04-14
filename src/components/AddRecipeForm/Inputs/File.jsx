import { ErrorMessage, StyledLabel } from '../AddRecipeForm.styled';
import {
  CameraContainer,
  FileUploader,
  Image,
  ImageContainer,
  StyledCamera,
} from './File.styled';

export default function File({ register, setFile, errors, thumb }) {
  return (
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
  );
}
