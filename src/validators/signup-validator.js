import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    email : yup.string().email('email is not valid'),
    username : yup.string().required('username is required'),
    password : yup.string().min(8, 'password must have 8 characteres')
});