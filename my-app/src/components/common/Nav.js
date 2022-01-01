import {Link} from 'react-router-dom';

//Link evita el comportamento por defecto cuando se recaqrga la pagina.


const Nav =() => {
 return(
     <>
     <div>
         <Link to="/login">Login</Link>
         <Link to="/register">Registro</Link>
     </div>
     </>
 )
}

export default Nav;