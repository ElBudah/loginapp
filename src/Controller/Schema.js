import * as yup from 'yup';

const schema = yup.object().shape({
    Name: yup.string().required(),
    Password: yup.string().min(6, 'Your password is too short').max(15, 'Your password is too large').required(),
})

export default schema;