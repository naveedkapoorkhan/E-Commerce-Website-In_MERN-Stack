import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory/>}/>
        <Route path='/womens' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>        
      </Routes>
      
      </Router>
    
    </div>
  );
}

export default App;
