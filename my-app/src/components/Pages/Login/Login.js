import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {schema} from './schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {usePost} from '../../../customHooks/useHTTP';

const Login = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const[post, data, fetching] = usePost();

    const submitForm = (data) => {
        console.log(data);
        post("users", data);
    }


    return (
        <>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group>
                            <Form.Control type='email' {...register('email', { required: true })} placeholder="Enter email" />
                            {errors.email && (<span className="text-danger">Correo no valido</span>)}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='Password' {...register('password', { required: true })} placeholder="Enter password" />
                        </Form.Group>

                        <Button type="submit">Ingresar</Button>
                    </Form>

                </Col>
            </Row>
        </>
    );
}

export default Login;