import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';




function App(){
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={ <ItemDetailContainer />}/> 
            <Route path='/cart' element={<Cart />}/> 
            <Route path='/checkout' element={<Checkout />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>

          <Footer />
           
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
