import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import Counter from './components/Counter/Counter'; */
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';



/* function App() {
  const handleOnAdd = () => {
    console.log('se hizo click en agregar al carrito')
  } */
function App(){
  return (
    <div className="App">
      {/* <Navbar />
      <ItemListContainer />
      <Counter onAdd={handleOnAdd}/> */}
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={ <ItemDetailContainer />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
           
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
