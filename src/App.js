
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom"
// import Login from './components/Login';
import Login2 from './components/Login2';
import Register from './components/Register'
import Books from './components/Books';
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Books /> }></Route>
        <Route path='/login' element={<Login2 /> }></Route>
        <Route path='/register' element={<Register />}></Route>
    </Routes>
    </ BrowserRouter>
  );
}

export default App;
