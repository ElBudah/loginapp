import * as yup from 'yup';

const updateSchema = yup.object().shape({
    Name: yup.string(),
    Password: yup.string().min(6, 'Your password is too short').max(15, 'Your password is too large').nullable()
    .transform((f ,s) => f === "" ? null : s),
    Email: yup.string().email(),
});

export default updateSchema;