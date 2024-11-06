import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Login from './Components/Login/Login';
import MainSplash from './Components/MainSplash/MainSplash';

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Only show Navbar if not on MainSplash page */}
      {location.pathname !== '/' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<MainSplash />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />  
        <Route path='/register' element={<Login />} />  
      </Routes>
      
      {/* Only show Footer if not on MainSplash page */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
