import * as yup from 'yup';

export const voteValidationSchema = yup.object().shape({
  title: yup.string().required(),
  option_1: yup.string().required(),
  option_2: yup.string().required(),
  option_3: yup.string().required(),
  option_4: yup.string().required(),
  option_5: yup.string().required(),
  school_id: yup.string().nullable().required(),
});
