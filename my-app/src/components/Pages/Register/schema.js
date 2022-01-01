import * as yup from 'yup';

export const schema = yup.object().shape({
    username: yup.string().required(),
    age: yup.number().min(18).max(99).required().positive().integer(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    
})