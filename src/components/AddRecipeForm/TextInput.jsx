import { ErrorMessage, TextInput, TextLabel } from './AddRecipeForm.styled';

export default function TextInputs({
  register,
  errors,
  setDescription,
  setTitle,
}) {
  return (
    <>
      <TextLabel>
        <TextInput
          placeholder="Enter item title"
          type="text"
          {...register('title', {
            onChange: e => setTitle(e.target.value),
          })}
        />
        {errors.title && <ErrorMessage>{errors.title?.message}</ErrorMessage>}
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
    </>
  );
}
