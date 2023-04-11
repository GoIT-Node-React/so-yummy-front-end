import { useState } from 'react';
import {
  CameraContainer,
  ErrorMessage,
  FileUploader,
  Image,
  ImageContainer,
  StyledCamera,
  StyledLabel,
} from './AddRecipeForm.styled';

export default function FileInput({ register, errors }) {
  const [thumb, setFile] = useState('');

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
