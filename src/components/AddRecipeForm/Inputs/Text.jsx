import { ErrorMessage, TextLabel } from '../AddRecipeForm.styled';
import { TextInput } from './Text.styled';

export default function Text({
  register,
  setValue,
  errors,
  field,
  placeholder,
}) {
  return (
    <TextLabel>
      <TextInput
        placeholder={placeholder}
        type="text"
        {...register(field, {
          onChange: e => setValue(e.target.value),
        })}
      />
      {errors[field] && <ErrorMessage>{errors[field]?.message}</ErrorMessage>}
    </TextLabel>
  );
}
