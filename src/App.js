import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './pages/cart';
import Home from './pages/home';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
