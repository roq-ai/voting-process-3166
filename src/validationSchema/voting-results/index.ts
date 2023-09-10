import * as yup from 'yup';

export const votingResultValidationSchema = yup.object().shape({
  selected_option: yup.string().required(),
  vote_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
