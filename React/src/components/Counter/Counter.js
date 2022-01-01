import React from "react";
import { useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';

const Counter = () =>{
//no existen las mutaciones
 //Estado: objeto que brinda información global al componente
//implicita -> React pasa la referencia al disparador del evento
//onClick ---> Evento de sintetico de React;
  const estado = useState(0);
  //const contador = estado[0]; //leer
  //const setContador = estado[1]; //definir un nuevo estado
  const [counter, setCounter] = useState(0);


    const add = (e) =>{
        console.log('suma');
        setCounter( counter +1);
    }

    const substract = (e) =>{
        console.log('resta');
        setCounter( counter -1);
    }

    return(
    <>
    <Row>
        <h1>Mi contador bonito</h1>
    </Row>
    <Col>
        Contador {counter} 
        <Button className="mr-2" variant={"primary"} onClick={add}>
            +1
        </Button>

        <Button variant={"primary"} onClick={substract}> -1</Button>
    </Col>
    </>
    );
};

export default Counter;
