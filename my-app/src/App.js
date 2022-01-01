import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Home from './components/Pages/Home';
import Nav from './components/common/Nav';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
