import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email : yup.string().email('email is not valid'),
    password : yup.string().min(8, 'password must have 8 characteres')
});