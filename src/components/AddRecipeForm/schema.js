import * as yup from 'yup';

export const schema = yup
  .object({
    thumb: yup
      .mixed()
      .test('required', 'photo is required', value => value.length > 0)
      .test('fileSize', 'File Size is too large', value => {
        return value.length && value[0].size <= 5242880;
      })
      .test('fileType', 'unsupported file format', value => {
        return (
          value.length &&
          ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type)
        );
      }),
    title: yup.string().min(3).max(30).required(),
    description: yup.string().min(8).max(200).required(),
    category: yup.string().required(),
    time: yup.string().required(),
    ingredients: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string().required(),
          measure: yup.string().required(),
        })
      )
      .required(),
    instructions: yup.string().min(10).required(),
  })
  .required();
