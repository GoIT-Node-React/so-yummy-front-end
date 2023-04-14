import {
  RelativeContainer,
  StyledTextarea,
  TextAreaMessage,
} from './Textarea.styled';

export default function Textarea({ errors, register, setInstructions }) {
  return (
    <RelativeContainer>
      <StyledTextarea
        placeholder="Enter recipe"
        {...register('instructions', {
          onChange: event => setInstructions(event.target.value),
        })}
      />
      {errors.instructions && (
        <TextAreaMessage>{errors.instructions?.message}</TextAreaMessage>
      )}
    </RelativeContainer>
  );
}
