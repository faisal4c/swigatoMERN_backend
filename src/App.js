import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import MyCart from './pages/MyCart';
import Order from './pages/Order';
import OrderSuccess from './pages/OrderSuccess';
import MyOrders from './pages/MyOrders';
import ContactDeveloper from './pages/ContactDeveloper';

//importing cart context provider
import { CartContextProvider } from './contexts/cartContextProvider'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/menu' exact element={<Menu />} />
          <Route path='/mycart' exact element={<MyCart />} />
          <Route path='/order' exact element={<Order />} />
          <Route path='/ordersuccess' exact element={<OrderSuccess />} />
          <Route path='/myorders' exact element={<MyOrders />} />
          <Route path='/contactdeveloper' exact element={<ContactDeveloper />} />
        </Routes>
        <Footer/>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
