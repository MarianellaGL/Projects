import * as yup from 'yup';

//filtrar dentrode un login...? 
export const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})