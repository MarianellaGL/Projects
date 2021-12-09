import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";



const Register = () => {

    // const input = useState(""); //return [state, setState]
    //setter: fcion que cambia el valor del estado.
    const initialState = {
        name:"",
        mail:"",
    };


    const[user, setUser] = useState(initialState);
//repesento datos de forma dinámica asi:
//el spread conserva el valor previo
    const handleInput = (e) =>{
      setUser({
          ...user,
          [e.target.name]: e.target.value,
          [e.target.mail]: e.target.value,
          
      });
    };

    const handleReset = (e) =>{
        setUser(initialState)
    }

   /* const handleInputName = (e) =>{
        setUser({ ...user, name:e.target.value})
    }
    const handleInputMail = (e) =>{
        setUser({ ...user, mail:e.target.value})
    }
*/

    /*const handleInputName = (e) =>{ //e referencia del input 
        //target -> la referencia del elemento en si
        //value -> el que tiene el valor
        console.log(e.target.value);
        setName(e.target.value);
    };*/
    
    return(
        <>
        <h3>Registro</h3>
        <input type="text"
        name="name"
        placeholder="nombre" 
        onChange={handleInput}
        value={user.name} />
        <input type="text"
        name="mail" 
        placeholder="correo@example.com" 
        onChange={handleInput}
        value={user.mail}/>
        <h4>{user.name}{user.mail}</h4>
        <Button type="button" onClick={handleReset}> limpiar </Button>
        </>
    )
}

export default Register;