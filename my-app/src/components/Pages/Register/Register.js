import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
    };


    return (
        <>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group>
                            <Form.Control type='text' {...register('name', { required: true })} placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='text' {...register('userName', { required: true })} placeholder="userName" />
                            {errors.userName && (<span className="text-danger">Nombre de usuario no valido</span>)}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='number' {...register('age', { required: true })} placeholder="Enter age" />
                            {errors.age && (<span className="text-danger">Edad  no valida</span>)}

                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='email' {...register('email', { required: true })} placeholder="Enter email" />
                            {errors.email && (<span className="text-danger">Correo no valido</span>)}

                        </Form.Group>
                        <Form.Group>
                            <Form.Control type='Password' {...register('password', { required: true })} placeholder="Enter password" />
                        </Form.Group>

                        <Button type="submit">Validar</Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default Register;